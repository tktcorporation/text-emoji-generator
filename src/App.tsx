import React, { useState } from 'react';
import { Header } from './components/Header';
import { PreviewSection } from './components/PreviewSection';
import { Controls } from './components/Controls';
import { downloadEmojiImage } from './utils/canvas';

// Available fonts for the emoji text
const FONTS = ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy'];

// Preset colors for quick selection
const PRESET_COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
  '#FFEEAD', '#D4A5A5', '#9B59B6', '#3498DB'
];

function App() {
  // Emoji configuration state
  const [text, setText] = useState('');
  const [bgColor, setBgColor] = useState('#FF6B6B');
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [fontFamily, setFontFamily] = useState('sans-serif');
  const [transparent, setTransparent] = useState(false);
  const [previewMode, setPreviewMode] = useState<'normal' | 'chat'>('normal');

  // Handlers
  const handleRandomizeColors = () => {
    const randomColor = () => PRESET_COLORS[Math.floor(Math.random() * PRESET_COLORS.length)];
    setBgColor(randomColor());
    setTextColor(randomColor());
  };

  const handleDownload = () => {
    downloadEmojiImage(text, bgColor, textColor, fontFamily, transparent);
  };

  const togglePreviewMode = () => {
    setPreviewMode(mode => mode === 'normal' ? 'chat' : 'normal');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        <Header />

        <div className="grid md:grid-cols-2 gap-8">
          <PreviewSection
            text={text}
            bgColor={bgColor}
            textColor={textColor}
            fontFamily={fontFamily}
            transparent={transparent}
            previewMode={previewMode}
            onTogglePreview={togglePreviewMode}
            onDownload={handleDownload}
          />

          <Controls
            text={text}
            bgColor={bgColor}
            textColor={textColor}
            fontFamily={fontFamily}
            transparent={transparent}
            fonts={FONTS}
            presetColors={PRESET_COLORS}
            onTextChange={setText}
            onBgColorChange={setBgColor}
            onTextColorChange={setTextColor}
            onFontFamilyChange={setFontFamily}
            onTransparentChange={setTransparent}
            onRandomizeColors={handleRandomizeColors}
          />
        </div>
      </div>
    </div>
  );
}

export default App;