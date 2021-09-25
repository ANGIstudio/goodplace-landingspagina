import { NextPage } from 'next';
import Image from 'next/image';

import icons from '../assets/icons.svg';
import { ContentBlock } from '../components/ContentBlock/ContentBlock';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const Index: NextPage = () => {
  return (
    <Base>
      <Section bgColor="secondary">
        <Wrapper>
          <ContentBlock image="lifesavers" imageFirst>
            <h3>
              <strong>Sharing is caring</strong>
            </h3>
            <p>
              Je favoriete goede doel nóg meer steunen? Je kunt
              <br /> eenvoudig je vrienden uitnodigen om ook een
              <br /> kleine bijdrage te doneren. In de app zie je in één
              <br /> overzicht wat jullie gezamenlijke impact is geweest.
              <br /> Laat dat balletje maar rollen!
            </p>
            <p>
              Je kunt natuurlijk ook een post waar je ontzettend
              <br /> vrolijk van wordt met je vrienden delen.
              <i>
                {' '}
                Happiness
                <br /> is sweetest when shared.
              </i>
            </p>
          </ContentBlock>
        </Wrapper>
      </Section>
      <Section bgColor="secondary">
        <Wrapper>
          <ContentBlock image="phones" imageFirst={false}>
            <h3>
              <strong>Snel en makkelijk doneren</strong>
            </h3>
            <p>
              Doelen steunen die jij belangrijk vind moet
              <br /> eenvoudig zijn. Daarom kun je Goodplace koppelen
              <br /> aan je favoriete betaal methode. Of het nou gaat om
              <br /> eenmalig €15,- of juist een maandelijkse bijdrage
              <br /> van €2,-. Het kan! En wanneer je toch voor een
              <br /> maandelijks bijdrage gaat, kan je dat ook simpelweg
              <br /> met 1 druk op de knop stopzetten.
            </p>
            <p>
              <i>Eigenlijk wel zo vanzelfsprekend toch?</i>
            </p>
            <div>
              <Image width={408} height={81} alt={icons} src={icons} />
            </div>
          </ContentBlock>
        </Wrapper>
      </Section>
    </Base>
  );
};

export default Index;
