import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface BrandsProps {
  brandItems: {
    id: string;
    href: string;
    src: StaticImageData;
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
                <Image alt={item.id} src={item.src} />
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
