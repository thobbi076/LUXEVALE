import React, { useState } from 'react';
import { useAdmin } from '../../context/AdminContext';
import { motion } from 'motion/react';
import { Save, Check } from 'lucide-react';

const AdminContent = () => {
  const { content, updateContent } = useAdmin();
  const [formData, setFormData] = useState(content);
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateContent(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="sticky top-0 z-10 bg-gray-50/95 backdrop-blur-sm py-4 border-b border-gray-200 mb-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Website Content</h1>
        <button
          onClick={handleSubmit}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
        >
          {isSaved ? <Check className="w-5 h-5" /> : <Save className="w-5 h-5" />}
          {isSaved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Banner Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-6 border-b pb-2">Homepage Banner</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Banner Title</label>
              <input
                type="text"
                value={formData.banner.title}
                onChange={(e) => setFormData({ ...formData, banner: { ...formData.banner, title: e.target.value } })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Subtitle</label>
              <input
                type="text"
                value={formData.banner.subtitle}
                onChange={(e) => setFormData({ ...formData, banner: { ...formData.banner, subtitle: e.target.value } })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Banner Image URL</label>
              <input
                type="url"
                value={formData.banner.image}
                onChange={(e) => setFormData({ ...formData, banner: { ...formData.banner, image: e.target.value } })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border p-2"
              />
              {formData.banner.image && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-2">Preview:</p>
                  <img src={formData.banner.image} alt="Banner Preview" className="w-full h-48 object-cover rounded-lg" />
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Button Link</label>
              <input
                type="text"
                value={formData.banner.link}
                onChange={(e) => setFormData({ ...formData, banner: { ...formData.banner, link: e.target.value } })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border p-2"
              />
            </div>
          </div>
        </motion.div>

        {/* Promo Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
        >
          <h2 className="text-lg font-semibold text-gray-900 mb-6 border-b pb-2">Promotional Bar</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Top Bar Message</label>
            <input
              type="text"
              value={formData.promoMessage}
              onChange={(e) => setFormData({ ...formData, promoMessage: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 border p-2"
              placeholder="e.g., Free shipping on orders over ₦50,000"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminContent;
