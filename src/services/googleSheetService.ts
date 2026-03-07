
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyUms8lgrcWZsDyZfPUPSu1A4y04CVvPjjGHT-zmqIXNg9oZQBmclKN43P0B5ssnTO--g/exec';

export const syncProductToSheet = async (product: any) => {
  try {
    // Google Apps Script Web Apps usually require no-cors for simple POSTs from browser
    // However, to get a response, we need CORS. If the script doesn't support CORS, we might have issues.
    // We'll try standard fetch first.
    // Often these scripts use Content-Type: application/x-www-form-urlencoded or json
    
    // We'll send as text/plain to avoid preflight OPTIONS request
    // The Google Apps Script should be written to handle JSON.parse(e.postData.contents)
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(product),
    });
    
    return true;
  } catch (error) {
    console.error('Error syncing to Google Sheet:', error);
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
