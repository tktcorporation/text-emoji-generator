import React from 'react';
import { EmojiPreview } from './EmojiPreview';

interface ChatPreviewProps {
  text: string;
  bgColor: string;
  textColor: string;
  fontFamily: string;
  transparent: boolean;
}

export function ChatPreview({ text, bgColor, textColor, fontFamily, transparent }: ChatPreviewProps) {
  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-4 space-y-4">
      {/* Incoming message */}
      <div className="flex items-start gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
        <div className="flex flex-col">
          <span className="text-sm text-gray-600">User</span>
          <div className="bg-gray-100 rounded-lg p-3 mt-1">
            Hello! Check out this emoji
            <div className="mt-2">
              <EmojiPreview
                text={text}
                bgColor={bgColor}
                textColor={textColor}
                fontFamily={fontFamily}
                transparent={transparent}
                size={64}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Outgoing message */}
      <div className="flex items-start gap-2 justify-end">
        <div className="flex flex-col items-end">
          <span className="text-sm text-gray-600">Me</span>
          <div className="bg-blue-500 text-white rounded-lg p-3 mt-1">
            Nice! I love it 😊
          </div>
        </div>
        <div className="w-8 h-8 rounded-full bg-blue-200 flex-shrink-0" />
      </div>
    </div>
  );
}