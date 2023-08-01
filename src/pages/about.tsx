import React from 'react';

import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import applestore from '../assets/apple-store-badge.png';
import googleplay from '../assets/google-play-badge.png';
import imageframe from '../assets/imageframe.png';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { teamMembers, raadVanAdvies } from '../data/data';
import { Base } from '../templates/Base';

const About: NextPage = () => {
  return (
    <Base>
      <Section bgColor="darkgreen">
        <Wrapper>
          <div className="mb-12">
            <h2 className="mb-4 mt-0 font-black text-lightgreen text-5xl">
              Goed doen met 1 druk op de knop.
            </h2>
            <h3 className="text-lightgreen font-medium">
              Doneren moet makkelijk en overzichtelijk zijn.
            </h3>
          </div>
          <div className="text-right">
            <h2 className="mb-0 font-extrabold text-lightgreen text-4xl">
              Ons verhaal
            </h2>
            <p className="text-lightgreen font-light">
              Goodplace werd opgericht in 2021 door twee generaties ondernemers
              met een gezamenlijke missie: een betere wereld voor mens, dier en
              natuur.
              <br />
              Noortje en Dominique zijn van de generatie die zich geconfronteerd
              voelt met een wereld die wellicht in hun leven al grotendeels
              onleefbaar wordt. De urgentie om een steentje bij te dragen en
              impact te maken voelden zij zeker, maar toch doneerden zij niet
              zoveel aan goede doelen als ze eigenlijk wilden. Ze misten een
              overzichtelijke en makkelijke manier om hun donaties te regelen,
              precies zoals ze gewend waren bij het bestellen van eten of het
              boeken van hun sportklasjes: “Er zijn zóveel problemen in de
              wereld, en zoveel organisaties, klein en groot, die allemaal goede
              dingen doen. We zagen door de bomen het bos niet meer.”
              <br />
              Frank, Menno en Jeremy hebben het inmiddels “gemaakt” in hun
              carrière, en vonden het tijd zich meer in te zetten voor de
              maatschappij. Ook zij voelden weerstand bij de huidige manier van
              doneren: doneren werd voor hen een “moetje” en was niet meer leuk.
              Zij stoorden zich ook steeds meer aan colportage, of
              ‘straatverkopers’, een kostbaar marketingkanaal voor goede doelen
              waardoor minder geld op de juiste plek terechtkomt. Ze zochten een
              digitaal alternatief waarbij de donateur doneren weer als iets
              positiefs kon zien: “Ook doneren kan dopamine losmaken bij
              mensen.”
            </p>
          </div>
        </Wrapper>
      </Section>

      <Section bgColor="lightgreen">
        <Wrapper>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            <div className="">
              <h2 className="mb-4 font-bold text-darkgreen">Ons doel</h2>
              <p className="text-darkgreen">
                Onze missie is om meer impact te creëren voor de wereld, door
                doneren aan goede doelen meer flexibel, overzichtelijk en leuk
                te maken. Wij geloven dat iedereen impact kan maken en positieve
                verandering teweeg kan brengen, en dat dat zo simpel mogelijk
                moet zijn.
                <br />
                Ons doel is om mensen te inspireren en aan te moedigen om
                bewuste gevers te worden. Door een platform te creëren dat de
                brug slaat tussen iedereen die goed wil doen en de goede doelen,
                willen we een positieve impact creëren op belangrijke
                maatschappelijke thema’s, van oorlog, klimaat en onderwijs tot
                de LGBTQIA+ beweging en eenzame ouderen. Transparantie,
                flexibiliteit, overzicht en gemak zijn hierbij onze
                belangrijkste kernwaarden.
                <br />
                Goodplace is er enerzijds om bestaande drempels bij doneren weg
                te nemen. Anderzijds willen we dat jij kunt geven aan dingen die
                jou persoonlijk raken.
              </p>
            </div>
            <img
              className="w-full md:w-1/5 mt-8"
              alt="awd"
              src={imageframe.src}
            />
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <div className="text-center">
            <h2 className="font-black text-orange">Wil jij helpen?</h2>
            <p className="text-orange">
              Ben jij enthousiast over wat we doen en wil jij graag helpen? Laat
              het ons weten! We zijn altijd op zoek naar mensen die mee denken,
              feedback hebben of extra handjes. Stuur ons een mail naar
              team@goodplace.foundation of stuur ons een dm op de socials!
            </p>
          </div>
        </Wrapper>
      </Section>

      <Section bgColor="lightgreen">
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
