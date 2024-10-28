import React, { useEffect, useRef } from 'react';

interface EmojiPreviewProps {
  text: string;
  bgColor: string;
  textColor: string;
  fontFamily: string;
  size?: number;
  transparent: boolean;
}

export function EmojiPreview({ 
  text, 
  bgColor, 
  textColor, 
  fontFamily, 
  size = 256,
  transparent 
}: EmojiPreviewProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textElement = textRef.current;
    const container = containerRef.current;
    
    if (textElement && container) {
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      const padding = 32; // Increased padding for safety
      
      const availableWidth = containerWidth - padding;
      const availableHeight = containerHeight - padding;
      
      // Reset styles for accurate measurement
      textElement.style.fontSize = '16px';
      textElement.style.transform = 'none';
      textElement.style.maxWidth = '100%';
      textElement.style.maxHeight = '100%';
      
      // Get initial text dimensions
      const initialWidth = textElement.offsetWidth;
      const initialHeight = textElement.offsetHeight;
      
      // Calculate scale factors
      const scaleX = availableWidth / initialWidth;
      const scaleY = availableHeight / initialHeight;
      const scale = Math.min(scaleX, scaleY) * 0.9; // 90% of the calculated scale for safety margin
      
      // Apply the calculated scale
      const fontSize = Math.floor(16 * scale);
      textElement.style.fontSize = `${fontSize}px`;
      
      // Final adjustment if still too large
      const finalWidth = textElement.offsetWidth;
      const finalHeight = textElement.offsetHeight;
      
      if (finalWidth > availableWidth || finalHeight > availableHeight) {
        const adjustScale = Math.min(
          availableWidth / finalWidth,
          availableHeight / finalHeight
        ) * 0.95; // Additional safety margin
        
        textElement.style.transform = `scale(${adjustScale})`;
      }
    }
  }, [text, fontFamily, size]);

  const displayText = text.trim() || 'あ';

  return (
    <div 
      ref={containerRef}
      className="rounded-xl shadow-lg flex items-center justify-center transition-all duration-300"
      style={{ 
        width: size,
        height: size,
        backgroundColor: transparent ? 'transparent' : bgColor,
        backgroundImage: transparent ? 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADFJREFUOI1j/P///38GKgImahqAYQyjGjCAYQwjpQbALGCkpgEwCxhp4YXBANDVAAYGBgDrYwX9DtB8KwAAAABJRU5ErkJggg==")' : 'none',
        overflow: 'hidden'
      }}
    >
      <span 
        ref={textRef}
        className="leading-tight select-none text-center whitespace-pre-wrap break-all"
        style={{ 
          color: textColor,
          fontFamily,
          display: 'block',
          padding: '16px',
          maxWidth: '100%',
          maxHeight: '100%',
          transformOrigin: 'center center',
          wordBreak: 'break-all'
        }}
      >
        {displayText}
      </span>
    </div>
  );
}