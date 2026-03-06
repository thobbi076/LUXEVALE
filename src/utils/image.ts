/**
 * Optimizes an image URL using Vercel's built-in image optimization.
 * 
 * @param src The original image URL
 * @param width The desired width (optional)
 * @param quality The desired quality (1-100, default 75)
 * @returns The optimized image URL
 */
export function optimizeImage(src: string, width?: number, quality: number = 75): string {
  if (!src) return '';
  
  // Only optimize external images from supported domains
  const isSupportedDomain = src.includes('i.ibb.co') || src.includes('googleusercontent.com');
  if (!isSupportedDomain) {
    return src;
  }

  // Check if we are running on Vercel. If not, return the original URL
  // as /_vercel/image is a Vercel-specific edge function.
  const isVercel = typeof window !== 'undefined' && 
    (window.location.hostname.includes('vercel.app') || 
     window.location.hostname.includes('vercel.com'));

  if (!isVercel) {
    return src;
  }

  const params = new URLSearchParams();
  params.set('url', src);
  if (width) params.set('w', width.toString());
  params.set('q', quality.toString());

  return `/_vercel/image?${params.toString()}`;
}

/**
 * Generates a srcset string for responsive images.
 */
export function getSrcSet(src: string, widths: number[] = [640, 750, 828, 1080, 1200]): string {
  return widths
    .map(w => `${optimizeImage(src, w)} ${w}w`)
    .join(', ');
}
