import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';

import applestore from '../assets/apple-store-badge.png';
import googleplay from '../assets/google-play-badge.png';
import gortemaker from '../assets/gortemaker.png';
import gottenbos from '../assets/gottenbos.png';
import imageframe from '../assets/imageframe.png';
import phones from '../assets/phones.png';
import vandermarel from '../assets/vandermarel.png';
import vanoosten from '../assets/vanoosten.png';
import { ContentBlock } from '../components/ContentBlock/ContentBlock';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const About: NextPage = () => {
  interface TeamMember {
    name: string;
    id: number;
    img: StaticImageData;
    description: string;
  }

  const teamMembers: TeamMember[] = [
    {
      name: 'Frank Gottenbos',
      id: 1,
      img: gottenbos,
      description: 'Shaper & Getting things done',
    },
    {
      name: 'Menno van der Marel',
      id: 2,
      img: vandermarel,
      description: `Impact maken met slimme innovaties \n Goede ideeën moeten echt een kans krijgen`,
    },
    {
      name: 'Yvo Gortemaker',
      id: 3,
      img: gortemaker,
      description: 'Digital Product Strategy, Entrepreneurship',
    },
    {
      name: 'Leopold van Oosten',
      id: 4,
      img: vanoosten,
      description: 'UX, Tech, Strategy, Entrepreneurship',
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
              <p className="text-green">
                Samen met jou vergroten we maatschappelijke betrokkenheid. We
                maken doneren voor iedereen leuk en laagdrempelig, door mensen
                eenvoudig en positief bij goede doelen en projecten te
                betrekken.
              </p>
            </div>
            <Image className="md:w-2/3" alt="imageframe" src={imageframe} />
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <ContentBlock image="peoplewithballoons" imageFirst>
            <div className="max-w-lg mt-4">
              <h3 className="mb-4">
                <strong>Doneren moet juist leuk zijn</strong>
              </h3>
              <p>
                Wij wilden wel graag doneren aan onze favoriete goede doelen,
                maar zaten er niet op te wachten om vervolgens gebeld te worden
                of magazines thuis te krijgen. Geld geven moet toch ook zonder
                gedoe kunnen? Dat was voor ons de inspiratie om Goodplace te
                beginnen.
              </p>
            </div>
          </ContentBlock>
        </Wrapper>
      </Section>

      <Section bgColor="lightgreen">
        <Wrapper>
          <ContentBlock image="brandsframe" imageFirst={false}>
            <div className="max-w-lg mb-8 md:mb-0">
              <h3 className="mb-4">
                <strong>Partners</strong>
              </h3>
              <p>
                We zijn ontzettend trots om te mogen samenwerken met deze mooie
                goede doelen in de sectoren natuur, gezondheid en hulp. Deze
                partners zijn met zorg geselecteerd en we hopen binnenkort nog
                veel meer mooie samenwerkingen te sluiten.
              </p>
            </div>
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
                  className="flex flex-col sm:flex-row md:items-center w-full space-y-6 md:space-y-0 sm:space-x-6 mb-6 md:mb-0"
                >
                  <div className="m-auto sm:m-0">
                    <Image src={member.img} alt={member.name} />
                  </div>
                  <div>
                    <div className="space-y-6 max-w-xs">
                      <p className="whitespace-pre-line">
                        <strong>{member.name}</strong>
                        <br />
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Wrapper>
      </Section>

      <Section bgColor="beige" noPaddingBottom bgImage="bg-arrow">
        <Wrapper>
          <div className="sm:flex overflow-hidden">
            <div>
              <h2 className="mb-8 text-darkgreen font-bold max-w-2xl">
                Doe je mee met Goodplace’s <i>positive movement?</i>
              </h2>
              <div className="mb-8 flex space-x-3">
                <div>
                  <Image
                    height={41}
                    width={141}
                    alt="googleplay"
                    src={googleplay}
                  />
                </div>
                <div className=" max-w-xs">
                  <Image
                    width={125}
                    height={41}
                    alt="apple-store"
                    src={applestore}
                  />
                </div>
              </div>
            </div>

            <div className="-mb-24 sm:-mb-48">
              <Image src={phones} alt="phones" />
            </div>
          </div>
        </Wrapper>
      </Section>
    </Base>
  );
};

export default About;
