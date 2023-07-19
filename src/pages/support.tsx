import React from 'react';

import { NextPage } from 'next';
import Link from 'next/link';

import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

const Support: NextPage = () => {
  return (
    <Base>
      <Section bgColor="white">
        <Wrapper>

          <div className="text-darkgreen max-w-5xl m-auto">
            <div className="space-y-8">
            <div>
                <h4 className="text-green text-2xl">Veelgestelde vragen
                </h4>
                <h4 className="mt-4 mb-4">
                  Waarom Goodplace?
                </h4>
                <p>
                Er zijn veel mensen die graag goede doelen willen steunen maar dit nu niet doen, bijvoorbeeld omdat
                het opzeggen van terugkerende donaties bij goede doelen lastig is, omdat ze geen ongewenste telefoontjes en post willen krijgen, of
                omdat ze niet te veel willen betalen voor marketing (betaalde deurcollectanten, advertentiekosten etc. kunnen oplopen tot meer dan 10% van de donatie-opbrengst).

                Er is daardoor onbenut donatie-geld bij mensen die we graag willen activeren. Zo kunnen we  de wereld gezamenlijk beter maken! <br /> <br />

                Met de stichting Goodplace willen we filantropie stimuleren en dit doen we door de gever centraal te stellen. Er blijkt vraag naar ėėn centrale plek waar je kunt doneren zonder gedoe: een overzichtelijke app waarmee je flexibel en vrijblijvend geld kunt geven aan goede doelen.

                </p>
              </div>

              <div>
                <h4 className="mt-4 mb-4">
                  Hoe werkt de Goodplace app?
                </h4>
                <p>
                Als je via onze app doneert gaat jouw donatie direct naar het betalingsaccount van het goede doel.
                Op dit moment is Mollie onze betalingspartner, wat betekent dat het geld vanuit jouw bankrekening door
                Mollie direct naar het account van de goede doelen wordt gestort. Vervolgens heeft het goede doel zelf de
                vrijheid om te bepalen waar ze het geld aan besteden. Om gebruik te kunnen maken van Goodplace hebben
                wij alleen je naam, emailadres en machtiging nodig.
                </p>
              </div>

              <div>
                <h4 className="mt-4 mb-4">
                  Wat is het verdienmodel van Goodplace?
                </h4>
                <p>
                  Goodplace is een stichting en bestaat uit een klein team van betrokken ondernemers, die dit niet doen voor eigen verdiensten. Er is dus geen commercieel winstoogmerk en het bestuur ontvangt geen salaris.
                  Om Goodplace mogelijk te maken rekenen we nu maximaal 5% van het donatiebedrag. Dit percentage verlagen we zodra we genoeg gebruikers hebben om kostendekkend te kunnen zijn. Hoe meer donateurs we hebben hoe lager dit percentage kan worden.Ook zijn we naast onze partners Goede Doelen Nederland, Warchild en Kika ook in gesprek met het bedrijfsleven om samen Goodplace tot een succes te maken.
                  Ons eerste financiële jaarverslag is vanaf september 2023 op deze site te vinden.

                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  Welke goede doelen doen er mee?
                </h4>
                <p>
                  Vanaf de start werken we intensief samen met partners Warchild & Kika en inmiddels ook met branche organisatie Goede Doelen Nederland en Geef.nl. Inmiddels doen er 21 goede doelen mee. Dit zijn zowel kleine als grote goede doelen met ANBI en/of CBF status. Er volgen er natuurlijk nog meer…
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  Hoe meld ik mij aan als goed doel?
                </h4>
                <p>
                  Goodplace breidt graag de goede doelen in de app uit! Meld je {' '}
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLScNLkencHjnk8uUlSFKGMSRrgloTKy6MD-IeLMrKb76S8gLkg/viewform?vc=0&c=0&w=1&flr=0">
                    <a className="underline">hier</a>
                  </Link>{' '}
                  aan als goed doel.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  Kan ik ook eenmalig een donatie doen?
                </h4>
                <p>
                  De app is zo gemaakt dat je altijd eenvoudig een eenmalige donatie kan doen. Het is natuurlijk ook mogelijk om maandelijks te doneren. Ook dit regel je met één klik.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  Kan ik makkelijk stoppen met doneren als ik dat wil?
                </h4>
                <p>
                  Je kunt altijd onmiddellijk stoppen met doneren. Met één klik stop je bijvoorbeeld een periodieke donatie.

                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  Hoe kan ik mijn donatie stopzetten?
                </h4>
                <p>
                  Onder “donaties” in het menu in de app straat een overzicht van je giften. Klik op de drie puntjes rechts van de betreffende donatie en bevestig je annulering.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  Kan ik een donatie ook laten terugstorten als ik me bedenk?
                </h4>
                <p>
                  Als je van gedachten verandert en je wil je donatie graag teruggestort krijgen, kan dat natuurlijk. Neem dan binnen 8 weken contact met ons op via team@goodplace.foundation en we gaan het voor je regelen.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  Worden mijn persoonsgegevens doorgegeven aan derden?
                </h4>
                <p>
                  Bij Goodplace stellen we de gever centraal. Onderdeel daarvan is dat we zorgvuldig met jullie gegevens omgaan! Deze worden niet aan derden ter beschikking gesteld. Eventuele communicatie van de goede doelen loopt dus altijd via de Goodplace app, zodat jij het kan lezen wanneer jij dat wil.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  De (magic)-link werkt niet om in te loggen of te registreren. Wat moet ik doen?
                </h4>
                <p>
                  Als je opnieuw wilt inloggen of registreren krijg je een link via je email. Het is belangrijk dat je die email opent op de telefoon waarop je de app hebt geïnstalleerd. Als je dan op de link klikt zal je direct naar de app gaan en kan je gebruik maken van alle mogelijkheden. De link is een beperkte tijd geldig. Als de link is verlopen, kan je een nieuwe aanvragen via de app.
                  Lukt dit toch niet neem dan contact op met onze support afdeling via team@goodplace.foundation.
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                Hoe kan ik bijdragen aan het succes van Goodplace?
                </h4>
                <p>
                  Bij Goodplace staat de gever staat centraal. Daarom werken we regelmatig samen met donateurs om concepten te toetsen en feedback & ideeen te verzamelen. Stuur een mail naar team@goodplace.com als je input hebt en/of onderdeel wilt uitmaken van de testgroep. Dan hoor je binnenkort van ons!
                </p>
              </div>
              <div>
                <h4 className="mt-4">
                  Staat jouw vraag er niet tussen?
                </h4>
                <p>
                  Neem dan contact op met onze support afdeling via team@goodplace.foundation.
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
