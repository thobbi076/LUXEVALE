import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { motion } from 'motion/react';
import { ShoppingBag, ShoppingCart, TrendingUp, Users, Database, Check, AlertTriangle, Loader2, RefreshCw } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';

const AdminDashboard = () => {
  const { 
    products, 
    orders, 
    isGoogleSheetSyncEnabled, 
    toggleGoogleSheetSync, 
    syncAllToSheet, 
    lastSyncStatus 
  } = useAdmin();

  const [isSyncing, setIsSyncing] = useState(false);

  const handleManualSync = async () => {
    setIsSyncing(true);
    await syncAllToSheet();
    setIsSyncing(false);
  };

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const totalOrders = orders.length;
  const totalProducts = products.length;
  const lowStockProducts = products.filter(p => (p.stock || 0) < 5).length;

  const stats = [
    { label: 'Total Revenue', value: `₦${totalRevenue.toLocaleString()}`, icon: TrendingUp, color: 'bg-green-100 text-green-600' },
    { label: 'Total Orders', value: totalOrders, icon: ShoppingCart, color: 'bg-blue-100 text-blue-600' },
    { label: 'Total Products', value: totalProducts, icon: ShoppingBag, color: 'bg-purple-100 text-purple-600' },
    { label: 'Low Stock Items', value: lowStockProducts, icon: Users, color: 'bg-orange-100 text-orange-600' },
  ];

  // Prepare data for charts
  const revenueData = orders.reduce((acc: any[], order) => {
    const date = new Date(order.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const existing = acc.find(item => item.date === date);
    if (existing) {
      existing.total += order.total;
    } else {
      acc.push({ date, total: order.total });
    }
    return acc;
  }, []).reverse().slice(0, 7).reverse(); // Last 7 days/entries

  const statusData = orders.reduce((acc: any[], order) => {
    const existing = acc.find(item => item.name === order.status);
    if (existing) {
      existing.value += 1;
    } else {
      acc.push({ name: order.status, value: 1 });
    }
    return acc;
  }, []);

  const productData = orders.flatMap(order => order.items).reduce((acc: any[], item) => {
    const existing = acc.find(p => p.name === item.name);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      acc.push({ name: item.name, quantity: item.quantity });
    }
    return acc;
  }, []).sort((a, b) => b.quantity - a.quantity).slice(0, 5);

  const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444'];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Google Sheets Sync Section */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-lg text-green-600">
              <Database className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Google Sheets Sync</h2>
              <p className="text-sm text-gray-500">Manage product synchronization with Google Sheets</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {lastSyncStatus && (
              <span className={`text-sm flex items-center gap-1 ${lastSyncStatus.success ? 'text-green-600' : 'text-red-600'}`}>
                {lastSyncStatus.success ? <Check className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                Last sync: {new Date(lastSyncStatus.time).toLocaleString()}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-4">
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer"
                checked={isGoogleSheetSyncEnabled}
                onChange={toggleGoogleSheetSync}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900">
                Auto-sync on product add
              </span>
            </label>
          </div>

          <button
            onClick={handleManualSync}
            disabled={isSyncing}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
          >
            {isSyncing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Syncing...
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4" />
                Sync All Products
              </>
            )}
          </button>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Revenue Over Time</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip formatter={(value) => `₦${Number(value).toLocaleString()}`} />
                <Legend />
                <Bar dataKey="total" name="Revenue" fill="#4F46E5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Orders by Status */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Orders by Status</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Best Selling Products */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Best Selling Products</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={150} tick={{fontSize: 12}} />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantity" name="Units Sold" fill="#10B981" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {orders.slice(0, 5).map((order) => (
                  <tr key={order.id}>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">#{order.id}</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{order.customerName}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                        order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">₦{order.total.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Low Stock Alert</h2>
          <div className="space-y-4">
            {products.filter(p => (p.stock || 0) < 5).slice(0, 5).map((product) => (
              <div key={product.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 truncate max-w-[200px]">{product.name}</p>
                    <p className="text-xs text-gray-500">Stock: {product.stock}</p>
                  </div>
                </div>
                <button className="text-sm text-indigo-600 hover:text-indigo-900 font-medium">Restock</button>
              </div>
            ))}
            {products.filter(p => (p.stock || 0) < 5).length === 0 && (
              <p className="text-gray-500 text-sm">All products are well stocked.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
