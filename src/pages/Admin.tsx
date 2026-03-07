
import React, { useState } from 'react';
import { products, Product } from '../data/products';
import { syncProductToSheet } from '../services/googleSheetService';
import { motion } from 'motion/react';
import { Check, Loader2, UploadCloud } from 'lucide-react';

const Admin = () => {
  const [syncing, setSyncing] = useState<string | null>(null);
  const [syncAllStatus, setSyncAllStatus] = useState<'idle' | 'syncing' | 'success' | 'error'>('idle');
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    id: '',
    name: '',
    category: '',
    price: 0,
    image: '',
    description: '',
    rating: 5,
    reviews: 0,
    isNew: true,
  });

  const handleSync = async (product: Product) => {
    setSyncing(product.id);
    try {
      await syncProductToSheet(product);
      // Since no-cors doesn't return status, we assume success if no error thrown
      setTimeout(() => setSyncing(null), 1000);
    } catch (error) {
      console.error(error);
      setSyncing(null);
    }
  };

  const handleSyncAll = async () => {
    setSyncAllStatus('syncing');
    try {
      for (const product of products) {
        await syncProductToSheet(product);
        // Add a small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      setSyncAllStatus('success');
      setTimeout(() => setSyncAllStatus('idle'), 3000);
    } catch (error) {
      console.error(error);
      setSyncAllStatus('error');
    }
  };

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.price) return;
    
    const productToSend = {
      ...newProduct,
      id: newProduct.id || newProduct.name?.toLowerCase().replace(/\s+/g, '-'),
    } as Product;

    await handleSync(productToSend);
    alert('Product sent to Google Sheet!');
    setNewProduct({
      id: '',
      name: '',
      category: '',
      price: 0,
      image: '',
      description: '',
      rating: 5,
      reviews: 0,
      isNew: true,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Product Admin Dashboard</h1>
          <button
            onClick={handleSyncAll}
            disabled={syncAllStatus === 'syncing'}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              syncAllStatus === 'success'
                ? 'bg-green-600 text-white'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {syncAllStatus === 'syncing' ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : syncAllStatus === 'success' ? (
              <Check className="w-5 h-5" />
            ) : (
              <UploadCloud className="w-5 h-5" />
            )}
            {syncAllStatus === 'syncing' ? 'Syncing All...' : syncAllStatus === 'success' ? 'Synced!' : 'Sync All Products'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Add New Product Form */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-6">Add New Product to Sheet</h2>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Price</label>
                  <input
                    type="number"
                    value={newProduct.price}
                    onChange={e => setNewProduct({...newProduct, price: Number(e.target.value)})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Category</label>
                  <input
                    type="text"
                    value={newProduct.category}
                    onChange={e => setNewProduct({...newProduct, category: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  type="url"
                  value={newProduct.image}
                  onChange={e => setNewProduct({...newProduct, image: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={newProduct.description}
                  onChange={e => setNewProduct({...newProduct, description: e.target.value})}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
                  rows={3}
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add & Sync to Sheet
              </button>
            </form>
          </div>

          {/* Existing Products List */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-6">Existing Products ({products.length})</h2>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {products.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-md" />
                    <div>
                      <h3 className="font-medium text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-500">₦{product.price.toLocaleString()}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleSync(product)}
                    disabled={syncing === product.id}
                    className={`p-2 rounded-full transition-colors ${
                      syncing === product.id
                        ? 'bg-gray-100 text-gray-400'
                        : 'bg-white text-indigo-600 hover:bg-indigo-50 shadow-sm border border-gray-200'
                    }`}
                    title="Sync to Sheet"
                  >
                    {syncing === product.id ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <UploadCloud className="w-5 h-5" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Admin;
