import React from 'react';
import { EmojiPreview } from '../EmojiPreview';
import { ChatPreview } from '../ChatPreview';
import { PreviewControls } from './PreviewControls';
import { EmojiConfig } from '../../types';

interface PreviewSectionProps extends EmojiConfig {
  previewMode: 'normal' | 'chat';
  onTogglePreview: () => void;
  onDownload: () => void;
}

export function PreviewSection({ 
  text,
  bgColor,
  textColor,
  fontFamily,
  transparent,
  previewMode,
  onTogglePreview,
  onDownload
}: PreviewSectionProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">
        {previewMode === 'normal' ? (
          <EmojiPreview
            text={text}
            bgColor={bgColor}
            textColor={textColor}
            fontFamily={fontFamily}
            transparent={transparent}
            size={256}
          />
        ) : (
          <ChatPreview
            text={text}
            bgColor={bgColor}
            textColor={textColor}
            fontFamily={fontFamily}
            transparent={transparent}
          />
        )}
      </div>
      
      <PreviewControls
        onDownload={onDownload}
        onTogglePreview={onTogglePreview}
        previewMode={previewMode}
        disabled={!text}
      />
    </div>
  );
}