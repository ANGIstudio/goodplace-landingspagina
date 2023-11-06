import React from 'react';

import logo from '../assets/logo.svg';
import mobilelogo from '../assets/mobilelogo.svg';
import { Footer } from '../components/Footer/Footer';
import { Navigation } from '../components/Navigation/Navigation';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { AppConfig } from '../utils/AppConfig';
import { Meta } from '../utils/Meta';

const Base: React.FC = ({ children }) => (
  <div className="antialiased text-darkgreen font-jost bg-lightgreen">
    <Meta appConfig={AppConfig} />
    <Navigation logo={logo} mobilelogo={mobilelogo} />
    {children}
    <Section noPaddingBottom bgColor="green">
      <Wrapper>
        <Footer />
      </Wrapper>
    </Section>
  </div>
);

export { Base };
