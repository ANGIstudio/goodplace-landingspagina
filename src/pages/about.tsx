import React from 'react';

import { NextPage } from 'next';

import { ContentBlock } from '../components/ContentBlock/ContentBlock';
import { Section } from '../components/Section/Section';
import { Team } from '../components/Team/Team';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const About: NextPage = () => {
  return (
    <Base>
      <Section bgColor="primary">
        <Wrapper>
          <ContentBlock image="lifesavers" imageFirst>
            <h3>
              <strong>Doneren moet juist leuk zijn</strong>{' '}
            </h3>
            <p>
              Wij wilden wel graag doneren aan onze favoriete
              <br /> goede doelen, maar zaten er niet op te wachten om
              <br /> vervolgens gebeld te worden of magazines thuis te
              <br /> krijgen. Geld geven moet toch ook zonder gedoe
              <br /> kunnen? Dat was voor ons de inspiratie om
              <br /> Goodplace te beginnen.
            </p>
          </ContentBlock>
        </Wrapper>
      </Section>
      <Section bgColor="secondary">
        <Wrapper>
          <ContentBlock image="goededoelen" imageFirst={false}>
            <h3>
              <strong>Partners</strong>{' '}
            </h3>
            <p>
              We zijn ontzettend trots om te mogen samenwerken
              <br /> met deze mooie goede doelen in de sectoren
              <br /> natuur, gezondheid en hulp. Deze partners zijn met
              <br /> zorg geselecteerd en we hopen binnenkort nog veel
              <br /> meer mooie samenwerkingen te sluiten.
            </p>
          </ContentBlock>
        </Wrapper>
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
