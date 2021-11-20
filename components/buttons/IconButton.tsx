import React, { ButtonHTMLAttributes } from "react";

interface IconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export const IconButton: React.FC<IconButton> = ({ onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className='text-white font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md hover:bg-indigo-900 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 h-auto'
      type='button'
    >
      {icon}
    </button>
  );
};
