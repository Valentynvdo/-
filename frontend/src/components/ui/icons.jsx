// Simple icon replacements to avoid lucide-react issues
import React from 'react';

const iconMap = {
  // Navigation icons
  Menu: '☰',
  X: '✕',
  Gamepad2: '🎮',
  Globe: '🌐',
  
  // UI icons
  Check: '✓',
  ChevronDown: '▼',
  ChevronUp: '▲',
  ChevronLeft: '◀',
  ChevronRight: '▶',
  
  // Action icons
  Play: '▶',
  Pause: '⏸',
  RotateCcw: '↻',
  Info: 'ℹ',
  Plus: '+',
  Minus: '−',
  Search: '🔍',
  ShoppingCart: '🛒',
  Star: '⭐',
  Trophy: '🏆',
  Gift: '🎁',
  
  // Weapon/Game icons
  Sword: '⚔',
  Shield: '🛡',
  Zap: '⚡',
  Target: '🎯',
  
  // Other
  Calendar: '📅',
  Clock: '🕐',
  Users: '👥',
  Eye: '👁',
  Link: '🔗',
  Trash2: '🗑',
  HelpCircle: '❓',
  Circle: '○',
  MoreHorizontal: '⋯',
  ArrowLeft: '←',
  ArrowRight: '→',
  GripVertical: '⋮'
};

export const Icon = ({ name, className = "w-4 h-4", ...props }) => {
  const iconChar = iconMap[name] || '?';
  
  return (
    <div 
      className={`inline-flex items-center justify-center ${className}`} 
      {...props}
    >
      {iconChar}
    </div>
  );
};

// Export individual icon components for compatibility
export const Menu = (props) => <Icon name="Menu" {...props} />;
export const X = (props) => <Icon name="X" {...props} />;
export const Gamepad2 = (props) => <Icon name="Gamepad2" {...props} />;
export const Globe = (props) => <Icon name="Globe" {...props} />;
export const Check = (props) => <Icon name="Check" {...props} />;
export const ChevronDown = (props) => <Icon name="ChevronDown" {...props} />;
export const ChevronUp = (props) => <Icon name="ChevronUp" {...props} />;
export const ChevronLeft = (props) => <Icon name="ChevronLeft" {...props} />;
export const ChevronRight = (props) => <Icon name="ChevronRight" {...props} />;
export const Play = (props) => <Icon name="Play" {...props} />;
export const Pause = (props) => <Icon name="Pause" {...props} />;
export const RotateCcw = (props) => <Icon name="RotateCcw" {...props} />;
export const Info = (props) => <Icon name="Info" {...props} />;
export const Plus = (props) => <Icon name="Plus" {...props} />;
export const Minus = (props) => <Icon name="Minus" {...props} />;
export const Search = (props) => <Icon name="Search" {...props} />;
export const ShoppingCart = (props) => <Icon name="ShoppingCart" {...props} />;
export const Star = (props) => <Icon name="Star" {...props} />;
export const Trophy = (props) => <Icon name="Trophy" {...props} />;
export const Gift = (props) => <Icon name="Gift" {...props} />;
export const Sword = (props) => <Icon name="Sword" {...props} />;
export const Shield = (props) => <Icon name="Shield" {...props} />;
export const Zap = (props) => <Icon name="Zap" {...props} />;
export const Target = (props) => <Icon name="Target" {...props} />;
export const Calendar = (props) => <Icon name="Calendar" {...props} />;
export const Clock = (props) => <Icon name="Clock" {...props} />;
export const Users = (props) => <Icon name="Users" {...props} />;
export const Eye = (props) => <Icon name="Eye" {...props} />;
export const Link = (props) => <Icon name="Link" {...props} />;
export const Trash2 = (props) => <Icon name="Trash2" {...props} />;
export const HelpCircle = (props) => <Icon name="HelpCircle" {...props} />;
export const Circle = (props) => <Icon name="Circle" {...props} />;
export const MoreHorizontal = (props) => <Icon name="MoreHorizontal" {...props} />;
export const ArrowLeft = (props) => <Icon name="ArrowLeft" {...props} />;
export const ArrowRight = (props) => <Icon name="ArrowRight" {...props} />;
export const GripVertical = (props) => <Icon name="GripVertical" {...props} />;