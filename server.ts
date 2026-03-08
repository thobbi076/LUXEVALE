import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_FILE = path.join(__dirname, 'orders.json');

// Ensure data file exists
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
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
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      res.json(JSON.parse(data));
    } catch (error) {
      console.error("Error reading orders:", error);
      res.status(500).json({ error: "Failed to read orders" });
    }
  });

  // Add a new order
  app.post("/api/orders", (req, res) => {
    try {
      const newOrder = req.body;
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      const orders = JSON.parse(data);
      
      // Check if order already exists to prevent duplicates
      if (!orders.find((o: any) => o.id === newOrder.id)) {
        orders.unshift(newOrder); // Add to beginning
        fs.writeFileSync(DATA_FILE, JSON.stringify(orders, null, 2));
      }
      
      res.json({ success: true, order: newOrder });
    } catch (error) {
      console.error("Error saving order:", error);
      res.status(500).json({ error: "Failed to save order" });
    }
  });

  // Update order status
  app.put("/api/orders/:id", (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      let orders = JSON.parse(data);
      
      const orderIndex = orders.findIndex((o: any) => o.id === id);
      if (orderIndex > -1) {
        orders[orderIndex].status = status;
        fs.writeFileSync(DATA_FILE, JSON.stringify(orders, null, 2));
        res.json({ success: true, order: orders[orderIndex] });
      } else {
        res.status(404).json({ error: "Order not found" });
      }
    } catch (error) {
      console.error("Error updating order:", error);
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
