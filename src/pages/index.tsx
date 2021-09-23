import { NextPage } from 'next';

import { Hero } from '../components/Hero/Hero';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const Index: NextPage = () => {
  return (
    <Base>
      <Hero />
      <Section bgColor="primary">
        <Wrapper>Dit is de homepage</Wrapper>
      </Section>
      <Section bgColor="secondary">
        <Wrapper>Dit is de homepage</Wrapper>
      </Section>
    </Base>
  );
};

export default Index;
