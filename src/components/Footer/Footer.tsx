import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import logo from '../../assets/logo.svg';
import { socialsItems } from '../../data/data';
import { Socials } from '../Socials/Socials';

export const Footer: React.FC = () => {
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
            <a href="mailto:hello@goodplace.foundation">
              hello@goodplace.foundation
            </a>
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
            <Socials socialsItems={socialsItems} />
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
