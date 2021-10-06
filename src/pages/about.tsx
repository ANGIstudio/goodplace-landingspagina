import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';

import applestore from '../assets/apple-store-badge.png';
import { teamMembers, brandItems } from '../assets/assets';
import googleplay from '../assets/google-play-badge.png';
import imageframe from '../assets/imageframe.png';
import phones from '../assets/phones.png';
import { Brands } from '../components/Brands/Brands';
import { ContentBlock } from '../components/ContentBlock/ContentBlock';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const About: NextPage = () => {
  return (
    <Base>
      <Section noPaddingTop bgColor="lightgreen">
        <Wrapper>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <div className="md:max-w-lg">
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
            <img
              className="w-full md:w-1/2 mt-8"
              alt="awd"
              src={imageframe.src}
            />
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
          <div className="md:text-center">
            <div className="mb-8 md:mb-16 max-w-lg m-auto">
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
            <Brands brandItems={brandItems} />
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <h3 className="mb-4">
            <strong>Team</strong>
          </h3>
          <p className="mb-8 md:w-1/2">
            Wij zijn een klein team van betrokken ondernemers en doen dit niet
            voor eigen verdiensten. We geloven helemaal in het concept om de
            gever centraal te stellen.
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
                      <p className="whitespace-pre-line text-base">
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
                Doe je mee met Goodplace?
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
