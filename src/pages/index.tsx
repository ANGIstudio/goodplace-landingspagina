import { NextPage } from 'next';
import Image from 'next/image';

import icons from '../assets/icons.svg';
import { Brands } from '../components/Brands/Brands';
import { ContentBlock } from '../components/ContentBlock/ContentBlock';
import { Hero } from '../components/Hero/Hero';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const Index: NextPage = () => {
  return (
    <Base>
      <Wrapper>
        <Hero />
      </Wrapper>
      <Section>
        <Wrapper>
          <Brands />
        </Wrapper>
      </Section>
      <Section bgColor="primary">
        <Wrapper>
          <div className="c-content">
            <div className="c-content__text-block">
              <h3 className="c-content__title">
                <strong>
                  Samen zorgen we voor een
                  <br className="c-content__title__break" /> Goodplace op deze
                  aarde
                </strong>
              </h3>
              <p>
                Goodplace is een <i>positive movement</i>. Een plek waar je als
                gever op
                <br /> een makkelijke en leuke manier goede doelen kan steunen
                en <br />
                positieve updates krijgt.
              </p>
            </div>
            <div className="c-content__image-block">
              <div className="c-content__hand-image">
                <Image
                  alt="giving-hand"
                  src="https://via.placeholder.com/150"
                  width={50}
                  height={50}
                />
                <p>
                  <strong>Geven wanneer jij wilt</strong>
                </p>
                <p>
                  Doneer vrijblijvend wanneer
                  <br /> en hoeveel jij wilt aan
                  <br /> goede doelen.
                </p>
              </div>
              <div className="c-content__hand-image">
                <Image
                  alt="anonymous-hand"
                  src="https://via.placeholder.com/150"
                  width={50}
                  height={50}
                />
                <p>
                  <strong>Jij blijft anoniem</strong>
                </p>
                <p>
                  Jouw donaties blijven anoniem,
                  <br /> dus opeens gebeld worden gaat
                  <br />
                  je zeker niet overkomen.
                </p>
              </div>
              <div className="c-content__hand-image">
                <Image
                  alt="impact-hand"
                  src="https://via.placeholder.com/150"
                  width={50}
                  height={50}
                />
                <p>
                  <strong>Zicht op je impact</strong>
                </p>
                <p>
                  Blijf op de hoogte van de mooie <br />
                  dingen die goede doelen
                  <br />
                  realiseren.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </Section>
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
