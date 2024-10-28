import React from 'react';

interface FontSelectorProps {
  value: string;
  onChange: (value: string) => void;
  fonts: string[];
}

export function FontSelector({ value, onChange, fonts }: FontSelectorProps) {
  return (
    <div>
      <label className="text-gray-700 mb-2 block">Font Family</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg"
      >
        {fonts.map(font => (
          <option key={font} value={font}>{font}</option>
        ))}
      </select>
    </div>
  );
}