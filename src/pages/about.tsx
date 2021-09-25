import React from 'react';

import { NextPage } from 'next';

import { Section } from '../components/Section/Section';
import { Team } from '../components/Team/Team';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const About: NextPage = () => {
  return (
    <Base>
      <Section bgColor="primary">
        <Wrapper>Dit is de aboutpage</Wrapper>
      </Section>
      <Section bgColor="secondary">
        <Wrapper>Dit is de aboutpage</Wrapper>
      </Section>
      <Section bgColor="secondary">
        <Wrapper>
          <Team />
        </Wrapper>
      </Section>
    </Base>
  );
};

export default About;
