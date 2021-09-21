import React from 'react';

import Link from 'next/link';

interface NavigationProps {
  logo: string;
}

export const Navigation: React.FC<NavigationProps> = ({ logo }) => {
  return (
    <header className="c-navigation">
      <div>
        <Link href="/">{logo}</Link>
      </div>
      <nav>
        <ul className="flex">
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
