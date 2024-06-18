import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import applestore from '../assets/apple-store-badge.png';
import googleplay from '../assets/google-play-badge.png';
import heart from '../assets/heart.svg';
import target from '../assets/target.svg';
import { Brands } from '../components/Brands/Brands';
import { Button } from '../components/Button/Button';
import { Hero } from '../components/Hero/Hero';
import { Section } from '../components/Section/Section';
import { Usp } from '../components/Usp/Usp';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { brandItems } from '../data/data';
import { Base } from '../templates/Base';

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
        'Start, wijzig en stop je donaties gemakkelijk, wanneer jij dat wilt. Eenmalig of maandelijks doneren, zonder ongewenste reclame of post vanuit het goede doel.',
    },
    {
      title: 'Al je donaties bij elkaar in één app',
      image: target,
      description:
        'Vind jouw favoriete goede doelen in ons aanbod en lees over wat zij doen. Houd overzicht over je lopende donaties, donaties uit het verleden, en over wat je uitgeeft aan goede doelen.',
    },
    {
      title: 'Geen winstoogmerk',
      image: target,
      description:
        'Wij zijn zelf een stichting, 100% van je donatie gaat naar het goede doel.',
    },
  ];

  return (
    <Base>
      <Section bgColor="darkgreen" noPaddingBottom noPaddingTop>
        <div className="h-screen bg-abouthero bg-cover bg-no-repeat md:pb-32 mt-100px">
          <Wrapper>
            <Hero />
          </Wrapper>
        </div>
      </Section>

      <Section bgImage="bg-usps">
        <Wrapper>
          <div className="text-center h-screen md:-mb-10 lg:-mt-24 -mt-20">
            <div className="mb-4 md:mb-16 max-w-xl md:m-auto mx-0">
              <h2 className="md:mb-8 mb-4 text-lightgreen font-black md:text-5xl text-4xl">
                Geven met <br />
                een goed gevoel
              </h2>
              <p className="text-lightgreen font-semibold md:text-xl text-base">
                Met onze app is doneren aan de onderwerpen of goede doelen waar
                jij om geeft super eenvoudig.
              </p>
            </div>
            <div className="space-y-2 md:space-y-0 md:grid lg:grid-cols-3 gap-10 md:-mx-8 md:pt-10 text-lightgreen text-lg font-medium  md:max-w-7xl justify-center max-w-sm">
              {uspImages.map((usp) => (
                <Usp key={usp.title} usp={usp} variant="primary" />
              ))}
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section bgColor="white">
        <Wrapper>
          <div className="h-screen text-center text-darkgreen md:-mt-44 -mt-24 -mb-36">
            <div className="mb-8 md:mb-24 max-w-xl m-auto mt-24">
              <h2 className="mb-8 text-darkgreen font-black md:text-5xl text-4xl">
                Goede <br />
                Doelen
              </h2>
              <p className="text-darkgreen font-medium md:text-xl text-lg md:mb-9 mb-10 md:mb-12">
                Via de bundels zoals FIXME geef je met 1 donatie aan 5 goede
                doelen.
              </p>
              <p className="text-darkgreen font-medium md:text-xl text-lg md:mb-9 mb-10 md:mb-12">
                Ontdek meer bundels óf doneer direct aan een van de vele goede
                doelen in de app.
              </p>

              <Button
                tag="link"
                href="https://docs.google.com/forms/d/e/1FAIpQLScNLkencHjnk8uUlSFKGMSRrgloTKy6MD-IeLMrKb76S8gLkg/viewform?vc=0&c=0&w=1&flr=0"
                label="Meld een nieuw goed doel aan!"
                variant="green"
                size="M"
              />
            </div>
            <div className="mt-24">
              <h2 className="font-bold md:text-xl text-lg">
                Een aantal van onze goede doelen:
              </h2>
              <Brands brandItems={brandItems} />
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section bgImage="bg-feedback">
        <Wrapper>
          <div className="text-center h-screen mt-48 -mb-96">
            <div className="md:mb-8 mb-2 mt-48 max-w-2xl m-auto">
              <h2 className="mb-8 text-darkgreen font-black md:text-5xl text-4xl">
                <div className="mb-3 h-24 w-24 mx-auto">
                  <Image alt="heart" src={heart} />
                </div>
                We love <br />
                feedback
              </h2>
              <p className="text-darkgreen font-medium md:text-xl text-lg mb-9 md:mb-12">
                Waarom? Omdat we niet alleen willen goed-doen, maar het ook
                graag goed willen doen. Jouw stem is nou precies de steen die
                bijdraagt om doneren smooth en makkelijk te kunnen maken. Zo
                komen we samen naar een betere wereld: niet voor, maar mét
                elkaar.
              </p>
              <p>
                <a
                  className="text-darkgreen hover:underline hover:text-darkorange md:text-2xl font-extrabold text-xl"
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

      <Section bgImage="bg-banner">
        <Wrapper>
          <div className="text-center overflow-hidden">
            <h2 className="mt-48 mb-10 text-darkgreen font-extrabold md:text-4xl text-3xl max-w-2xl m-auto">
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
