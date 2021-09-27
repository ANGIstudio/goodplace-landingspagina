import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface BrandsProps {
  brandItems: {
    id: string;
    href: string;
    src: string;
  }[];
}

export const Brands: React.FC<BrandsProps> = ({ brandItems }) => {
  return (
    <ul className="c-brands">
      {brandItems.map((item) => {
        return (
          <li key={item.id}>
            <Link href={item.href} passHref>
              <a>
                <Image alt={item.src} src={item.src} />
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
