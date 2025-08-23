import React from 'react';

export const AnimatedEmoji = ({ emoji, className = "", animation = "pulse" }) => {
  const animations = {
    pulse: "animate-pulse",
    bounce: "animate-bounce", 
    spin: "animate-spin",
    float: "animate-pulse hover:animate-bounce"
  };

  return (
    <span 
      className={`inline-block ${animations[animation]} ${className}`}
      style={{
        animation: animation === 'float' ? 'float 3s ease-in-out infinite' : undefined
      }}
    >
      {emoji}
    </span>
  );
};

// Custom float animation
const floatStyle = `
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
`;

// Inject the style
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = floatStyle;
  document.head.appendChild(style);
}