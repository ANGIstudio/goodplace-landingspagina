import { NextPage } from 'next';
import Image from 'next/image';

import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const Index: NextPage = () => {
  return (
    <Base>
      <Section bgColor="primary">
        <Wrapper>
          <div className="c-content__block">
            <div className="c-content__text-block">
              <h3 className="c-content__title">
                Samen zorgen we voor een Goodplace op deze wereld
              </h3>
              <p>
                Goodplace is een positive movement. Een plek waar je als gever
                op een makkelijke en leuke manier goede doelen kan steunen en
                positieve updates krijgt.
              </p>
            </div>
            <div className="c-content__image-block">
              <div className="c-content__hand-image-block">
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
                  Doneer vrijblijvend wanneer en hoeveel jij wilt aan goede
                  doelen.
                </p>
              </div>
              <div className="c-content__hand-image-block">
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
                  Jouw donaties blijven anoniem, dus opeens gebeld worden gaat
                  je zeker niet overkomen.
                </p>
              </div>
              <div className="c-content__hand-image-block">
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
                  Blijf op de hoogte van de mooie dingen die goede doelen
                  realiseren.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section bgColor="secondary">
        <Wrapper>Dit is de homepage</Wrapper>
      </Section>
    </Base>
  );
};

export default Index;
