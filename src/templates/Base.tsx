import React from 'react';

import { Footer } from '../components/Footer/Footer';
import { Navigation } from '../components/Navigation/Navigation';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { AppConfig } from '../utils/AppConfig';
import { Meta } from '../utils/Meta';

const Base: React.FC = ({ children }) => (
  <div className="antialiased text-black font-jost">
    <Meta appConfig={AppConfig} />
    <Navigation logo="https://via.placeholder.com/150" />
    {children}
    <Section>
      <Wrapper>
        <Footer />
      </Wrapper>
    </Section>
  </div>
);

export { Base };
