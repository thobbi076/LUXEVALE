/**
 * Optimizes an image URL using Vercel's built-in image optimization.
 * @param url The original image URL.
 * @param width The desired width.
 * @param quality The desired quality.
 * @returns The optimized image URL.
 */
export function optimizeImage(url: string, width: number = 640, quality: number = 75): string {
  if (!url) return url;
  // Only optimize external URLs that are likely to be large images
  if (url.startsWith('http')) {
    return `/_vercel/image?url=${encodeURIComponent(url)}&w=${width}&q=${quality}`;
  }
  return url;
}
