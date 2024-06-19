import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import applestore from '../assets/apple-store-badge.png';
import arrow_1 from '../assets/arrow_1.svg';
import arrow_2 from '../assets/arrow_2.svg';
import arrow_3 from '../assets/arrow_3.svg';
import googleplay from '../assets/google-play-badge.png';
import screen_1 from '../assets/howto_screen_1.png';
import screen_2 from '../assets/howto_screen_2.png';
import screen_3 from '../assets/howto_screen_3.png';
import nummer_1 from '../assets/nummer_1.png';
import nummer_2 from '../assets/nummer_2.png';
import nummer_3 from '../assets/nummer_3.png';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const howitworks: NextPage = () => {
  return (
    <Base>
      <Section bgImage="bg-howitworks1">
        <Wrapper>
          <div className="flex md:flex-row flex-col-reverse ml-8 lg:space-x-32 md:space-x-16 md:space-y-32 space-y-4 overflow-hidden md:-mb-0 -mb-32">
            <div className="relative">
              <img alt="discover_and_choose_charity" src={screen_1.src} />
              <div className="absolute top-1/2 -right-2/3 w-[132px] h-[132px] md:h-[232px] md:w-[232px]">
                <Image
                  alt="arrow_howitworks"
                  src={arrow_1}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="mb-8 md:w-full w-12">
                <img alt="awd" src={nummer_1.src} />
              </div>
              <h1 className="text-darkgreen font-black break-words pb-3 lg:text-5xl text-3xl">
                Ontdek onze bundels & goede doelen
              </h1>
              <h3 className="text-darkgreen font-semibold pb-4  lg:text-2xl text-xl mb-4">
                Vind het onderwerp of goede doel dat bij je past, kies het
                bedrag en start gemakkelijk je maandelijkse of eenmalige
                donatie.
              </h3>
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section bgImage="bg-howitworks2">
        <Wrapper>
          <div className="flex md:flex-row flex-col ml-8 lg:space-x-6 md:space-x-6 md:items-center overflow-hidden md:-mb-0 -mb-32 mb-12">
            <div className="w-4/5 md:w-3/5">
              <div className="mb-8 mt-32 md:w-full w-12">
                <img alt="nummer_2" src={nummer_2.src} />
              </div>
              <h1 className="text-darkgreen font-black break-words pb-3 lg:text-5xl text-3xl">
                Blijf betrokken
              </h1>
              <h3 className="text-darkgreen font-semibold pb-4  lg:text-2xl text-xl mb-2">
                Blijf op de hoogte van de impact van jouw donatie(s) met
                regelmatige updates. Ontvang inspiratie en positieve
                nieuwsberichten via Goodnews.
              </h3>
              <h3 className="text-darkgreen font-semibold pb-4  lg:text-2xl text-xl mb-2">
                Pas je communicatievoorkeuren aan zoals jij dat wilt, zonder
                ongewenste telefoontjes of post van je goede doelen.
              </h3>
            </div>
            <div className="-mb-48 sm:-mb-64 md:mb-28 max-w-md relative">
              <img alt="discover_and_choose_charity" src={screen_2.src} />
              <div className="absolute top-1/3 -left-3/4 w-[132px] h-[132px] md:h-[232px] md:w-[232px]">
                <Image
                  alt="arrow_howitworks"
                  src={arrow_2}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section noPaddingBottom noPaddingTop bgImage="bg-howitworks3">
        <Wrapper>
          <div className="flex md:flex-row flex-col-reverse ml-8 md:py-4 lg:space-x-32 md:space-x-16 md:space-y-16 overflow-hidden md:-mt-16 md:pb-4 md:-mb-16 md:-mt-24 -mt-32">
            <div className="-mb-28 md:mb-20 max-w-md w-4/5 relative">
              <img alt="discover_and_choose_charity" src={screen_3.src} />
              <div className="absolute top-1/3 -right-3/4 w-[132px] h-[132px] md:h-[256px] md:w-[256px]">
                <Image
                  alt="arrow_howitworks"
                  src={arrow_3}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="w-4/5 md:w-3/5">
              <div className="mb-8 md:mt-2 mt-24 md:w-full w-12">
                <img alt="awd" src={nummer_3.src} />
              </div>
              <h1 className="text-darkgreen font-black break-words pb-3 lg:text-5xl text-3xl">
                Blijf in control
              </h1>
              <h3 className="text-darkgreen font-semibold pb-4  lg:text-2xl text-xl">
                Pauzeer, stop of wijzig je donatie gemakkelijk, en op elk
                moment.
              </h3>
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section bgColor="green">
        <Wrapper>
          <div className="text-center overflow-hidden">
            <h2 className="mt-12 mb-10 text-darkgreen font-extrabold md:text-4xl text-3xl max-w-2xl m-auto">
              Ontdek het nieuwe doneren
            </h2>
            <div className="flex space-x-3 justify-center">
              <div>
                <Link
                  href="https://play.google.com/store/apps/details?id=foundation.goodplace.app"
                  passHref
                >
                  <a>
                    <Image
                      height={61}
                      width={211}
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
                      width={200}
                      height={61}
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

export default howitworks;
