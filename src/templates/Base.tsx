import React from 'react';

import logo from '../assets/logo.svg';
import { Footer } from '../components/Footer/Footer';
import { Navigation } from '../components/Navigation/Navigation';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { AppConfig } from '../utils/AppConfig';
import { Meta } from '../utils/Meta';

const Base: React.FC = ({ children }) => (
  <div className="antialiased text-black font-jost">
    <Meta appConfig={AppConfig} />
    <Navigation logo={logo} />
    {children}
    <Section>
      <Wrapper>
        <Footer />
      </Wrapper>
    </Section>
  </div>
);

export { Base };
