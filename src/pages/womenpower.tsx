import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import applestore from '../assets/apple-store-badge.png';
import arrow from '../assets/arrow_campaign.png';
import icon_hands from '../assets/bundel_hands.png';
import googleplay from '../assets/google-play-badge.png';
import logo from '../assets/logo_wit.svg';
import QR from '../assets/Themacampagne_dec_23/qr_bundel.png';
import bundel from '../assets/Themacampagne_jan_24/bundel.png';
import heroimage from '../assets/Themacampagne_jan_24/heroimage.png';
import heroimage_mobile from '../assets/Themacampagne_jan_24/heroimage_mobile.png';
import target from '../assets/vink.png';
import { Brands } from '../components/Brands/Brands';
import { Button } from '../components/Button/Button';
import { Footer } from '../components/Footer/Footer';
import { Navigation } from '../components/Navigation_campaign/Navigation_campaign';
import { Section } from '../components/Section/Section';
import { Socials } from '../components/Socials/Socials';
import { Usp } from '../components/Usp/Usp';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { brandItems, socialsItems_follow } from '../data/data';
import { AppConfig } from '../utils/AppConfig';
import { Meta } from '../utils/Meta';

interface UspImages {
  title: string;
  description: string;
  image: StaticImageData;
}

const CampaignLatent: NextPage = () => {
  const uspImages: UspImages[] = [
    {
      title: 'Snel & makkelijk doneren',
      image: target,
      description:
        'Doneren gaat gewoon via iDEAL, registreren is niet nodig en je hoeft niet allerlei persoonsgegevens achter te laten.',
    },
    {
      title: 'Je zit nergens aan vast',
      image: target,
      description:
        'Eenmalig of maandelijks doneren, zonder ongewenste reclame of post vanuit het goede doel.',
    },
    {
      title: 'Geen winstoogmerk',
      image: target,
      description:
        'Wij zijn zelf een stichting en maken dus geen winst op jouw donatie. Zoveel mogelijk geld voor het goede doel dus.',
    },
  ];

  return (
    <div className="antialiased text-darkestgreen font-jost bg-pink relative">
      <Meta appConfig={AppConfig} />
      <Navigation logo={logo} mobilelogo={logo} />
      <Section noPaddingBottom noPaddingTop>
        <div className="mb-6 bg-pink bg-fixed bg-cover bg-no-repeat h-screen -mt-105px">
          <div className="">
            <div className="flex lg:flex-row flex-col-reverse lg:pt-48 pt-24 max-w-screen-2xl mx-auto px-6 lg:px-4 lg:space-x-32">
              <div className="lg:-mt-48">
                <div className="order-1 md:order-1 lg:block hidden">
                  <Image alt="heroimage" src={heroimage} />
                </div>
                <div className="flex space-x-4 lg:-ml-8 md:ml-10 lg:w-fit w-80 lg:pt-12 pt-8">
                  <div>
                    <Link
                      href="https://play.google.com/store/apps/details?id=foundation.goodplace.app&referrer=utm_source%3Dgoodplace%26utm_medium%3Dlandingpage%26utm_campaign%3Dkind-in-nood-functioneel"
                      passHref
                    >
                      <a>
                        <Image alt="googleplay" src={googleplay} />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://apps.apple.com/app/apple-store/id1573545734?pt=123201503&ct=kind-in-nood-functioneel&mt=8"
                      passHref
                    >
                      <a>
                        <Image alt="apple-store" src={applestore} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:pl-10 lg:pt-8 sm:pt-36 pt-36">
                <div className="w-20 md:w-36 pb-8 md:block hidden">
                  <Image alt="hands" src={icon_hands} />
                </div>
                <div className="flex flex-row md:hidden block">
                  <div className="w-20 md:w-36 pb-8">
                    <Image alt="hands" src={icon_hands} />
                  </div>
                  <div className="w-32 ml-36 -mt-36">
                    <Image alt="heroimage_mobile" src={heroimage_mobile} />
                  </div>
                </div>
                <h1 className="text-darkestgreen font-black pb-4">
                  De handen ineen,
                </h1>
                <h1 className="text-darkestgreen font-bold mb-8">
                  voor elke vrouw.
                </h1>
                <h3 className="text-darkestgreen md:text-xl md:max-w-lg max-w-sm md:font-medium lg:font-medium text-base leading-6">
                  Wereldwijd, maar ook bij jou om die hoek zijn vrouwen
                  slachtoffer van geweld, uitbuiting en ongelijkheid. Bij
                  Goodplace geef je in een paar klikken aan al deze thema’s
                  tegelijk. Dat is gemakkelijk en effectief impact maken.
                </h3>
                <div className="md:mt-8 lg:block hidden">
                  <Image alt="QR" src={QR} />
                </div>
                <div className="md:mt-12 mt-8 md:hidden">
                  <Button
                    tag="link"
                    href="https://share.app.goodplace.foundation/kind-in-nood-f"
                    label="Probeer een bundel donatie in de app!"
                    variant="gradientgreen"
                    size="S"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <div className="absolute bg-white mx-auto md:-mt-6 -mt-4 w-screen rounded-3xl">
        <Section>
          <Wrapper>
            <div className="lg:ml-36 md:ml-10 md:px-0 lg:max-w-3x">
              <h2 className="font-bold md:text-5xl text-4xl mt-4 mb-4">
                Elke 10 dagen wordt er in Nederland een vrouw vermoord door
                partnergeweld.
              </h2>
              <p className="md:max-w-xl max-w-xs text-lg text-justify">
                De cijfers liegen niet - er moet iets veranderen. Maar waar
                begin je? Help met 1 donatie, 5 goede doelen die zich inzetten
                voor de vrouw.
              </p>
              <p className="pt-16 md:mt-10">
                Met de bundeldonatie doneer je in één keer aan alle goede doelen
                in onze speciale vrouwenbundel.
              </p>
            </div>
          </Wrapper>
        </Section>
      </div>

      <div className="bg-white">
        <Section>
          <Wrapper>
            <div className="lg:ml-36 md:ml-4 lg:px lg:mt-12 md:mt-16">
              <h2 className="font-black md:text-5xl text-4xl mt-4 mb-4">
                Elke 10 dagen wordt er in Nederland een vrouw vermoord door
                partnergeweld.
              </h2>
              <p className="max-w-lg">
                De cijfers liegen niet - er moet iets veranderen. Maar waar
                begin je? Help met 1 donatie, 5 goede doelen die zich inzetten
                voor de vrouw.
              </p>

              <p className="pt-16 md:-mt-4 font-bold">
                Met de bundeldonatie doneer je in één keer aan alle goede doelen
                in onze speciale vrouwenbundel.
              </p>

              <div className="max-w-xl">
                <div className="relative">
                  <Image alt="bundel" src={bundel} />
                  <div className="absolute -top-1/4 -right-1/3 h-[132px] md:w-2/3 hidden md:block">
                    <Image
                      alt="arrow"
                      src={arrow}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
              <Button
                tag="link"
                href="https://share.app.goodplace.foundation/kind-in-nood-f"
                label="Probeer een bundel donatie"
                variant="gradientgreen"
                size="M"
              />

              <p className="md:max-w-sm max-w-xs mt-4 text-base text-justify">
                Of volg ons via onze{' '}
                <span className="font-bold text-base">
                  <a
                    className=""
                    href="https://forms.gle/WQGWzE9Csf8gTcvA8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    nieuwsbrief
                  </a>
                </span>{' '}
                of social media
                <Socials socialsItems={socialsItems_follow} />
              </p>
            </div>
          </Wrapper>
        </Section>
      </div>

      <div className="bg-pink">
        <Section>
          <Wrapper>
            <div className="flex flex-col md:px-0 lg:max-w-5xl md:max-w-2xl max-w-xs m-auto">
              <h2 className="font-black text-center md:text-5xl text-3xl">
                Zo werkt Goodplace
              </h2>
              <h3 className="text-center md:text-3xl text-lg font-bold">
                Dé donatie app.
              </h3>

              <div className="space-y-2 md:space-y-0 lg:grid lg:grid-cols-3 gap-24 -mx-8 md:pt-24 pt-10 text-darkestgreen text-lg font-medium">
                {uspImages.map((usp) => (
                  <Usp key={usp.title} usp={usp} variant="primary" />
                ))}
              </div>

              <div className="mx-auto md:mt-24 mt-12 md:px-0 md:block hidden">
                <Button
                  tag="link"
                  href="/"
                  label="Lees meer over hoe Goodplace werkt!"
                  variant="gradientgreen"
                  size="M"
                />
              </div>
              <div className="mx-auto md:mt-24 mt-12 md:px-0 md:hidden">
                <Button
                  tag="link"
                  href="/"
                  label="Lees meer over hoe Goodplace werkt!"
                  variant="gradientgreen"
                  size="S"
                />
              </div>
            </div>
          </Wrapper>
        </Section>

        <div className="bg-pink">
          <Section>
            <Wrapper>
              <div className="text-center overflow-hidden md:-mt-12">
                <h2 className="mb-10 text-darkestgreen font-extrabold md:text-3xl text-2xl max-w-2xl m-auto">
                  Ontdek het nieuwe doneren
                </h2>
                <div className="flex space-x-3 justify-center mx-auto lg:px-96 lg:mx-12 md:px-46 px-12">
                  <div>
                    <Link
                      href="https://play.google.com/store/apps/details?id=foundation.goodplace.app&referrer=utm_source%3Dgoodplace%26utm_medium%3Dlandingpage%26utm_campaign%3Dkind-in-nood-functioneel"
                      passHref
                    >
                      <a>
                        <Image alt="googleplay" src={googleplay} />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://apps.apple.com/app/apple-store/id1573545734?pt=123201503&ct=kind-in-nood-functioneel&mt=8"
                      passHref
                    >
                      <a>
                        <Image alt="apple-store" src={applestore} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Wrapper>
          </Section>
        </div>
        <Section noPaddingBottom bgColor="white">
          <Wrapper>
            <div>
              <Brands brandItems={brandItems} />
            </div>
          </Wrapper>
        </Section>
        <Section noPaddingBottom bgColor="green">
          <Wrapper>
            <Footer />
          </Wrapper>
        </Section>
      </div>
    </div>
  );
};

export default CampaignLatent;
