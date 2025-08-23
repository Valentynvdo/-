// Simple icon replacements to avoid lucide-react issues
import React from 'react';

// Export individual icon components as simple divs with unicode symbols
export const Menu = ({ className = "w-5 h-5", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>☰</div>
);

export const X = ({ className = "w-5 h-5", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>✕</div>
);

export const Gamepad2 = ({ className = "w-6 h-6", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>🎮</div>
);

export const Globe = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>🌐</div>
);

export const Check = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>✓</div>
);

export const ChevronDown = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>▼</div>
);

export const ChevronUp = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>▲</div>
);

export const ChevronLeft = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>◀</div>
);

export const ChevronRight = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>▶</div>
);

export const Play = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>▶</div>
);

export const Pause = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>⏸</div>
);

export const RotateCcw = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>↻</div>
);

export const Info = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>ℹ</div>
);

export const Plus = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>+</div>
);

export const Minus = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>−</div>
);

export const Search = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>🔍</div>
);

export const ShoppingCart = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>🛒</div>
);

export const Star = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>⭐</div>
);

export const Trophy = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>🏆</div>
);

export const Gift = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>🎁</div>
);

export const Sword = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>⚔</div>
);

export const Shield = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>🛡</div>
);

export const Zap = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>⚡</div>
);

export const Target = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>🎯</div>
);

export const Calendar = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>📅</div>
);

export const Clock = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>🕐</div>
);

export const Users = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>👥</div>
);

export const Eye = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>👁</div>
);

export const Link = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>🔗</div>
);

export const Trash2 = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>🗑</div>
);

export const HelpCircle = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>❓</div>
);

export const Circle = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>○</div>
);

export const MoreHorizontal = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>⋯</div>
);

export const ArrowLeft = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>←</div>
);

export const ArrowRight = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>→</div>
);

export const GripVertical = ({ className = "w-4 h-4", ...props }) => (
  <div className={`flex items-center justify-center ${className}`} {...props}>⋮</div>
);