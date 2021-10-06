import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import logo from '../../assets/logo.svg';
import twitter from '../../assets/twitter.png';

export const Footer: React.FC = () => {
  const socialItems = [
    { id: '1', href: '#', src: instagram },
    { id: '2', href: '#', src: facebook },
    { id: '3', href: '#', src: twitter },
  ];

  return (
    <footer className="c-footer">
      <div className="c-footer__logo">
        <Image objectFit="contain" alt="logo" src={logo} />
      </div>
      <div className="c-footer__content">
        <ul className="c-footer__list">
          <li>
            <strong>Menu</strong>
          </li>
          <li>
            <Link href="/about">Over&nbsp;Goodplace</Link>
          </li>
        </ul>

        <ul className="c-footer__list">
          <li>
            <strong>Kom in contact</strong>
          </li>
          <li>
            <a href="tel:+31 70 304 3665 ">+31 70 304 3665</a>
            <br /> <a href="mailto:hallo@goodplace.nl">hallo@goodplace.nl</a>
          </li>
          <li>
            Prinses Margrietplantsoen 33 <br /> 2595 AM Den Haag <br />{' '}
            Nederland
          </li>
        </ul>

        <ul className="c-footer__list">
          <li>
            <strong>Legal</strong>
          </li>
          <li>
            Non profit organisatie <br />
            RSIN 862391891
          </li>
        </ul>

        <ul className="c-footer__list">
          <li>
            <strong>Social Media</strong>
          </li>
          <li>
            <div className="c-footer__socials">
              {socialItems.map((item) => {
                return (
                  <Link key={item.id} href={item.href} passHref>
                    <a>
                      <Image width="30" height="30" alt="logo" src={item.src} />
                    </a>
                  </Link>
                );
              })}
            </div>
          </li>
        </ul>
      </div>

      <div className="c-footer__legal">
        <div>&copy; 2021 Goodplace. Alle rechten voorbehouden.</div>
        <div>
          <Link href="/privacy">
            <a className="c-footer__legal-link">Privacy beleid</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
