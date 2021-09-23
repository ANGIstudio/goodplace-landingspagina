import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ifaw from '../../assets/ifaw.svg';
import justdiggit from '../../assets/justdiggit.svg';
import oceancleanup from '../../assets/oceancleanup.svg';
import savechildsheart from '../../assets/savechildsheart.svg';
import sunday from '../../assets/sunday.svg';
import tjommie from '../../assets/tjommie.svg';
import wwf from '../../assets/wwf.svg';

export const Brands = () => {
  const brandItems = [
    { id: '1', href: '#', src: ifaw },
    { id: '2', href: '#', src: wwf },
    { id: '3', href: '#', src: oceancleanup },
    { id: '4', href: '#', src: justdiggit },
    { id: '5', href: '#', src: savechildsheart },
    { id: '6', href: '#', src: sunday },
    { id: '7', href: '#', src: tjommie },
  ];

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
