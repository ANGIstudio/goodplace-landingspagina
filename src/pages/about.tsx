import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import applestore from '../assets/apple-store-badge.png';
import googleplay from '../assets/google-play-badge.png';
import imageframe from '../assets/imageframe.png';
import phones from '../assets/phones.png';
import { Brands } from '../components/Brands/Brands';
import { ContentBlock } from '../components/ContentBlock/ContentBlock';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { teamMembers, brandItems, raadVanAdvies } from '../data/data';
import { Base } from '../templates/Base';

const About: NextPage = () => {
  return (
    <Base>
      <Section noPaddingTop bgColor="lightgreen">
        <Wrapper>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <div className="md:max-w-lg">
              <h2 className="mb-4 font-bold text-darkgreen">
                Missie
              </h2>
              <p className="text-darkgreen">
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

          <h3 className="mb-8 mt-8">
            <strong>Raad van Advies</strong>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-24">
            {raadVanAdvies.map((member) => {
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

      <Section bgColor="darkgreen">
        <Wrapper>
          <div className="text-center overflow-hidden">
            <h2 className="mb-10 text-lightgreen font-bold max-w-2xl m-auto">
              Doe je mee met Goodplace?
            </h2>
            <div className="flex space-x-3 justify-center">
              <div>
                <Link
                  href="https://play.google.com/store/apps/details?id=foundation.goodplace.app"
                  passHref
                >
                  <a>
                    <Image
                      height={41}
                      width={141}
                      alt="googleplay"
                      src={googleplay}
                    />
                  </a>
                </Link>
              </div>
              <div>
                <Link
                  href="https://apps.apple.com/nl/app/goodplace/id1573545734"
                  passHref
                >
                  <a>
                    <Image
                      width={125}
                      height={41}
                      alt="apple-store"
                      src={applestore}
                    />
                  </a>
                </Link>
              </div>
            </div>

          </div>
        </Wrapper>
      </Section>
    </Base>
  );
};

export default About;
