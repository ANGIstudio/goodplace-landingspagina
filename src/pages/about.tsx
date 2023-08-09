import React from 'react';

import { NextPage } from 'next';

import founders1 from '../assets/dominique_noortje.png';
import founders2 from '../assets/menno_frank_jeremy.png';
import adviesraad from '../assets/yoni_yvo_leo.png';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const About: NextPage = () => {
  return (
    <Base>
      <Section bgColor="lightgreen">
        <Wrapper>
          <div className="text-darkgreen">
            <div className="m-auto items-center max-w-lg">
              <h2 className="mb-2 text-darkgreen font-black md:text-5xl text-4xl">
                Ons <br />
                verhaal
              </h2>
              <p className="text-darkgreen mb-2 md:text-justify font-medium md:text-xl text-lg">
                Goodplace werd opgericht in 2021 door twee generaties
                ondernemers met een gezamenlijke missie:
              </p>
              <p className="text-darkgreen font-medium md:text-4xl text-2xl md:text-justify">
                een betere
                <strong>
                  <em> wereld voor mens, dier en natuur.</em>
                </strong>
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:justify-center items-center lg:ml-42 md:space-x-12 overflow-hidden md:mt-2 mt-8">
            <div className="-mt-4 mb-4">
              <img alt="founders_noortje_dominique" src={founders1.src} />
            </div>
            <div className="md:w-2/5 md:-mt-16 -mt-4">
              <p className="text-darkgreen pb-4 font-medium md:text-xl text-lg md:text-justify">
                Noortje en Dominique zijn van de generatie die zich
                geconfronteerd voelt met een wereld die wellicht in hun leven al
                grotendeels onleefbaar wordt. De urgentie om een steentje bij te
                dragen en impact te maken voelden zij zeker, maar toch voelden
                zij zich tegengehouden te doneren aan goede doelen.
                <br />
                <br />
                Ze misten een <strong>overzichtelijke</strong> en
                <strong> makkelijke</strong> manier om hun donaties te regelen,
                precies zoals ze gewend waren bij het bestellen van eten of het
                boeken van hun sportklasjes: “Er zijn zóveel problemen in de
                wereld, en zoveel organisaties, klein en groot, die allemaal
                goede dingen doen. We zagen door de bomen het bos niet meer.”
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse justify-center md:space-x-12 overflow-hidden">
            <div className="md:w-2/5">
              <p className="text-darkgreen font-medium md:text-4xl text-3xl mb-4 md:text-justify">
                <em>”We zagen door de bomen het bos niet meer”</em>
              </p>
              <p className="text-darkgreen font-medium md:text-xl text-lg ml-10 md:text-justify">
                Frank, Menno en Jeremy hebben het inmiddels ’gemaakt’ in hun
                carrière, en vonden het tijd zich meer in te zetten voor de
                maatschappij. Ook zij voelden weerstand bij de huidige manier
                van doneren: doneren werd voor hen een “moetje” en was niet meer
                leuk.
                <br />
                <br />
                Zij stoorden zich ook steeds meer aan colportage, of
                ‘straatverkopers’, een kostbaar marketingkanaal voor goede
                doelen waardoor significant minder geld op de juiste plek
                terechtkomt. Ze zochten een digitaal alternatief waarbij de
                donateur doneren weer als iets positiefs kon zien:
                <strong>
                  “Een donatie zou ook een dopamine-shot moeten losmaken”
                </strong>
              </p>
            </div>
            <div>
              <img alt="founders_menno_frank_jeremy" src={founders2.src} />
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section bgColor="lightgreen">
        <Wrapper>
          <div className="m-auto items-center max-w-lg">
            <h2 className="mb-2 text-darkgreen font-black break-words lg:text-5xl md:text-3xl">
              Raad <br />
              van Advies
            </h2>
            <p className="text-darkgreen mb-2 font-medium md:text-xl text-lg md:text-justify">
              Al vanaf het begin zijn Yoni, Leopold en Yvo bij Goodplace
              betrokken. Zij zijn onze belangrijkste ambassadeurs en staan
              altijd klaar om zich in te zetten voor Goodplace.
            </p>
          </div>
          <div className="flex w-full justify-center items-center mt-8 lg:ml-4">
            <img alt="raad van advies" src={adviesraad.src} />
          </div>
        </Wrapper>
      </Section>

      <Section bgImage="bg-missie">
        <Wrapper>
          <div className="lg:mb-32">
            <div className="text-lightgreen">
              <h2 className="text-lightgreen md:mb-20 md:mb-12 mb-2 font-black break-words lg:text-5xl md:text-3xl text-center md:mt-0 -mt-8">
                Onze <br />
                missie
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-8 gap-x-12 md:mt-4 lg:mx-32 md:mx-12 mx-0 md:mb-12">
              <div>
                <p className="text-lightgreen font-extrabold md:text-3xl text-xl text-center">
                  <em>
                    ”We creëren meer impact voor de wereld door doneren
                    flexibel, overzichtelijk en leuk te maken.”
                  </em>
                </p>
                <br />
                <p className="md:text-xl md:text-justify text-lightgreen md:font-bold font-bold text-base">
                  Wij geloven dat iedereen impact kan maken en positieve
                  verandering teweeg kan brengen, en dat dat zo simpel mogelijk
                  moet zijn. <br />
                  <br />
                </p>
                <p className="md:text-lg md:text-justify text-lightgreen font-medium text-base">
                  Ons doel is om mensen te inspireren en aan te moedigen om
                  bewuste gevers te worden. Door een platform te creëren dat de
                  brug slaat tussen iedereen
                </p>
              </div>
              <div>
                <p className="md:text-lg text-base md:text-justify text-lightgreen font-medium">
                  die goed wil doen en de goede doelen, willen we een positieve
                  impact creëren op belangrijke maatschappelijke thema’s, van
                  oorlog, klimaat en onderwijs tot de LGBTQIA+ beweging en
                  eenzame ouderen. Transparantie, flexibiliteit, overzicht en
                  gemak zijn hierbij onze belangrijkste kernwaarden.
                  <br />
                  <br />
                  Goodplace is er enerzijds om bestaande drempels bij doneren
                  weg te nemen. Anderzijds willen we dat jij kunt geven aan
                  dingen die jou persoonlijk raken.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </Section>
    </Base>
  );
};

export default About;
