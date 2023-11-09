import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import closed from '../../assets/closed.png';
import hamburger from '../../assets/hamburger.png';
import { Button } from '../Button/Button';

interface NavigationProps {
  logo: StaticImageData;
  mobilelogo: StaticImageData;
}

export const Navigation: React.FC<NavigationProps> = ({ logo, mobilelogo }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <header className="c-navigation">
      <div className="c-navigation__bar">
        <div className="c-navigation__logo">
          <Link href="/" passHref>
            <a>
              <Image height={50} width={200} alt="logo" src={logo} priority />
            </a>
          </Link>
        </div>

        <div className="c-navigation__mobile-logo">
          <Link href="/" passHref>
            <a>
              <Image
                height={50}
                width={200}
                alt="logo"
                src={mobilelogo}
                priority
              />
            </a>
          </Link>
        </div>

        <nav>
          <ul className="c-navigation__desktop">
            <li className="c-navigation__desktop-item">
              <Link href="/about">
                <a
                  className={
                    router.pathname === '/about'
                      ? 'c-navigation__link-active'
                      : ''
                  }
                >
                  Over ons
                </a>
              </Link>
            </li>
            <li className="c-navigation__desktop-item">
              <Link href="/support">
                <a
                  className={
                    router.pathname === '/support'
                      ? 'c-navigation__link-active'
                      : ''
                  }
                >
                  FAQ
                </a>
              </Link>
            </li>
            <li className="c-navigation__desktop-item">
              <Button
                tag="link"
                href="/howitworks"
                label="Hoe het werkt"
                variant="green"
                size="M"
              />
            </li>
          </ul>

          {isOpen ? (
            <ul className="c-navigation__mobile">
              <li className="c-navigation__mobile-item">
                <Link href="/about">
                  <a
                    className={
                      router.pathname === '/about'
                        ? 'c-navigation__link-active'
                        : ''
                    }
                  >
                    Over ons
                  </a>
                </Link>
              </li>
              <li className="c-navigation__mobile-item">
                <Link href="/support">
                  <a
                    className={
                      router.pathname === '/support'
                        ? 'c-navigation__link-active'
                        : ''
                    }
                  >
                    FAQ
                  </a>
                </Link>
              </li>
              <li className="c-navigation__mobile-item">
                <Button
                  tag="link"
                  href="/howitworks"
                  label="Hoe het werkt"
                  variant="green"
                  size="M"
                />
              </li>
            </ul>
          ) : null}
        </nav>

        <button
          type="button"
          onClick={handleClick}
          className="c-navigation__hamburger"
        >
          <Image alt="hamburger" src={isOpen ? closed : hamburger} />
        </button>
      </div>
    </header>
  );
};
