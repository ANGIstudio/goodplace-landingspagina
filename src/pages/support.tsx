import React from 'react';

import { NextPage } from 'next';
import Link from 'next/link';

import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const Support: NextPage = () => {
  return (
    <Base>
      <Section bgColor="lightbeige">
        <Wrapper>
          <div className="md:w-2/3">
            <h3 className="break-words mb-4">
              <strong>Veelgestelde vragen</strong>
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="mt-4">
                  <strong>Wat is het verdienmodel van Goodplace?</strong>
                </h4>
                <p>
                  Goodplace is een stichting en bestaat uit een{' '}
                  <Link href="/about/">
                    <a className="underline">klein team</a>
                  </Link>{' '}
                  van betrokken ondernemers, die dit niet doen voor eigen
                  verdiensten. Er is dus geen winstoogmerk en het bestuur
                  ontvangt geen salaris. De Goodplace app is ontwikkeld met
                  donaties van diverse betrokkenen.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  <strong>Niks aan de Goodplace strijkstok</strong>
                </h4>
                <p>
                  Via Goodplace gaat jouw volledige donatie naar het goede doel,
                  zodat zij het geld zo goed naar eigen invulling kunnen
                  besteden. Goodplace is een stichting en heeft dus geen
                  winstoogmerk. Zo ontvangt het bestuur geen salaris, krijgt
                  Goodplace kortingen via partnerships en bestaat ons team
                  grotendeels uit vrijwilligers.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  <strong>Voor en door goede doelen</strong>
                </h4>
                <p>
                  Om de Goodplace app in de lucht te houden en te kunnen
                  doorontwikkelen, vragen wij een bijdrage van goede doelen om
                  gebruik te maken van ons platform. Goede doelen geven geld uit
                  aan marketing om nieuwe donateurs te werven (denk aan
                  huis-aan-huis post, social media ads, etc). Wanneer ze onze
                  app hiervoor willen gebruiken, vragen we ze een bijdrage om
                  ons platform te ondersteunen. Deze bijdrage is 5% van het
                  totaalbedrag aan donaties dat het betreffende goede doel via
                  ons platform ontvangt.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  <strong>De weg van jouw donatie</strong>
                </h4>
                <p>
                  Als je via onze app doneert gaat jouw donatie direct naar het
                  betalingsaccount van het goede doel. Op dit moment is Mollie
                  onze betalingspartner, wat betekent dat het geld vanuit jouw
                  bankrekening door Mollie direct naar het account van de goede
                  doelen wordt gestort. Vervolgens heeft het goede doel zelf de
                  vrijheid om te bepalen waar ze het geld aan besteden.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  <strong>Welke goede doelen doen er mee?</strong>
                </h4>
                <p>
                  Vanaf de start doen er 15 goede doelen mee. Dit zijn zowel
                  kleine als grote goede doelen uit de segmenten Natuur,
                  Gezondheid en Hulp (zie ook onderaan de website). Maar er gaan
                  nog veel meer doelen meedoen!
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  <strong>Hoe kan ik mij aanmelden als goed doel?</strong>
                </h4>
                <p>
                  Goodplace breidt graag de goede doelen in de app uit! Meld je{' '}
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLScNLkencHjnk8uUlSFKGMSRrgloTKy6MD-IeLMrKb76S8gLkg/viewform?vc=0&c=0&w=1&flr=0">
                    <a className="underline">hier</a>
                  </Link>{' '}
                  aan als goed doel.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  <strong>Kan ik ook eenmalig een donatie doen?</strong>
                </h4>
                <p>
                  De app is zo gemaakt dat je altijd met één swipe een eenmalige
                  donatie kan doen. Het is natuurlijk ook mogelijk om
                  maandelijks te doneren. Ook dit regel je met één klik.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  <strong>
                    Kan ik makkelijk stoppen met doneren als ik dat wil?
                  </strong>
                </h4>
                <p>
                  Je kunt altijd onmiddellijk stoppen met doneren. Met één klik
                  stop je bijvoorbeeld een periodieke donatie.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  <strong>Waar kan ik mijn periodieke donaties stoppen?</strong>
                </h4>
                <p>
                  Onder de knop “donaties” rechtsonder in de app straat een
                  overzicht van je periodieke giften. Klik op de drie puntjes
                  rechts van de betreffende donatie en bevestig je annulering.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  <strong>
                    Hoe kan ik een donatie laten terugstorten als ik me bedenk?
                  </strong>
                </h4>
                <p>
                  Als je van gedachten verandert en je wil je donatie graag
                  teruggestort krijgen, kan dat natuurlijk. Neem dan binnen 8
                  weken contact met ons op via{' '}
                  <a
                    href="mailto:team@goodplace.foundation"
                    className="underline"
                  >
                    team@goodplace.foundation
                  </a>{' '}
                  en we gaan het voor je regelen.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  <strong>
                    Worden mijn persoonsgegevens doorgegeven aan derden?
                  </strong>
                </h4>
                <p>
                  Bij Goodplace stellen we de gever centraal. Onderdeel daarvan
                  is dat we zorgvuldig met jullie gegevens omgaan! Deze worden
                  niet aan derden ter beschikking gesteld. Eventuele
                  communicatie van de goede doelen loopt dus altijd via de
                  Goodplace app, zodat jij het kan lezen wanneer jij dat wil.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  <strong>
                    De (magic)-link werkt niet om in te loggen of te
                    registreren. Wat moet ik doen?
                  </strong>
                </h4>
                <p>
                  Als je opnieuw wilt inloggen of registreren krijg je een link
                  via je email. Het is belangrijk dat je die email opent op de
                  telefoon waarop je de app hebt geïnstalleerd. Als je dan op de
                  link klikt zal je direct naar de app gaan en kan je gebruik
                  maken van alle mogelijkheden. De link is een beperkte tijd
                  geldig. Als de link is verlopen, kan je een nieuwe aanvragen
                  via de app.
                  <br /> <br />
                  Lukt dit toch niet neem dan contact op met onze support
                  afdeling via{' '}
                  <a
                    href="mailto:team@goodplace.foundation"
                    className="underline"
                  >
                    team@goodplace.foundation
                  </a>
                  .
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  <strong>
                    Hoe kan ik de donateurs (vrienden) van mijn aangemaakte
                    actie voor het delen van een update of resultaat, opnieuw
                    bereiken?
                  </strong>
                </h4>
                <p>
                  In de Goodplace app kun je zelf verschillende acties aanmaken
                  om geld op te halen. Stel je gaat een marathon lopen en je
                  hebt daarvoor een actie aangemaakt in onze app. Dan is het
                  natuurlijk leuk om achteraf aan je donateurs te laten weten,
                  dat je de marathon hebt gehaald! Hoe kun je dat doen? Als je
                  eenmaal een actie hebt aangemaakt, kun je de actie later
                  aanpassen. Dit doe je door een aanvullende tekst toe te voegen
                  en eventueel een nieuwe foto te uploaden (jij die de finish
                  van de marathon haalt). Als je de aangepaste actie vervolgens
                  opslaat, komt het bij alle donateurs van jouw actie terecht.
                  Ze zien jouw update dan bovenaan hun tijdlijn.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  <strong>Staat jouw vraag er niet tussen?</strong>
                </h4>
                <p>
                  Neem neem dan contact op met onze support afdeling via{' '}
                  <a
                    className="underline"
                    href="mailto:team@goodplace.foundation"
                  >
                    team@goodplace.foundation
                  </a>
                  .
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
