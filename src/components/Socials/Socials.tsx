import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { SocialsProps } from '../../data/data';

export const Socials: React.FC<SocialsProps> = ({ socialsItems }) => {
  return (
    <ul className="c-socials">
      {socialsItems.map((item) => {
        return (
          <li key={item.id}>
            <Link href={item.href} passHref>
              <a className="c-socials__link">
                <Image height={29} width={29} alt={item.id} src={item.src} />
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
