import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './form-button.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'decline' | 'disabled' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children: ReactNode;
}

export const FormButton: React.FC<Props> = ({ variant = 'primary', size = 'medium', children, ...rest }) => {
  const classNames = `form-button ${variant} ${size}`;

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};


