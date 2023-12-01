import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import applestore from '../assets/apple-store-badge.png';
import arrow from '../assets/arrow_campaign.png';
import icon_hands from '../assets/bundel_hands.png';
import googleplay from '../assets/google-play-badge.png';
import logo from '../assets/logo_wit.svg';
import bundel from '../assets/Themacampagne_dec_23/bundel.png';
import quote from '../assets/Themacampagne_dec_23/quote.png';
import target from '../assets/vink.png';
import { Brands } from '../components/Brands/Brands';
import { Button } from '../components/Button/Button';
import { Footer } from '../components/Footer/Footer';
import { Navigation } from '../components/Navigation_campaign/Navigation_campaign';
import { Section } from '../components/Section/Section';
import { Usp } from '../components/Usp/Usp';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { brandItems } from '../data/data';
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
        'Doneren gaat gewoon via iDeal, registreren is niet nodig en je hoeft niet allerlei persoonsgegevens achter te laten.',
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
    <div className="antialiased text-darkestgreen font-jost bg-black relative">
      <Meta appConfig={AppConfig} />
      <Navigation logo={logo} mobilelogo={logo} />
      <Section noPaddingBottom noPaddingTop>
        <div className="mb-6 bg-campaign_2 bg-fixed bg-cover bg-no-repeat h-screen -mt-105px">
          <div className="bg-gradient-to-t from-black to-transparent h-screen -mt-105px">
            <div className="flex lg:flex-row flex-col-reverse lg:pt-48 pt-24 lg:space-x-56 max-w-screen-2xl mx-auto px-6 lg:px-4">
              <div className="lg:pt-72 lg:mt-72">
                <div className="flex space-x-4 lg:-ml-8 md:ml-10 lg:w-fit w-80 lg:pt-0 pt-8">
                  <div>
                    <Link
                      href="https://play.google.com/store/apps/details?id=foundation.goodplace.app&referrer=utm_source%3Dgoodplace%26utm_medium%3Dlandingpage%26utm_campaign%3Dkind-in-nood-emotioneel "
                      passHref
                    >
                      <a>
                        <Image alt="googleplay" src={googleplay} />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://apps.apple.com/app/apple-store/id1573545734?pt=123201503&ct=kind-in-nood-emotioneel&mt=8"
                      passHref
                    >
                      <a>
                        <Image alt="apple-store" src={applestore} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:pl-56 md:pl-10 lg:pt-8 sm:pt-36 pt-36">
                <div className="w-20 md:w-36 pb-8">
                  <Image alt="hands" src={icon_hands} />
                </div>
                <h1 className="text-white font-extrabold pb-3">Een kind</h1>
                <h1 className="text-white font-extrabold mb-8">in nood</h1>

                <h3 className="text-white md:text-2xl md:max-w-lg max-w-sm md:font-normal lg:font-normal text-base leading-6">
                  Helpen is makkelijker dan ooit. Bundel de kracht van meerdere
                  goede doelen, en help kinderen beschermen en herstellen.
                </h3>
                <div className="md:mt-12 mt-8 md:block hidden">
                  <Button
                    tag="link"
                    href="https://share.app.goodplace.foundation/kind-in-nood-e"
                    label="Probeer een bundel donatie"
                    variant="gradientgreen"
                    size="M"
                  />
                </div>
                <div className="md:mt-12 mt-8 md:hidden">
                  <Button
                    tag="link"
                    href="https://app.goodplace.foundation/charity/52"
                    label="Probeer een bundel donatie"
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
            <div className="lg:ml-36 md:ml-10 md:px-0">
              <h2 className="font-black md:text-5xl text-4xl mt-4">
                Eén donatie,
              </h2>
              <h2 className="font-bold italic md:text-5xl text-4xl mb-4">
                5 goede doelen.
              </h2>
              <p className="md:max-w-sm max-w-xs text-lg text-justify">
                Wat is nu belangrijk, hoe maak ik de meeste impact, en wie doet
                nou wat? Wij zetten het voor je op een rijtje. Kiezen is niet
                meer nodig.
              </p>

              <p className="pt-16 md:mt-10 font-semibold">
                Met een bundeldonatie geef jij kinderen in nood:
              </p>
            </div>
          </Wrapper>
        </Section>
      </div>

      <div className="bg-white">
        <Section>
          <Wrapper>
            <div className="lg:ml-36 md:ml-4 lg:px lg:mt-12 md:mt-16">
              <h2 className="font-black md:text-5xl text-4xl mt-4">
                Eén donatie,
              </h2>
              <h2 className="font-bold italic md:text-5xl text-4xl mb-4">
                5 goede doelen.
              </h2>
              <p className="max-w-lg">
                Wat is nu belangrijk, hoe maak ik het meeste impact, en wie doet
                nou wat? Wij zetten het voor je op een rijtje. Kiezen is niet
                meer nodig.
              </p>

              <p className="pt-16 md:-mt-4 font-bold">
                Met een bundel donatie geef jij kinderen:
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
                href="https://app.goodplace.foundation/charity/52"
                label="Probeer een bundel donatie"
                variant="gradientgreen"
                size="M"
              />

              <p className="md:max-w-sm max-w-xs mt-4 text-base text-justify">
                Liever maandelijks doneren via deze bundel, of het werk van één
                van deze organisaties steunen?
              </p>

              <p className="md:max-w-sm max-w-xs mt-2 text-base text-justify font-bold">
                Download de app.
              </p>

              <div className="flex space-x-4 lg:w-fit w-72 lg:pt-0">
                <div>
                  <Link
                    href="https://play.google.com/store/apps/details?id=foundation.goodplace.app&referrer=utm_source%3Dgoodplace%26utm_medium%3Dlandingpage%26utm_campaign%3Dkind-in-nood-emotioneel "
                    passHref
                  >
                    <a>
                      <Image alt="googleplay" src={googleplay} />
                    </a>
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://apps.apple.com/app/apple-store/id1573545734?pt=123201503&ct=kind-in-nood-emotioneel&mt=8"
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

      <div className="bg-lightgreen">
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

        <div className="bg-lightgreen">
          <Section>
            <Wrapper>
              <div className="text-center overflow-hidden md:-mt-12">
                <h2 className="mb-10 text-darkestgreen font-extrabold md:text-3xl text-2xl max-w-2xl m-auto">
                  Ontdek het nieuwe doneren
                </h2>
                <div className="flex space-x-3 justify-center mx-auto lg:px-96 lg:mx-12 md:px-46 px-12">
                  <div>
                    <Link
                      href="https://play.google.com/store/apps/details?id=foundation.goodplace.app&referrer=utm_source%3Dgoodplace%26utm_medium%3Dlandingpage%26utm_campaign%3Dkind-in-nood-emotioneel"
                      passHref
                    >
                      <a>
                        <Image alt="googleplay" src={googleplay} />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://apps.apple.com/app/apple-store/id1573545734?pt=123201503&ct=kind-in-nood-emotioneel&mt=8"
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
            <div className="max-w-xl mx-auto mb-">
              <Image alt="quote" src={quote} />
            </div>
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
