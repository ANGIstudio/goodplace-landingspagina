import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';

import arrow_1 from '../assets/arrow_1.svg';
import arrow_2 from '../assets/arrow_2.svg';
import arrow_3 from '../assets/arrow_3.svg';
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
              <div className="mb-8">
                <img alt="awd" src={nummer_1.src} />
              </div>
              <h1 className="text-darkgreen font-black break-words pb-3 lg:text-5xl text-3xl">
                Ontdek goede doelen <br /> & start met doneren
              </h1>
              <h3 className="text-darkgreen font-semibold pb-4  lg:text-2xl text-xl mb-4">
                Vind het goede doel waar jij aan wilt doneren, kies je bedrag,
                en start gemakkelijk je maandelijkse donatie.
              </h3>
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section bgImage="bg-howitworks2">
        <Wrapper>
          <div className="flex md:flex-row flex-col ml-8 lg:space-x-6 md:space-x-6 md:items-center overflow-hidden md:-mb-0 -mb-32 mb-12">
            <div className="w-4/5 md:w-3/5">
              <div className="mb-8 mt-32">
                <img alt="nummer_2" src={nummer_2.src} />
              </div>
              <h1 className="text-darkgreen font-black break-words pb-3 lg:text-5xl text-3xl">
                Houd overzicht
              </h1>
              <h3 className="text-darkgreen font-semibold pb-4  lg:text-2xl text-xl mb-2">
                Bekijk je lopende donaties, of donaties uit het verleden, en
                houd maandelijks inzicht in wat je hebt gegeven in het “Mijn
                Donatie“-overzicht
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
              <div className="mb-8 md:mt-2 mt-16">
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
    </Base>
  );
};

export default howitworks;
