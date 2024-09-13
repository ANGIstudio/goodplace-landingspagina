import React from 'react';

import { NextPage } from 'next';

import core_team from '../assets/core_team.png';
import phone_with_app from '../assets/phone_with_app.png';
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
                Goodplace Foundation heeft een missie:
              </p>
              <p className="text-darkgreen font-medium md:text-4xl text-2xl md:text-justify">
                <em>
                  <strong>de digitale generatie</strong> meer én vaker laten
                  doneren aan <strong>goede doelen</strong>.
                </em>
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:justify-center items-center lg:ml-42 md:space-x-12 overflow-hidden md:mt-2 mt-8">
            <div className="-mt-4 mb-4">
              <img alt="Telefoon met Goodplace app" src={phone_with_app.src} />
            </div>
            <div className="md:w-2/5 md:-mt-16 -mt-4">
              <p className="text-darkgreen pb-4 font-medium md:text-xl text-lg md:text-justify">
                De jongere generaties bekommeren zich meer dan ooit om de
                wereldproblematiek, maar geven steeds minder aan een goed doel.
                Als generaties afhaken om te geven heeft dit een grote impact op
                het werk van veel goede doelen.{' '}
                <strong>Wij maken doneren daarom radicaal eenvoudig</strong>.
                <br />
                <br />
                Met één klik je donatie starten, stoppen en je
                communicatievoorkeuren beheren. Kies voor een bundel of doneer
                direct aan een van de vele andere goede doelen.
                <br />
                <br />
                Goodplace is non-profit en{' '}
                <strong>100% van je donatie gaat naar het goede doel</strong>.
              </p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col-reverse justify-center md:space-x-12 overflow-hidden">
            <div className="md:w-2/5">
              <p className="text-darkgreen font-medium md:text-4xl text-3xl mb-4 md:text-justify">
                <em>
                  ”We zijn een <strong>klein team</strong> met een{' '}
                  <strong>betrokken netwerk</strong>.”
                </em>
              </p>
              <p className="text-darkgreen font-medium md:text-xl text-lg ml-10 md:text-justify">
                Achter de schermen bij Goodplace werkt een gedreven en{' '}
                <a
                  className="text-darkgreen underline"
                  target="_blank"
                  href="/goodplace-bestuur.pdf"
                >
                  onbezoldigd bestuur
                </a>{' '}
                van succesvolle ondernemers en een grotendeels vrijwillig team.
                <br />
                <br />
                Initiatiefnemer <strong>Menno van der Marel</strong> heeft een
                passie voor technologie en impact. Hij richt zich binnen het
                team op de organisatie en financiering.{' '}
                <strong>Jeremy Butcher</strong>, voormalig CTO bij Fox-IT, is
                verantwoordelijk voor de techniek achter de app.{' '}
                <strong>Frank Gottenbos</strong>, mede-oprichter en ondernemer
                in digitale innovatie, richt zich op bestuur en financiën.{' '}
                <strong>Marlies Meeboer</strong> een ervaren digitaal strateeg,
                vervult de rol van product- en marketingmanager. Met haar
                internationale ervaring met non-profit organisaties is{' '}
                <strong>Anouk Piket</strong> de verbinder met de goede doelen.
              </p>
            </div>
            <div>
              <img alt="Goodplace core team" src={core_team.src} />
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section bgColor="lightgreen">
        <Wrapper>
          <div className="m-auto items-center max-w-lg">
            <h2 className="mb-2 text-darkgreen font-black break-words lg:text-5xl md:text-3xl">
              Over Goodplace
            </h2>
            <p className="text-darkgreen mb-2 font-medium md:text-xl text-lg md:text-justify">
              In 2021 zijn <strong>Frank Gottenbos</strong> en{' '}
              <strong>Menno van der Marel</strong> Goodplace gestart. Daarna
              zijn verschillende initiatieven betrokken die hetzelfde doel
              nastreefden: <strong>Noortje de Haan</strong> en{' '}
              <strong>Dominique van der Vlist</strong> begonnen hun concept in
              Amsterdam en <strong>Ernout van der Waard</strong>,{' '}
              <strong>Koos Block</strong> en <strong>Camiel Mulders</strong>{' '}
              hebben Time to Give opgericht. Sinds 2024 zijn deze initiatieven
              samengekomen onder de naam: Goodplace Foundation.
            </p>
            <p className="text-darkgreen mb-2 font-medium md:text-xl text-lg md:text-justify">
              Vanaf het begin zijn <strong>Yoni Uhlenbeck</strong> (CEO de Roos
              advocaten), <strong>Leopold van Oosten</strong> (founder Amsterdam
              Standard) en <strong>Yvo Gortemaker</strong> (founder Amsterdam
              Standard) als Raad van Advies bij Goodplace betrokken. Zij zijn
              onze belangrijkste adviseurs en staan altijd klaar om zich in te
              zetten voor Goodplace. Ook <strong>Michel Jansen</strong> (Global
              Conversion Lead bij ING) en <strong>Bart Lakeman</strong>{' '}
              (Managing Director Addurance) denken regelmatig vrijwillig mee om
              Goodplace te helpen. Goodplace heeft zijn bestaan ook te danken
              aan zijn funders.
            </p>
            <p className="text-darkgreen mb-2 font-medium md:text-xl text-lg md:text-justify">
              Onderstaande documenten geven meer achtergrondinformatie over onze
              missie:
            </p>
            <ul>
              <li>
                <a
                  className="text-darkgreen mb-2 font-medium md:text-xl text-lg underline"
                  href="/goodplace-beleidsplan.pdf"
                  target="_blank"
                >
                  Beleidsplan
                </a>
              </li>
              <li>
                <a
                  className="text-darkgreen mb-2 font-medium md:text-xl text-lg underline"
                  href="/goodplace-financien.pdf"
                  target="_blank"
                >
                  Financieel overzicht
                </a>
              </li>
              <li>
                <a
                  className="text-darkgreen mb-2 font-medium md:text-xl text-lg underline"
                  href="/goodplace-begroting.pdf"
                  target="_blank"
                >
                  Begroting
                </a>
              </li>
              <li>
                <a
                  className="text-darkgreen mb-2 font-medium md:text-xl text-lg underline"
                  href="/goodplace-jaarrekening-2023.pdf"
                  target="_blank"
                >
                  Jaarrekening 2023
                </a>
              </li>
              <li>
                <a
                  className="text-darkgreen mb-2 font-medium md:text-xl text-lg underline"
                  href="/goodplace-bestuur.pdf"
                  target="_blank"
                >
                  Hoofd- & nevenfuncties bestuurders
                </a>
              </li>
              <li>
                <a
                  className="text-darkgreen mb-2 font-medium md:text-xl text-lg underline"
                  href="/goodplace-statuten.pdf"
                  target="_blank"
                >
                  Statuten
                </a>
              </li>
            </ul>
            <br />
            <p className="text-darkgreen mb-2 font-medium md:text-xl text-lg md:text-justify">
              <strong>
                Steun Goodplace.Foundation met een donatie en help ons platform
                groeien! Liever op een andere manier bijdragen? Geef ons
                feedback of vertel anderen over ons.
              </strong>
            </p>
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
