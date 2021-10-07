import React from 'react';

import { NextPage } from 'next';

import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const Privacy: NextPage = () => {
  return (
    <Base>
      <Section bgColor="lightgreen">
        <Wrapper>Privacy page</Wrapper>
      </Section>
    </Base>
  );
};

export default Privacy;
