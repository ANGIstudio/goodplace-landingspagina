import React from 'react';

import { NextPage } from 'next';

import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const Support: NextPage = () => {
  return (
    <Base>
      <Section bgColor="lightgreen">
        <Wrapper>
          <div className="text-darkgreen max-w-3xl m-auto">
            <div className="space-y-8">
              <div>
                <h2 className="mb-8 text-darkgreen font-black md:text-5xl text-4xl">
                  Veelgestelde vragen
                </h2>
                <h4 className="mt-10 mb-1 md:text-3xl text-2xl md:text-3xl text-2xl">
                  Waarom Goodplace?
                </h4>
                <p className="md:text-xl text-lg">
                  <strong>
                    Goodplace is er om drempels die mensen ervaren bij doneren
                    weg te nemen: doneren moet toch gewoon kunnen zonder gedoe?
                  </strong>
                </p>
                <p className="text-lg mt-4">
                  Veel mensen willen wel doneren aan goede doelen, maar doen dit
                  nu niet. Bijvoorbeeld omdat het soms lastig is om donaties
                  weer op te zeggen, omdat ze geen ongewenste telefoontjes en
                  post willen krijgen, of omdat ze twijfelen of het geld wel
                  goed terecht komt. Iedereen moet op zijn eigen manier kunnen
                  geven aan wat zij zelf belangrijk vinden. Zo kunnen we de
                  wereld gezamenlijk beter maken!
                </p>
                <h4 className="mt-10 mb-1 md:text-3xl text-2xl">
                  Waar komt mijn donatie terecht?
                </h4>
                <p className="md:text-xl text-lg">
                  <strong>
                    Een donatie bij Goodplace gaat direct naar het
                    betalingsaccount van het goede doel, en komt dus niet eerst
                    op een tussenrekening bij ons terecht.
                  </strong>
                </p>
                <p className="text-lg mt-4">
                  Op dit moment is Mollie onze betalingspartner, wat betekent
                  dat het geld vanuit jouw bankrekening door Mollie direct naar
                  het account van de goede doelen wordt gestort. Vervolgens
                  heeft het goede doel zelf de vrijheid om te bepalen waar ze
                  het geld aan besteden.
                </p>
                <h4 className="mt-10 mb-1 md:text-3xl text-2xl">
                  Wat is het verdienmodel van Goodplace?
                </h4>
                <p className="md:text-xl text-lg">
                  <strong>
                    Op dit moment ontvangt Goodplace 5% van elke donatie. Dit
                    betekent dat van elke 10 euro die jij doneert, 50 cent bij
                    ons terecht komt om onze kosten te dekken.
                  </strong>
                </p>
                <p className="text-lg mt-4">
                  Goodplace is een stichting zonder winstoogmerk en bestaat uit
                  een klein team van betrokken ondernemers. Meer dan de helft
                  van het founders team zet zich op dit moment vrijwillig in
                  voor Goodplace. Er is geen commercieel winstoogmerk en het
                  bestuur ontvangt geen salaris.
                </p>
                <h4 className="mt-10 mb-1 md:text-3xl text-2xl">
                  Welke goede doelen mogen in de app?
                </h4>
                <p className="md:text-xl text-lg">
                  <strong>
                    Elk goed doel met een CBF keurmerk of ANBI status mag zich
                    aansluiten bij Goodplace. Wij richten ons dus niet alleen op
                    de grote goede doelen, maar ook kleine locale iniatieven
                    zijn welkom.
                  </strong>
                </p>
                <p className="text-lg mt-4">
                  Wij zijn continu bezig met het uitbreiden van ons aanbod aan
                  goede doelen. Heb jij een suggestie voor een nieuw goed doel?
                  <a
                    className="text-darkgreen underline"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScNLkencHjnk8uUlSFKGMSRrgloTKy6MD-IeLMrKb76S8gLkg/viewform?vc=0&c=0&w=1&flr=0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Geef het aan ons door!
                  </a>
                </p>
                <h4 className="mt-10 mb-1 md:text-3xl text-2xl">
                  Kan ik ook eenmalige donaties doen?
                </h4>
                <p className="md:text-xl text-lg">
                  <strong>Ja, je kunt altijd eenmalig doneren.</strong>
                </p>
                <p className="text-lg mt-4">
                  De app is zo gemaakt dat je altijd eenvoudig een eenmalige
                  donatie kan doen. Het is natuurlijk ook mogelijk om
                  maandelijks te doneren. Ook dit regel je met één klik.
                </p>
                <h4 className="mt-10 mb-1 md:text-3xl text-2xl">
                  Kan ik makkelijk stoppen met doneren als ik dat wil?
                </h4>
                <p className="md:text-xl text-lg">
                  <strong>
                    Je kunt altijd onmiddellijk stoppen met doneren.
                  </strong>
                </p>
                <p className="text-lg mt-4">
                  Met één klik stop je bijvoorbeeld een periodieke donatie.
                </p>
                <h4 className="mt-10 mb-1 md:text-3xl text-2xl">
                  Hoe kan ik mijn donatie stopzetten?
                </h4>
                <p className="md:text-xl text-lg">
                  <strong>
                    Stopzetten van een donatie kan gemakkelijk in de app.
                  </strong>
                </p>
                <p className="text-lg mt-4">
                  Onder “donaties” in het menu in de app vind je een overzicht
                  van je giften. Door op het kruisje rechtsboven de betreffende
                  donatie te klikken, stop je je donatie per direct.
                </p>
                <h4 className="mt-10 mb-1 md:text-3xl text-2xl">
                  Kan ik een donatie ook laten terugstorten als ik me bedenk?
                </h4>
                <p className="md:text-xl text-lg">
                  <strong>
                    Ja, een donatie kun je ook laten terugstorten.
                  </strong>
                </p>
                <p className="text-lg mt-4">
                  Als je van gedachten verandert en je wil je donatie graag
                  teruggestort krijgen, kan dat natuurlijk. Neem dan binnen 8
                  weken contact met ons op via team@goodplace.foundation en we
                  gaan het voor je regelen.
                </p>
                <h4 className="mt-10 mb-1 md:text-3xl text-2xl">
                  Worden mijn persoonsgegevens doorgegeven aan derden?
                </h4>
                <p className="md:text-xl text-lg">
                  <strong>Nee, alle data blijft bij ons.</strong>
                </p>
                <p className="text-lg mt-4">
                  Bij Goodplace stellen we de gever centraal. Onderdeel daarvan
                  is dat we zorgvuldig met jullie gegevens omgaan! Deze worden
                  niet aan derden ter beschikking gesteld. Eventuele
                  communicatie vanuit goede doelen loopt dus altijd via
                  Goodplace.
                </p>
                <h4 className="mt-10 mb-1 md:text-3xl text-2xl">
                  De (magic)-link werkt niet om in te loggen of te registreren.
                  Wat moet ik doen?
                </h4>
                <p className="md:text-xl text-lg">
                  <strong>
                    Zorg ervoor dat je de link altijd opent via de telefoon
                    waarop je de app hebt geïnstalleerd.
                  </strong>
                </p>
                <p className="text-lg mt-4">
                  Als je opnieuw wilt inloggen of registreren krijg je een link
                  via je email. Deze link werkt alleen op de telefoon waarop je
                  de app hebt geïnstalleerd. De link is een beperkte tijd
                  geldig. Als de link is verlopen, kan je een nieuwe aanvragen
                  via de app. Lukt dit toch niet neem dan contact op met onze
                  support afdeling via team@goodplace.foundation.
                </p>
                <h4 className="mt-10 mb-1 md:text-3xl text-2xl">
                  Hoe kan ik bijdragen aan het succes van Goodplace?
                </h4>
                <p className="md:text-xl text-lg">
                  <strong>
                    Deel je feedback of meld je aan voor onze test- of
                    focusgroep!
                  </strong>
                </p>
                <p className="text-lg mt-4">
                  Wij zijn altijd op zoek naar waardevolle feedback, zowel
                  vanuit donateurs als goede doelen.
                  <a
                    className="text-darkgreen underline"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeL05GNqomTjzLAj1Jtb2Ey8CwvHVThYUKj9QfPGIfqpclEZQ/viewform?usp=sf_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Laat hier een bericht achter
                  </a>
                  , of mail naar team@goodplace.foundation.
                </p>
                <h4 className="mt-10 mb-1 md:text-3xl text-2xl">
                  Staat jouw vraag er niet tussen?
                </h4>
                <p className="md:text-xl text-lg">
                  Neem dan contact op met onze support afdeling via
                  <strong> team@goodplace.foundation</strong>.
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </Section>
    </Base>
  );
};

export default Support;
