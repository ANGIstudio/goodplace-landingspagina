import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import applestore from '../assets/apple-store-badge.png';
import arrow from '../assets/arrow_campaign.png';
import icon_hands from '../assets/bundel_hands.png';
import googleplay from '../assets/google-play-badge.png';
import logo from '../assets/logo_wit.svg';
import bundel from '../assets/Themacampagne_jan_24/bundel.png';
import bundel_mobile from '../assets/Themacampagne_jan_24/bundel_mobile.png';
import heroimage from '../assets/Themacampagne_jan_24/heroimage.png';
import heroimage_mobile from '../assets/Themacampagne_jan_24/heroimage_mobile.png';
import logo_1 from '../assets/Themacampagne_jan_24/logo_1.png';
import logo_2 from '../assets/Themacampagne_jan_24/logo_2.png';
import logo_3 from '../assets/Themacampagne_jan_24/logo_3.png';
import logo_4 from '../assets/Themacampagne_jan_24/logo_4.png';
import logo_5 from '../assets/Themacampagne_jan_24/logo_5.png';
import QR from '../assets/Themacampagne_jan_24/QR.png';
import target from '../assets/vink.png';
import { Brands } from '../components/Brands/Brands';
import { Button } from '../components/Button/Button';
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
                <div className="order-1 md:order-1 md:block hidden">
                  <Image alt="heroimage" src={heroimage} />
                </div>
                <div className="flex space-x-4 md:ml-10 lg:w-fit w-80 lg:pt-12 pt-8">
                  <div>
                    <Link
                      href="https://play.google.com/store/apps/details?id=foundation.goodplace.app&referrer=utm_source%3Dgoodplace%26utm_medium%3Dlandingpage%26utm_campaign%3Dvrouwencampagne"
                      passHref
                    >
                      <a>
                        <Image alt="googleplay" src={googleplay} />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://apps.apple.com/app/apple-store/id1573545734?pt=123201503&ct=vrouwencampagne&mt=8"
                      passHref
                    >
                      <a>
                        <Image alt="apple-store" src={applestore} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="lg:pt-0 sm:pt-36 pt-36">
                <div className="w-20 md:w-36 pb-8 md:block hidden">
                  <Image alt="hands" src={icon_hands} />
                </div>
                <div className="flex flex-row md:hidden block">
                  <div className="w-20 md:w-36 pb-8">
                    <Image alt="hands" src={icon_hands} />
                  </div>
                  <div className="w-64 ml-36 -mt-36">
                    <Image alt="heroimage_mobile" src={heroimage_mobile} />
                  </div>
                </div>
                <h1 className="text-darkestgreen font-black text-4xl md:text-6xl">
                  De handen ineen,
                </h1>
                <h1 className="text-darkestgreen font-bold mb-8 text-4xl md:text-6xl">
                  voor elke vrouw.
                </h1>
                <h3 className="text-darkestgreen md:text-xl md:max-w-lg max-w-sm md:font-medium lg:font-medium text-base leading-6">
                  Wereldwijd, maar ook bij jou om de hoek zijn vrouwen
                  slachtoffer van geweld, uitbuiting en ongelijkheid. Bij
                  Goodplace geef je in een paar klikken aan al deze thema’s
                  tegelijk. Dát is gemakkelijk en effectief impact maken.
                </h3>
                <div className="md:mt-8 md:block hidden w-2/3">
                  <Image alt="QR" src={QR} />
                </div>
                <div className="md:mt-12 mt-8 md:hidden">
                  <Button
                    tag="link"
                    href="https://share.app.goodplace.foundation/vrouwen-1"
                    label="Probeer een bundeldonatie in de app!"
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
            <div className="lg:ml-36 md:ml-10 md:px-0 lg:max-w-xl">
              <h2 className="font-bold md:text-4xl text-3xl mt-4 mb-4">
                <span className="font-black">Elke 10 dagen</span> wordt er in
                Nederland een vrouw <span className="italic">vermoord</span>{' '}
                door partnergeweld.
              </h2>
              <p className="md:max-w-lg max-w-xs text-lg">
                De cijfers liegen niet - er moet iets veranderen. Maar waar
                begin je? Help met 1 donatie, 5 goede doelen die zich inzetten
                voor de vrouw.
              </p>
              <p className="mt-10 md:max-w-lg max-w-xs text-lg">
                In deze bundeldonatie help je onderstaande 5 goede doelen. Wij
                zetten voor je op een rijtje wie wat doet, en waar je donatie
                naartoe gaat.
              </p>
            </div>
          </Wrapper>
        </Section>
      </div>

      <div className="bg-white">
        <Section>
          <Wrapper>
            <div className="lg:ml-36 md:ml-4 lg:mt-12 md:mt-16">
              <h2 className="font-black md:text-5xl text-4xl mt-4 mb-4">
                Elke 10 dagen wordt er in Nederland een vrouw vermoord door
                partnergeweld.
              </h2>
              <p className="max-w-lg">
                De cijfers liegen niet - er moet iets veranderen. Maar waar
                begin je? Help met 1 donatie, 5 goede doelen die zich inzetten
                voor de vrouw.
              </p>

              <div className="max-w-2xl">
                <div className="relative md:mt-32 mt-8 hidden md:block">
                  <Image alt="bundel" src={bundel} />
                  <div className="absolute -top-1/4 -right-1/3 h-[132px] md:w-2/3">
                    <Image
                      alt="arrow"
                      src={arrow}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className="relative mt-20 mb-4 md:hidden">
                  <Image alt="bundel" src={bundel_mobile} />
                </div>
              </div>

              <Button
                tag="link"
                href="https://share.app.goodplace.foundation/vrouwen-1"
                label="Probeer een bundeldonatie!"
                variant="gradientgreen"
                size="L"
              />
            </div>
          </Wrapper>
        </Section>
      </div>
      <div className="bg-pink">
        <Section>
          <Wrapper>
            <div className="lg:ml-36 md:ml-4 md:grid md:grid-cols-2 md:max-w-5xl md:gap-8">
              <h2 className="font-black md:text-4xl text-4xl mb-4 max-w-xs">
                Dit gebeurt er met jouw geld
              </h2>

              <div className="md:mx-0 mx-4 md:mb-0 mb-10">
                <div className="grid grid-cols-5 md:gap-8 gap-2 mb-2 md:mt-0 mt-12">
                  <div className="drop-shadow-xl">
                    <Image alt="wijzijnm" src={logo_1} />
                  </div>
                  <div className="col-span-4">
                    <p className="max-w-lg font-bold md:text-xl text-lg md:leading-normal leading-6 md:mt-0 mt-4">
                      Doorbreek de taboe rondom seksueel misbruik
                    </p>
                  </div>
                </div>
                <p className="max-w-lg md:text-lg text-base leading-normal md:mt-0 mt-4">
                  Wij zijn M heeft als doel seksueel misbruik bespreekbaar te
                  maken, zodat slachtoffers beter geholpen kunnen worden. Zij
                  doen dit door voorlichting te geven op scholen en campagnes
                  rondom seksueel misbruik te organiseren.
                </p>
              </div>
              <div className="md:mx-0 mx-4 md:mb-0 mb-10">
                <div className="grid grid-cols-5 md:gap-8 gap-2 mb-2 md:mt-0 mt-12">
                  <div className="drop-shadow-xl">
                    <Image alt="MamaCash" src={logo_2} />
                  </div>
                  <div className="col-span-4">
                    <p className="max-w-lg font-bold md:text-xl text-lg md:leading-normal leading-6">
                      Gelijke rechten voor vrouwen, meisjes, trans- en interekse
                      personen
                    </p>
                  </div>
                </div>
                <p className="max-w-lg md:text-lg text-base leading-normal md:mt-0 mt-4">
                  Iedereen moet volledig en volwaardig kunnen deelnemen in alle
                  maatschappelijke en economische sectoren en volledige
                  zeggenschap hebben over het eigen lichaam. MamaCash zet zich
                  hiervoor in door relevante vrouwenfondsen te financieren en
                  fondsen aan te sporen meer geld vrij te maken voor deze
                  groepen.
                </p>
              </div>
              <div className="md:mx-0 mx-4 md:mb-0 mb-10">
                <div className="grid grid-cols-5 md:gap-8 gap-2 mb-2 md:mt-0 mt-12">
                  <div className="drop-shadow-xl">
                    <Image alt="beschermdewieg" src={logo_4} />
                  </div>
                  <div className="col-span-4">
                    <p className="max-w-lg font-bold md:text-xl text-lg md:leading-normal leading-6">
                      Bescherming en ondersteuning bij ongewenste zwangerschap
                    </p>
                  </div>
                </div>
                <p className="max-w-lg md:text-lg text-base leading-normal md:mt-0 mt-4">
                  Tot 2015 werden er in Nederland jaarlijks gemiddeld 5
                  vondelingen gevonden. De meeste baby’s waren dood. Beschermde
                  wieg doet er alles aan om samen met de moeder tot een andere
                  oplossing te komen, door laagdrempelig, anonieme hulp te
                  bieden. Zij stimuleren vrouwen hun eigen waarden en daarbij
                  passende levensbeschouwing te volgen.
                </p>
              </div>
              <div className="md:mx-0 mx-4 md:mb-0 mb-10">
                <div className="grid grid-cols-5 md:gap-8 gap-2 mb-2 md:mt-0 mt-12">
                  <div className="drop-shadow-xl">
                    <Image alt="freeagirl" src={logo_3} />
                  </div>
                  <div className="col-span-4">
                    <p className="max-w-lg font-bold md:text-xl text-lg md:leading-normal leading-6">
                      Voor een wereld zonder seksuele uitbuiting van meisjes
                    </p>
                  </div>
                </div>
                <p className="max-w-lg md:text-lg text-base leading-normal md:mt-0 mt-4">
                  Free a Girl bevrijdt meisjes van seksuele uitbuiting. Zij
                  verzamelen bewijsmateriaal door undercover te gaan in bordelen
                  of via online onderzoek. Als er genoeg bewijsmateriaal is
                  verzameld, trappen de bevrijdingsteams, in samenwerking met de
                  lokale politie, de deuren van een bordeel, karaokebar of
                  dansclub in om meisjes te bevrijden. De meisjes krijgen acute
                  medische zorg en mentale hulp om hun trauma’s te verwerken en
                  om te voorkomen dat zij opnieuw slachtoffer worden.
                </p>
              </div>
              <div className="md:mx-0 mx-4 md:mb-0 mb-10">
                <div className="grid grid-cols-5 md:gap-8 gap-2 mb-2 md:mt-0 mt-12">
                  <div className="drop-shadow-xl">
                    <Image alt="cordaid" src={logo_5} />
                  </div>
                  <div className="col-span-4">
                    <p className="max-w-lg font-bold md:text-xl text-lg md:leading-normal leading-6 md:mt-0 mt-4">
                      Veiligheid en gelijke rechten voor vrouwen
                    </p>
                  </div>
                </div>
                <p className="max-w-lg md:text-lg text-base leading-normal md:mt-0 mt-4">
                  Vrouwen worden wereldwijd achtergesteld. Traditionele
                  verhoudingen en normen verbieden vrouwen om land te erven,
                  recht te hebben op de inkomsten van hun man en marginaliseren
                  slachtoffers van seksueel misbruik. Cordaid helpt door het
                  geven van een stem aan vrouwen en ze bewust te maken van waar
                  ze recht op hebben.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:px-0 lg:max-w-5xl max-w-2xl m-auto">
              <h2 className="text-darkestgreen font-bold text-2xl max-w-2xl m-auto md:mt-12 mt-8">
                Geïnteresseerd in dit thema?
              </h2>
              <div className="mx-auto mt-4 md:px-0 md:block hidden">
                <Button
                  tag="link"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd6PILTfYxXrMnuVsCH2Mvl6m3oN24zrFubJz_S7SWw6G3JQg/viewform?usp=sf_link"
                  label="Meld je aan voor de nieuwsbrief"
                  variant="gradientgreen"
                  size="M"
                />
              </div>
              <div className="mx-auto md:mt-24 mt-4 md:px-0 md:hidden">
                <Button
                  tag="link"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd6PILTfYxXrMnuVsCH2Mvl6m3oN24zrFubJz_S7SWw6G3JQg/viewform?usp=sf_link"
                  label="Meld je aan voor de nieuwsbrief"
                  variant="gradientgreen"
                  size="S"
                />
              </div>
              <p className="m-auto mt-4 text-lg text-center">
                en ontvang updates over dit thema en het werk van deze goede
                doelen.
              </p>
            </div>
          </Wrapper>
        </Section>
      </div>
      <div className="bg-white">
        <Section>
          <Wrapper>
            <div className="flex flex-col md:px-0 lg:max-w-5xl md:max-w-2xl max-w-xs m-auto">
              <h2 className="font-black text-center md:text-5xl text-3xl">
                Zo werkt Goodplace
              </h2>
              <h3 className="text-center md:text-3xl text-lg font-bold">
                Dé donatie app.
              </h3>

              <div className="space-y-2 md:space-y-0 lg:grid lg:grid-cols-3 gap-24 -mx-8 md:pt-24 pt-10 text-darkestgreen text-lg font-medium px-4 md:px-0">
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
              <p className="m-auto mt-4 md:text-lg text-base text-center">
                of volg ons op social media
              </p>
              <div className="m-auto md:mt-8 mt-2">
                <Socials socialsItems={socialsItems_follow} />
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
                      href="https://play.google.com/store/apps/details?id=foundation.goodplace.app&referrer=utm_source%3Dgoodplace%26utm_medium%3Dlandingpage%26utm_campaign%3Dvrouwencampagne"
                      passHref
                    >
                      <a>
                        <Image alt="googleplay" src={googleplay} />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://apps.apple.com/app/apple-store/id1573545734?pt=123201503&ct=vrouwencampagne&mt=8"
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
      </div>
    </div>
  );
};

export default CampaignLatent;
