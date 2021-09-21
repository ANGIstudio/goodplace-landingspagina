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

  const classNames = cn('o-btn', {
    'o-btn--link': tag === 'a' || 'link',
    'o-btn--btn': tag === 'button',
    'o-btn--m': size === 'M',
    'o-btn--l': size === 'L',
    'o-btn--primary': variant === 'primary',
    'o-btn--secondary': variant === 'secondary',
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
