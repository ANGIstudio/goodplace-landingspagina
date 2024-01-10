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
        <Image
          height={50}
          width={160}
          objectFit="contain"
          alt="logo"
          src={logo}
        />
      </div>
      <div className="c-footer__content">
        <ul className="c-footer__list">
          <li>
            <strong>Menu</strong>
          </li>
          <li>
            <Link href="/">Home</Link> <br />
            <Link href="/about">Over&nbsp;Goodplace</Link> <br />
            <Link href="/howitworks">Hoe&nbsp;werkt&nbsp;het?</Link> <br />
            <Link href="/support">FAQ</Link> <br />
            <Link href="/charities">
              <p className="text-base text-green">Goede&nbsp;Doelen</p>
            </Link>
          </li>
        </ul>

        <ul className="c-footer__list">
          <li>
            <strong>Kom in contact</strong>
          </li>
          <li>
            <a href="mailto:team@goodplace.foundation">
              team@goodplace.foundation
            </a>
          </li>
          <li>
            Overschiestraat 182 <br /> 1062 XK Amsterdam <br />
            Nederland
          </li>
        </ul>

        <ul className="c-footer__list">
          <li>
            <strong>Legal</strong>
          </li>
          <li>
            Non profit organisatie <br />
            RSIN 862391891 <br />
            KvK 82244154
          </li>
        </ul>

        <ul className="c-footer__list">
          <li>
            <strong>Social Media</strong>
          </li>
          <li>
            <Socials socialsItems={socialsItems} />
          </li>
          <li>
            <Link href="https://forms.gle/WQGWzE9Csf8gTcvA8">
              Of meld je aan voor onze nieuwsbrief.
            </Link>
            <br />
          </li>
        </ul>
      </div>

      <div className="c-footer__legal">
        <div>&copy; 2023 Goodplace. Alle rechten voorbehouden.</div>
        <div>
          <Link href="/privacy">
            <a className="c-footer__legal-link">Privacy beleid</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
