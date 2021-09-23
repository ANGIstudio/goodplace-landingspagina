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
        <Wrapper>Dit is de homepage</Wrapper>
      </Section>
    </Base>
  );
};

export default Index;
