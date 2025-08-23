import React from 'react';

// Simplified emoji component without animations for iOS 18 clean design
export const Emoji = ({ emoji, className = "" }) => {
  return (
    <span className={`inline-block ${className}`}>
      {emoji}
    </span>
  );
};

// For backward compatibility
export const AnimatedEmoji = Emoji;