
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyUms8lgrcWZsDyZfPUPSu1A4y04CVvPjjGHT-zmqIXNg9oZQBmclKN43P0B5ssnTO--g/exec';

export const syncProductToSheet = async (product: any) => {
  try {
    const payload = {
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
      dateAdded: new Date().toISOString()
    };
    
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    return true;
  } catch (error) {
    console.error('Error syncing to Google Sheet:', error);
    return false;
  }
};

export const syncAllProducts = async (products: any[]) => {
  try {
    for (const product of products) {
      await syncProductToSheet(product);
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    return true;
  } catch (error) {
    console.error('Error syncing all products:', error);
    return false;
  }
};

export const syncOrderToSheet = async (order: any) => {
  try {
    const payload = {
      type: 'order',
      ...order
    };
    
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(payload),
    });
    
    return true;
  } catch (error) {
    console.error('Error syncing order to Google Sheet:', error);
    return false;
  }
};
