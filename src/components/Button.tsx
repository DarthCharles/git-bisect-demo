import React from 'react';
import classnames from 'classnames';

interface ButtonProps {
  styles?: string;
  onClick: () => void;
  label: string;
}

export const Button: React.FC<ButtonProps> = ({
  styles,
  onClick,
  label
}) => {
  return (
    <button
      onClick={onClick}
      className={classnames(
        styles,
        'bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
      )}
    >
      {label}
    </button>
  );
};
