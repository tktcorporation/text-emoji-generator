import React from 'react';
import { Palette, RefreshCw } from 'lucide-react';

interface ColorPickerProps {
  bgColor: string;
  textColor: string;
  transparent: boolean;
  presetColors: string[];
  onBgColorChange: (color: string) => void;
  onTextColorChange: (color: string) => void;
  onTransparentChange: (transparent: boolean) => void;
  onRandomize: () => void;
}

export function ColorPicker({
  bgColor,
  textColor,
  transparent,
  presetColors,
  onBgColorChange,
  onTextColorChange,
  onTransparentChange,
  onRandomize
}: ColorPickerProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="flex items-center gap-2 text-gray-700">
          <Palette size={20} />
          Colors
        </label>
        <button
          onClick={onRandomize}
          className="flex items-center gap-1 text-gray-600 hover:text-gray-800"
        >
          <RefreshCw size={16} />
          Random
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="transparent"
            checked={transparent}
            onChange={(e) => onTransparentChange(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="transparent" className="text-sm text-gray-600">
            Transparent background
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {!transparent && (
            <div>
              <label className="text-sm text-gray-600 block mb-1">Background</label>
              <input
                type="color"
                value={bgColor}
                onChange={(e) => onBgColorChange(e.target.value)}
                className="w-full h-10 rounded cursor-pointer"
              />
            </div>
          )}
          <div className={transparent ? 'col-span-2' : ''}>
            <label className="text-sm text-gray-600 block mb-1">Text</label>
            <input
              type="color"
              value={textColor}
              onChange={(e) => onTextColorChange(e.target.value)}
              className="w-full h-10 rounded cursor-pointer"
            />
          </div>
        </div>

        {!transparent && (
          <div className="grid grid-cols-8 gap-1">
            {presetColors.map(color => (
              <button
                key={color}
                onClick={() => onBgColorChange(color)}
                className="w-full aspect-square rounded-md transition-transform hover:scale-110"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}