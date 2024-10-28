import React from 'react';
import { Download, Eye } from 'lucide-react';

interface PreviewControlsProps {
  onDownload: () => void;
  onTogglePreview: () => void;
  previewMode: 'normal' | 'chat';
  disabled: boolean;
}

export function PreviewControls({ 
  onDownload, 
  onTogglePreview, 
  previewMode, 
  disabled 
}: PreviewControlsProps) {
  return (
    <div className="flex gap-3">
      <button
        onClick={onTogglePreview}
        className="flex items-center gap-2 bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
      >
        <Eye size={20} />
        {previewMode === 'normal' ? 'Chat Preview' : 'Normal Preview'}
      </button>

      <button
        onClick={onDownload}
        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        disabled={disabled}
      >
        <Download size={20} />
        Download PNG
      </button>
    </div>
  );
}