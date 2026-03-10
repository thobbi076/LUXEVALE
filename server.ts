console.log(`[Server] server.ts is loading... NODE_ENV: ${process.env.NODE_ENV}`);
import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';
import { google } from 'googleapis';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use process.cwd() to ensure we are writing to the root of the project
const DATA_FILE = path.join(process.cwd(), 'orders.json');

console.log(`[Server] Data file path: ${DATA_FILE}`);

// Ensure data file exists
if (!fs.existsSync(DATA_FILE)) {
  console.log('[Server] Creating new orders.json file');
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
} else {
  console.log('[Server] Found existing orders.json file');
}

// Google Sheets Setup
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_ID;
const SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

async function syncToGoogleSheets(order: any) {
  if (!SPREADSHEET_ID || !SERVICE_ACCOUNT_EMAIL || !PRIVATE_KEY) {
    console.log('[Sheets] Missing credentials, skipping sync');
    return;
  }

  try {
    const auth = new google.auth.JWT({
      email: SERVICE_ACCOUNT_EMAIL,
      key: PRIVATE_KEY,
      scopes: SCOPES,
    });

    const sheets = google.sheets({ version: 'v4', auth });
    
    const values = [[
      order.id,
      order.customerName || 'Unknown',
      '', // email placeholder
      '', // phone placeholder
      order.items.map((i: any) => `${i.name} (x${i.quantity})`).join(', '),
      order.total,
      order.status,
      order.date
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:H',
      valueInputOption: 'RAW',
      requestBody: { values },
    });
    
    console.log(`[Sheets] Order ${order.id} synced successfully`);
  } catch (error) {
    console.error('[Sheets] Error syncing order:', error);
  }
}

async function startServer() {
  try {
    const app = express();
    const PORT = 3000;

    app.use(express.json());

  // Request logging middleware
  app.use((req, res, next) => {
    console.log(`[Server] ${req.method} ${req.url}`);
    next();
  });

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/test-server", (req, res) => {
    res.send("Server is running!");
  });

  // Admin login
  app.post("/api/admin/login", (req, res) => {
    const { password } = req.body;
    const adminPassword = process.env.ADMIN_PASSWORD || 'luxevale2026';
    
    // Dynamic password based on current hour (e.g., Luxe14)
    const today = new Date();
    const hour = String(today.getHours()).padStart(2, '0');
    const dynamicPassword = `Luxe${hour}`;
    
    // Also check UTC hour in case of timezone mismatch
    const utcHour = String(today.getUTCHours()).padStart(2, '0');
    const dynamicPasswordUTC = `Luxe${utcHour}`;
    
    console.log(`[Login] Attempt with password. Server Local Hour: ${hour}, UTC Hour: ${utcHour}`);
    
    if (password === adminPassword || password === dynamicPassword || password === dynamicPasswordUTC) {
      res.json({ success: true });
    } else {
      res.status(401).json({ success: false, error: 'Invalid password' });
    }
  });

  // Get all orders
  app.get("/api/orders", (req, res) => {
    try {
      console.log('[Server] GET /api/orders');
      if (fs.existsSync(DATA_FILE)) {
        const data = fs.readFileSync(DATA_FILE, 'utf-8');
        const orders = JSON.parse(data);
        console.log(`[Server] Returning ${orders.length} orders`);
        res.json(orders);
      } else {
        console.log('[Server] orders.json not found, returning empty array');
        res.json([]);
      }
    } catch (error) {
      console.error("[Server] Error reading orders:", error);
      res.status(500).json({ error: "Failed to read orders" });
    }
  });

  // Add a new order
  app.post("/api/orders", (req, res) => {
    try {
      const newOrder = req.body;
      console.log(`[Server] POST /api/orders - ID: ${newOrder.id}`);
      
      let orders = [];
      if (fs.existsSync(DATA_FILE)) {
        const data = fs.readFileSync(DATA_FILE, 'utf-8');
        orders = JSON.parse(data);
      }
      
      // Check if order already exists to prevent duplicates
      if (!orders.find((o: any) => o.id === newOrder.id)) {
        orders.unshift(newOrder); // Add to beginning
        fs.writeFileSync(DATA_FILE, JSON.stringify(orders, null, 2));
        console.log(`[Server] Order saved. Total orders: ${orders.length}`);
        
        // Sync to Google Sheets in background
        syncToGoogleSheets(newOrder).catch(err => console.error('[Sheets] Background sync failed:', err));
      } else {
        console.log(`[Server] Order ${newOrder.id} already exists. Skipping.`);
      }
      
      res.json({ success: true, order: newOrder });
    } catch (error) {
      console.error("[Server] Error saving order:", error);
      res.status(500).json({ error: "Failed to save order" });
    }
  });

  // Update order status
  app.put("/api/orders/:id", (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      console.log(`[Server] PUT /api/orders/${id} - Status: ${status}`);
      
      if (fs.existsSync(DATA_FILE)) {
        const data = fs.readFileSync(DATA_FILE, 'utf-8');
        let orders = JSON.parse(data);
        
        const orderIndex = orders.findIndex((o: any) => o.id === id);
        if (orderIndex > -1) {
          orders[orderIndex].status = status;
          fs.writeFileSync(DATA_FILE, JSON.stringify(orders, null, 2));
          console.log(`[Server] Order ${id} updated.`);
          res.json({ success: true, order: orders[orderIndex] });
        } else {
          console.log(`[Server] Order ${id} not found.`);
          res.status(404).json({ error: "Order not found" });
        }
      } else {
        res.status(404).json({ error: "Order file not found" });
      }
    } catch (error) {
      console.error("[Server] Error updating order:", error);
      res.status(500).json({ error: "Failed to update order" });
    }
  });
  
  // Catch-all for API routes that don't exist to prevent falling through to HTML
  app.all("/api/*", (req, res) => {
    console.log(`[Server] 404 API Not Found: ${req.method} ${req.url}`);
    res.status(404).json({ error: `API route not found: ${req.method} ${req.url}` });
  });

  const distPath = path.join(__dirname, "dist");
  const isProduction = process.env.NODE_ENV === "production" && fs.existsSync(distPath);
  console.log(`[Server] isProduction: ${isProduction}, distPath exists: ${fs.existsSync(distPath)}`);

  if (isProduction) {
    // Serve static files in production
    console.log(`[Server] Serving static files from ${distPath}`);
    app.use(express.static(distPath));

    // SPA fallback for production
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  } else {
    // Vite middleware for development
    console.log(`[Server] Initializing Vite middleware... NODE_ENV: ${process.env.NODE_ENV}`);
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    
    // Use the middleware directly
    app.use(vite.middlewares);
    
    console.log(`[Server] Vite middleware initialized.`);
  }

  console.log(`[Server] Starting server on port ${PORT}...`);
  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Server] Server running on http://0.0.0.0:${PORT}`);
    console.log(`[Server] Data file: ${DATA_FILE}`);
    console.log(`[Server] NODE_ENV: ${process.env.NODE_ENV}`);
  });

  server.on('error', (err) => {
    console.error("[Server] Server error event:", err);
  });
} catch (error) {
  console.error("[Server] FATAL ERROR during server startup:", error);
}
}

startServer();
