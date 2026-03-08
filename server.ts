import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from 'url';
import fs from 'fs';

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

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
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

  if (process.env.NODE_ENV === "production") {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));

    // SPA fallback for production
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  } else {
    // Vite middleware for development
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
