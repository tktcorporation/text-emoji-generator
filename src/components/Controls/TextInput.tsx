import React from 'react';
import { Type } from 'lucide-react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function TextInput({ value, onChange }: TextInputProps) {
  return (
    <div>
      <label className="flex items-center gap-2 text-gray-700 mb-2">
        <Type size={20} />
        Text
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[100px] resize-y"
        placeholder="Enter your text (Press Enter for line breaks)"
      />
    </div>
  );
}