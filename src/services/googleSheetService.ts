
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyUms8lgrcWZsDyZfPUPSu1A4y04CVvPjjGHT-zmqIXNg9oZQBmclKN43P0B5ssnTO--g/exec';

export const syncProductToSheet = async (product: any) => {
  try {
    // Google Apps Script Web Apps usually require no-cors for simple POSTs from browser
    // However, to get a response, we need CORS. If the script doesn't support CORS, we might have issues.
    // We'll try standard fetch first.
    // Often these scripts use Content-Type: application/x-www-form-urlencoded or json
    
    // We'll send as JSON stringified in the body, or as URL encoded parameters.
    // Let's try sending as a POST with JSON body.
    
    // Note: 'no-cors' mode will not return the response, but will send the data.
    // If the script redirects (which they often do), 'follow' is needed.
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // This is often required for Google Apps Scripts called from client-side
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    
    return true;
  } catch (error) {
    console.error('Error syncing to Google Sheet:', error);
    return false;
  }
};
