import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import applestore from '../assets/apple-store-badge.png';
import contact from '../assets/contact.svg';
import googleplay from '../assets/google-play-badge.png';
import icons from '../assets/icons.png';
import phones from '../assets/phones.png';
import heart from '../assets/heart.svg';
import target from '../assets/target.svg';
import { Brands } from '../components/Brands/Brands';
import { ContentBlock } from '../components/ContentBlock/ContentBlock';
import { Hero } from '../components/Hero/Hero';
import { Section } from '../components/Section/Section';
import { Usp } from '../components/Usp/Usp';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { brandItems } from '../data/data';
import { Base } from '../templates/Base';
import { socialsItems } from '../data/data';
import { Socials } from '../components/Socials/Socials';
import { Button } from '../components/Button/Button';


interface UspImages {
  title: string;
  description: string;
  image: StaticImageData;
}

const Index: NextPage = () => {
  const uspImages: UspImages[] = [
    {
      title: 'Je zit nergens aan vast',
      image: target,
      description:
        'Start, wijzig en stop je donaties gemakkelijk, wanneer jij dat wilt.',
    },
    {
      title: 'Alles op één plek geregeld',
      image: target,
      description:
        'Je doneert overzichtelijk vanuit één enkele app aan jouw favoriete goede doelen.',
    },
  ];


  return (
    <Base>
      <Section bgColor="lightgreen" noPaddingBottom noPaddingTop>
      <div className="bg-hero relative">
        <Wrapper>

            <Hero />

        </Wrapper>
        </div>
      </Section>

      <Wrapper>
        <Brands brandItems={brandItems} />
      </Wrapper>

      <Section bgColor="lightgreen">
        <Wrapper>
          <div className="text-center">
            <div className="mb-8 md:mb-16 max-w-lg m-auto">
              <h4 className="mb-4 text-darkgreen font-black text-5xl">
                  Doneren zonder <br />
                  drempels
              </h4>
              <p className="text-darkgreen font-medium text-xl">
                Onze missie is om jou in control te laten zijn over jouw donaties. Alles overzichtelijk en flexibel geregeld vanuit één simpele app.
                Doneren is nog nooit zo makkelijk geweest.
              </p>
            </div>
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-2 gap-0 md:ml-20 md:mr-20 pt-10 text-darkgreen text-lg font-medium">
              {uspImages.map((usp) => (
                <Usp key={usp.title} usp={usp} variant="primary" />
              ))}
            </div>
          </div>
        </Wrapper>
      </Section>


      <Section>
        <Wrapper>
          <div className="text-center">
            <div className="mb-8 md:mb-16 max-w-2xl m-auto">
              <h4 className="mb-8 text-darkgreen font-black text-5xl">
                <div className="mb-3 h-24 w-24 mx-auto">
                <Image alt='heart' src={heart} />
                </div>
                We love <br />
                feedback
              </h4>
              <p className="mb-8 pl-2 text-darkgreen">
                Waarom? Omdat we niet alleen willen goed-doen, maar het ook graag goed willen doen.
                Jouw stem is nou precies de steen die bijdraagt om doneren smooth en makkelijk te kunnen maken.
                Zo komen we samen naar een betere wereld: niet voor, maar mét elkaar.
              </p>
              <p className="mb-8">
                <a
                className="text-darkgreen hover:underline text-lg font-bold"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeL05GNqomTjzLAj1Jtb2Ey8CwvHVThYUKj9QfPGIfqpclEZQ/viewform?usp=sf_link"
                target="_blank"
                rel="noreferrer"
                >
                Deel je feedback :)
                </a>
             </p>

            </div>

          </div>
        </Wrapper>
      </Section>


      <Section bgColor="green">
        <Wrapper>
          <div className="text-center text-darkgreen">
            <div className="mb-8 md:mb-16 max-w-lg m-auto">
              <h4 className="mb-12 text-darkgreen">
                  Goede <br />
                  Doelen
              </h4>
              <p className="mb-16 text-darkgreen">
              Elk CBF- of ANBI-erkend goed doel kan zich bij ons aanmelden. Groot of klein, lokaal actief of wereldwijd.
              <br />
              Ben jij, of ken jij een goed doel dat partner moet worden bij Goodplace?
              </p>
              <Button
                tag="link"
                href="https://docs.google.com/forms/d/e/1FAIpQLScNLkencHjnk8uUlSFKGMSRrgloTKy6MD-IeLMrKb76S8gLkg/viewform?vc=0&c=0&w=1&flr=0"
                label="Meld een nieuw goed doel aan!"
                variant="green"
                size="M"
              />
              <p className="mb-3 mt-8 text-darkgreen">
              Aanmelden van nieuwe goede doelen kan vanuit goede doelen zelf, of vanuit de donateur.
              </p>

            </div>
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

export default Index;
