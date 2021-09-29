import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import logo from '../../assets/logo.png';
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
        <div className="c-footer__newsletter">
          <ul className="c-footer__list">
            <li>
              Op de hoogte blijven van Goodplace? Schrijf je vrijblijvend in
              voor de nieuwsbrief.
            </li>
            <li>
              <label htmlFor="e-mail">
                E-mailadres
                <input
                  name="e-mail"
                  className="c-footer__e-mail"
                  placeholder="E-mailadres"
                />
              </label>
            </li>
          </ul>
        </div>

        <div className="c-footer__menu-lists">
          <ul className="c-footer__list">
            <li>
              <strong>Menu</strong>
            </li>
            <li>
              <Link href="#">Over&nbsp;Goodplace</Link>
            </li>
            <li>
              <Link href="#">Veelgestelde&nbsp;vragen</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>

          <ul className="c-footer__list">
            <li>
              <strong>Kom in contact</strong>
            </li>
            <li>
              +31 70 304 3665 <br /> hallo@goodplace.nl
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
        </div>
      </div>
      <div className="c-footer__legal-socials">
        <div className="c-footer__legal">
          <div>&copy; 2021 Goodplace. Alle rechten voorbehouden.</div>
          <Link href="#">
            <a className="c-footer__legal-links">Privacy beleid</a>
          </Link>
          <Link href="#">
            <a className="c-footer__legal-links">Algemene voorwaarden</a>
          </Link>
        </div>
        <div className="c-footer__socials">
          {socialItems.map((item) => {
            return (
              <Link key={item.id} href={item.href} passHref>
                <a>
                  <Image width="20" height="20px" alt="logo" src={item.src} />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
