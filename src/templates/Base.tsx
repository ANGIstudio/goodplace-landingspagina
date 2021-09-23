import React from 'react';

import { Footer } from '../components/Footer/Footer';
import { Navigation } from '../components/Navigation/Navigation';
import { AppConfig } from '../utils/AppConfig';
import { Meta } from '../utils/Meta';

const Base: React.FC = ({ children }) => (
  <div className="antialiased text-black font-cabin">
    <Meta appConfig={AppConfig} />
    <Navigation logo="https://via.placeholder.com/150" />
    {children}
    <Footer />
  </div>
);

export { Base };
