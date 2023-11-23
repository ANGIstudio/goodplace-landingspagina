import React from 'react';

import cn from 'classnames';
import Link from 'next/link';

interface ButtonProps {
  tag: 'a' | 'link' | 'button';
  label: string;
  variant: 'green' | 'beige' | 'orange' | 'gradientgreen';
  size: 'S' | 'M' | 'L';
  newTab?: boolean;
  href?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { tag, href, label, variant, size, newTab, onClick } = props;

  const classNames = cn('o-button', {
    'o-button--link': tag === 'a' || 'link',
    'o-button--small': size === 'S',
    'o-button--medium': size === 'M',
    'o-button--large': size === 'L',
    'o-button--green': variant === 'green',
    'o-button--orange': variant === 'orange',
    'o-button--beige': variant === 'beige',
    'o-button--gradientgreen': variant === 'gradientgreen',
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
