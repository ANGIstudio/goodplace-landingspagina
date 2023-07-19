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
        'Start, wijzig en stop je donaties gemakkelijk, wanneer jij dat wilt. Eenmalig of maandelijks doneren, zonder ongewenste reclame en post.',
    },
    {
      title: 'Alles op één plek geregeld',
      image: target,
      description:
        'Je doneert vanuit één enkele app aan jouw favoriete goede doelen. Ontdek nieuwe goede doelen, en blijf op de hoogte van wat zij met jouw donatiegeld bereiken. Zo houd je ook nog eens overzicht over wat je geeft, en waar je geld naartoe gaat.',
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

      <Section bgColor="darkgreen">
        <Wrapper>
          <div className="text-center">
            <div className="mb-8 md:mb-16 max-w-lg m-auto">
              <h4 className="mb-4 text-lightgreen font-black text-5xl">
                Doneren <br />
                zonder drempels
              </h4>
              <p className="text-lightgreen font-medium text-xl">
                Ons doel is om jou in control te laten zijn over jouw donaties.
                Alles overzichtelijk en flexibel geregeld vanuit één simpele
                app, zonder ergens aan vast te zitten.
              </p>
            </div>
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-2 gap-0 md:ml-10 md:mr-10 pt-10 text-lightgreen text-lg font-medium">
              {uspImages.map((usp) => (
                <Usp key={usp.title} usp={usp} variant="primary" />
              ))}
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section bgColor="lightgreen">
        <Wrapper>
          <div className="text-center text-darkgreen">
            <div className="mb-8 md:mb-16 max-w-lg m-auto">
              <h4 className="mb-12 text-darkgreen text-5xl">
                Goede <br />
                Doelen
              </h4>
              <p className="mb-16 text-darkgreen font-medium">
                Wij zijn continu bezig met het uitbreiden van ons aanbod aan
                goede doelen. Groot of klein, lokaal actief of wereldwijd: we
                sluiten niemand uit. Als donateur moet jij zelf kunnen bepalen
                aan wie je doneert.
                <br />
                Ben jij, of ken jij een goed doel dat partner moet worden bij
                Goodplace?
              </p>

              <Button
                tag="link"
                href="https://docs.google.com/forms/d/e/1FAIpQLScNLkencHjnk8uUlSFKGMSRrgloTKy6MD-IeLMrKb76S8gLkg/viewform?vc=0&c=0&w=1&flr=0"
                label="Meld een nieuw goed doel aan!"
                variant="green"
                size="M"
              />

              <p className="mb-3 mt-8 text-darkgreen font-medium">
                Aanmelden van nieuwe goede doelen kan vanuit goede doelen zelf,
                of vanuit de donateur.
              </p>
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
                  <Image alt="heart" src={heart} />
                </div>
                We love <br />
                feedback
              </h4>
              <p className="mb-8 pl-2 text-darkgreen">
                Waarom? Omdat we niet alleen willen goed-doen, maar het ook
                graag goed willen doen. Jouw stem is nou precies de steen die
                bijdraagt om doneren smooth en makkelijk te kunnen maken. Zo
                komen we samen naar een betere wereld: niet voor, maar mét
                elkaar.
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

      <Section bgColor="lightbeige">
        <Wrapper>
          <div className="text-center overflow-hidden">
            <h2 className="mb-10 text-orange font-bold max-w-2xl m-auto text-4xl">
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
