import React from 'react';
import { TextInput } from './TextInput';
import { FontSelector } from './FontSelector';
import { ColorPicker } from './ColorPicker';
import { EmojiConfig } from '../../types';

interface ControlsProps extends EmojiConfig {
  fonts: string[];
  presetColors: string[];
  onTextChange: (text: string) => void;
  onFontFamilyChange: (font: string) => void;
  onBgColorChange: (color: string) => void;
  onTextColorChange: (color: string) => void;
  onTransparentChange: (transparent: boolean) => void;
  onRandomizeColors: () => void;
}

export function Controls({
  text,
  fontFamily,
  bgColor,
  textColor,
  transparent,
  fonts,
  presetColors,
  onTextChange,
  onFontFamilyChange,
  onBgColorChange,
  onTextColorChange,
  onTransparentChange,
  onRandomizeColors
}: ControlsProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
      <TextInput value={text} onChange={onTextChange} />
      <FontSelector value={fontFamily} onChange={onFontFamilyChange} fonts={fonts} />
      <ColorPicker
        bgColor={bgColor}
        textColor={textColor}
        transparent={transparent}
        presetColors={presetColors}
        onBgColorChange={onBgColorChange}
        onTextColorChange={onTextColorChange}
        onTransparentChange={onTransparentChange}
        onRandomize={onRandomizeColors}
      />
    </div>
  );
}