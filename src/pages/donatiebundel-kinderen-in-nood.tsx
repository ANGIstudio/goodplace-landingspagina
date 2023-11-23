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
import target from '../assets/vink.png';
import { Button } from '../components/Button/Button';
import { Footer } from '../components/Footer/Footer';
import { Navigation } from '../components/Navigation_campaign/Navigation_campaign';
import { Section } from '../components/Section/Section';
import { Usp } from '../components/Usp/Usp';
import { Wrapper } from '../components/Wrapper/Wrapper';
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
            <div className="flex md:flex-row flex-col-reverse md:pt-48 pt-24 md:space-x-56 max-w-screen-2xl mx-auto px-6 md:px-4">
              <div className="md:pt-72 md:mt-72">
                <div className="flex space-x-4 md:-ml-8 md:w-fit w-80 md:pt-0 pt-8">
                  <div>
                    <Link
                      href="https://play.google.com/store/apps/details?id=foundation.goodplace.app"
                      passHref
                    >
                      <a>
                        <Image alt="googleplay" src={googleplay} />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://apps.apple.com/nl/app/goodplace/id1573545734"
                      passHref
                    >
                      <a>
                        <Image alt="apple-store" src={applestore} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="md:pl-56 md:pt-8 sm:pt-36 pt-36">
                <div className="w-20 md:w-36 pb-8">
                  <Image alt="hands" src={icon_hands} />
                </div>
                <h1 className="text-white font-extrabold pb-3">Een kind</h1>
                <h1 className="text-white font-extrabold mb-8">in nood</h1>

                <h3 className="text-white md:text-2xl md:max-w-lg max-w-sm sm:text-lg md:font-normal font-semibold text-medium leading-6">
                  Helpen is makkelijker dan ooit. Bundel de kracht van meerdere
                  goede doelen, en help kinderen beschermen en herstellen.
                </h3>
                <div className="md:mt-12 mt-8 md:block hidden">
                  <Button
                    tag="link"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScNLkencHjnk8uUlSFKGMSRrgloTKy6MD-IeLMrKb76S8gLkg/viewform?vc=0&c=0&w=1&flr=0"
                    label="Probeer een bundel donatie"
                    variant="gradientgreen"
                    size="M"
                  />
                </div>
                <div className="md:mt-12 mt-8 md:hidden">
                  <Button
                    tag="link"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScNLkencHjnk8uUlSFKGMSRrgloTKy6MD-IeLMrKb76S8gLkg/viewform?vc=0&c=0&w=1&flr=0"
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
            <div className=" md:ml-36 md:px-0">
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

              <p className="pt-16 md:mt-10 font-bold">
                Met een bundel donatie geef jij kinderen:
              </p>
            </div>
          </Wrapper>
        </Section>
      </div>

      <div className="bg-white">
        <Section>
          <Wrapper>
            <div className=" md:ml-36 md:px md:mt-12">
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
            </div>

            <div className="md:mt-12 mt-8 mb-4">
              <Button
                tag="link"
                href="https://docs.google.com/forms/d/e/1FAIpQLScNLkencHjnk8uUlSFKGMSRrgloTKy6MD-IeLMrKb76S8gLkg/viewform?vc=0&c=0&w=1&flr=0"
                label="Probeer een bundel donatie"
                variant="gradientgreen"
                size="M"
              />

              <p className="max-w-sm mt-4 text-base">
                Liever maandelijks doneren via deze bundel, of het werk van één
                van deze organisaties steunen?
              </p>
              <p className="font-bold text-base">
                <a
                  className=""
                  href="http://www.google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download de app.
                </a>
              </p>
            </div>
          </Wrapper>
        </Section>
      </div>

      <div className="bg-lightgreen">
        <Section>
          <Wrapper>
            <div className="flex flex-col md:px-0 px-4">
              <h2 className="font-black text-center md:text-5xl text-3xl">
                Zo werkt Goodplace
              </h2>
              <h3 className="text-center md:text-3xl text-lg font-bold">
                Dé donatie app.
              </h3>

              <div className="space-y-2 md:space-y-0 md:grid md:grid-cols-3 gap-24 -mx-8 md:pt-24 pt-10 text-darkestgreen text-lg font-medium">
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

        <div className="bg-darkestgreen">
          <Section>
            <Wrapper>
              <div className="text-center overflow-hidden">
                <h2 className="mb-10 text-lightgreen font-extrabold md:text-4xl text-3xl max-w-2xl m-auto">
                  Ontdek het nieuwe doneren
                </h2>
                <div className="flex space-x-3 justify-center mx-auto md:px-96 md:mx-12 md:px-46 px-12">
                  <div>
                    <Link
                      href="https://play.google.com/store/apps/details?id=foundation.goodplace.app"
                      passHref
                    >
                      <a>
                        <Image alt="googleplay" src={googleplay} />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://apps.apple.com/nl/app/goodplace/id1573545734"
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
