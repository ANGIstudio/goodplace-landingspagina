import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';

import aboutimages from '../assets/aboutimages.svg';
import applestore from '../assets/apple-store-badge.svg';
import googleplay from '../assets/google-play-badge.png';
import gortemaker from '../assets/gortemaker.svg';
import gottenbos from '../assets/gottenbos.svg';
import peopleandphones from '../assets/peopleandphones.svg';
import vandermarel from '../assets/vandermarel.svg';
import vanoosten from '../assets/vanoosten.svg';
import { ContentBlock } from '../components/ContentBlock/ContentBlock';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const About: NextPage = () => {
  interface TeamMembers {
    name: string;
    id: number;
    img: string;
    description: string;
    description2?: string;
    endeavors: string;
  }

  const teamMembers: TeamMembers[] = [
    {
      name: 'Frank Gottenbos',
      id: 1,
      img: gottenbos,
      description: 'Shaper & Getting things done',
      endeavors: 'Logica, Deutsche Telecom, Biners Business & IT, strategie',
    },
    {
      name: 'Menno van der Marel',
      id: 2,
      img: vandermarel,
      description: 'Impact maken met slimme innovaties',
      description2: 'Goede ideeën moeten echt een kans krijgen',
      endeavors: 'Fox-IT, VanDerSat, Ocean Cleanup',
    },
    {
      name: 'Yvo Gortemaker',
      id: 3,
      img: gortemaker,
      description: 'Digital Product Strategy, Entrepreneurship',
      endeavors: 'GlobalOrange, Saasmore SimpledCard',
    },
    {
      name: 'Leopold van Oosten',
      id: 4,
      img: vanoosten,
      description: 'UX, Tech, Strategy, Entrepreneurship',
      endeavors: 'You-Sir, Amsterdam Standard, Saasmore',
    },
  ];

  return (
    <Base>
      <Section>
        <Wrapper>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:w-1/3 max-w-sm md:mb-0 mb-8">
              <h2 className="mb-4 font-bold text-darkgreen">
                Leuk om kennis te maken
              </h2>
              <p className="text-primary">
                Samen met jou vergroten we maatschappelijke betrokkenheid. We
                maken doneren voor iedereen leuk en laagdrempelig, door mensen
                eenvoudig en positief bij goede doelen en projecten te
                betrekken.
              </p>
            </div>
            <Image className="md:w-2/3" alt="about-images" src={aboutimages} />
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <ContentBlock image="lifesavers" imageFirst>
            <h3 className="mb-4">
              <strong>Doneren moet juist leuk zijn</strong>
            </h3>
            <p>
              Wij wilden wel graag doneren aan onze favoriete goede doelen, maar
              zaten er niet op te wachten om vervolgens gebeld te worden of
              magazines thuis te krijgen. Geld geven moet toch ook zonder gedoe
              kunnen? Dat was voor ons de inspiratie om Goodplace te beginnen.
            </p>
          </ContentBlock>
        </Wrapper>
      </Section>

      <Section bgColor="lightgreen">
        <Wrapper>
          <ContentBlock image="goededoelen" imageFirst={false}>
            <h3 className="mb-4">
              <strong>Partners</strong>
            </h3>
            <p>
              We zijn ontzettend trots om te mogen samenwerken met deze mooie
              goede doelen in de sectoren natuur, gezondheid en hulp. Deze
              partners zijn met zorg geselecteerd en we hopen binnenkort nog
              veel meer mooie samenwerkingen te sluiten.
            </p>
          </ContentBlock>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <h3 className="mb-4">
            <strong>Team</strong>
          </h3>
          <p className="mb-8">
            Wij zijn een klein team van betrokken ondernemers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-24">
            {teamMembers.map((member) => {
              return (
                <div
                  key={member.id}
                  className="flex w-full items-center space-x-6"
                >
                  <Image src={member.img} alt={member.name} />
                  <div>
                    <div className="space-y-6 max-w-xs">
                      <p>
                        <strong>{member.name}</strong>
                        <br />
                        {member.description}
                        {member.description2 ? (
                          <p>{member.description2}</p>
                        ) : (
                          ''
                        )}
                      </p>
                      <p>
                        <i>Other endeavors:</i>
                        <br />
                        {member.endeavors}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Wrapper>
      </Section>

      <Section bgColor="secondary" noPaddingBottom>
        <Wrapper>
          <div>
            <div className="md:-mb-64 -mb-28">
              <h2 className="mb-4 text-darkgreen font-bold max-w-2xl">
                Doe je mee met Goodplace’s <i>positive movement?</i>
              </h2>
              <div className="mb-8">
                <Image
                  width={100}
                  height={40}
                  alt="googleplay"
                  src={googleplay}
                />
                <Image
                  width={100}
                  height={40}
                  alt="apple-store"
                  src={applestore}
                />
              </div>
            </div>
            <Image alt="telephone" src={peopleandphones} />
          </div>
        </Wrapper>
      </Section>
    </Base>
  );
};

export default About;
