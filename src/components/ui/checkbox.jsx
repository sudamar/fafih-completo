import React from 'react';

const CheckBox = ({ checked, onClick, size = 24, color = '#3b82f6' }) => {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onClick}
      style={{ 
        width: size, 
        height: size, 
        backgroundColor: checked ? color : 'transparent',
        borderColor: checked ? color : '#cbd5e1',
      }}
      className="flex items-center justify-center border-2 rounded-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2" // Added focus styles for accessibility
    >
      {checked && (
        <svg
          width={size * 0.6}
          height={size * 0.6}
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      )}
    </button>
  );
};

export default CheckBox;
