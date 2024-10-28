/**
 * Calculates the optimal font size for the given text to fit within the canvas dimensions
 */
export function calculateOptimalFontSize(
  ctx: CanvasRenderingContext2D,
  text: string,
  fontFamily: string,
  maxWidth: number,
  maxHeight: number
): number {
  let fontSize = maxHeight;
  
  do {
    ctx.font = `${fontSize}px ${fontFamily}`;
    const metrics = ctx.measureText(text);
    const width = metrics.width;
    const height = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    
    if (width <= maxWidth * 0.8 && height <= maxHeight * 0.8) {
      break;
    }
    
    fontSize -= 1;
  } while (fontSize > 1);
  
  return fontSize;
}

/**
 * Creates and downloads a PNG emoji image
 */
export function downloadEmojiImage(
  text: string,
  bgColor: string,
  textColor: string,
  fontFamily: string,
  transparent: boolean
): void {
  const canvas = document.createElement('canvas');
  const size = 512; // Larger size for better quality
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    if (!transparent) {
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, size, size);
    }
    
    const fontSize = calculateOptimalFontSize(ctx, text, fontFamily, size, size);
    
    ctx.fillStyle = textColor;
    ctx.font = `${fontSize}px ${fontFamily}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, size / 2, size / 2);
    
    const link = document.createElement('a');
    link.download = `emoji-${text}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  }
}