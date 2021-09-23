import { NextPage } from 'next';

import { Brands } from '../components/Brands/Brands';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const Index: NextPage = () => {
  return (
    <Base>
      <Section bgColor="primary">
        <Wrapper>
          <Brands />
        </Wrapper>
      </Section>
      <Section bgColor="secondary">
        <Wrapper>Dit is de homepage</Wrapper>
      </Section>
    </Base>
  );
};

export default Index;
