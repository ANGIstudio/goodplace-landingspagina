import React from 'react';

import Image from 'next/image';

import { BrandsProps } from '../../assets/assets';

export const Brands: React.FC<BrandsProps> = ({ brandItems }) => {
  return (
    <ul className="c-brands">
      {brandItems.map((item) => {
        return (
          <li key={item.id}>
            <Image alt={item.id} src={item.src} />
          </li>
        );
      })}
    </ul>
  );
};
