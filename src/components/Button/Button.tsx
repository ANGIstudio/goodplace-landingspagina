import React from 'react';

import cn from 'classnames';
import Link from 'next/link';

interface ButtonProps {
  tag: 'a' | 'link' | 'button';
  label: string;
  variant: 'primary' | 'secondary';
  size: 'S' | 'M' | 'L';
  newTab?: boolean;
  href?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { tag, href, label, variant, size, newTab, onClick } = props;

  const classNames = cn('rounded-full', {
    'inline-block no-underline': tag === 'a' || 'link',
    'border-0': tag === 'button',
    'py-3 px-6 text-xl': size === 'M',
    'py-6 px-12 text-2xl': size === 'L',
    'bg-primary text-white hover:text-black': variant === 'primary',
    'bg-secondary text-white hover:text-black': variant === 'secondary',
  });

  switch (tag) {
    case 'a':
      return (
        <a
          className={classNames}
          href={href}
          target={newTab ? '_blank' : '_self'}
          rel="noreferrer"
        >
          {label}
        </a>
      );
    case 'link':
      return (
        <Link href={href || ''}>
          <a className={classNames}>{label}</a>
        </Link>
      );
    case 'button':
      return (
        <button type="button" className={classNames} onClick={onClick}>
          {label}
        </button>
      );
    default:
      return null;
  }
};
