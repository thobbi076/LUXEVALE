/**
 * Optimizes an image URL using Vercel's built-in image optimization.
 * 
 * @param src The original image URL
 * @param width The desired width (optional)
 * @param quality The desired quality (1-100, default 75)
 * @returns The optimized image URL
 */
export function optimizeImage(src: string, _width?: number, _quality: number = 75): string {
  if (!src) return '';
  
  // The user requested to remove the Vercel optimizer as it was causing
  // images (especially thumbnails) to not show up on the live site.
  // We now return the original URL to ensure maximum compatibility.
  return src;
}

/**
 * Generates a srcset string for responsive images.
 */
export function getSrcSet(src: string, widths: number[] = [640, 750, 828, 1080, 1200]): string {
  return widths
    .map(w => `${optimizeImage(src, w)} ${w}w`)
    .join(', ');
}
