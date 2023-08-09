import React from 'react';

import { NextPage } from 'next';

import { Brands } from '../components/Brands/Brands';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { brandItems } from '../data/data';
import { Base } from '../templates/Base';

const Charities: NextPage = () => {
  return (
    <Base>
      <Section>
        <Wrapper>
          <div className="md:text-center">
            <Brands brandItems={brandItems} />
          </div>
        </Wrapper>
      </Section>

      <Section bgColor="lightgreen">
        <Wrapper>
          <div className="text-center text-darkgreen">
            <div className="mb-8 md:mb-16 max-w-2xl m-auto">
              <h1 className="font-black mb-8 text-5xl">
                Doneren aan Goede Doelen met Goodplace.foundation
              </h1>
              <p>
                Goede doelen spelen een belangrijke rol in onze samenleving. Ze
                zijn essentieel om hulp en ondersteuning te geven aan mensen en
                natuur in nood. Het doel van Goodplace Foundation is om goede
                doelen organisaties te ondersteunen. Dit doen wij door doneren
                makkelijk, contractvrij en flexibel te maken. Met de
                Goodplace.foundation app maken we samen een positieve impact op
                de wereld.
              </p>
              <h2 className="font-bold mb-4 mt-8 text-3xl">
                Doneren moet makkelijk en flexibel zijn!
              </h2>
              <p>
                Met de Goodplace.foundation app is doneren aan goede doelen nog
                nooit zo makkelijk geweest. Alles kan vanuit een app. Een
                account aanmaken is in minder dan een minuut gedaan. Vervolgens
                kun je eenvoudig een donatie doen aan het goede doel van jouw
                keuze. Het fijne van alles in een app te hebben, is dat je kunt
                doneren waar en wanneer jij wilt! Of je nu thuis bent of
                onderweg, je kunt altijd een donatie doen via de app. Je hoeft
                alleen een goed doel te kiezen en de hoogte van je donatie.
              </p>
              <h3 className="font-bold mb-4 mt-8 text-xl">
                Doneren aan goede doelen zonder verplichtingen
              </h3>
              <p>
                Geen lange, stilzwijgende contracten of verplichtingen. Met de
                Goodplace.foundation app hoef je geen langdurige contracten te
                tekenen of verplichtingen aan te gaan. Je kunt op elk moment
                stoppen met doneren of je donatiebedrag aanpassen. Of simpeler:
                eenmalig een donatie doen. Goodplace Foundation geeft je de
                vrijheid om te doneren op een manier die voor jou het beste
                werkt. P.s. We gebruiken je gegevens niet om je lastig te vallen
                of meer te doneren of delen het ook niet met derde partijen. Je
                gegevens zijn veilig bij ons!
              </p>
              <h2 className="font-bold mb-4 mt-8 text-3xl">
                Voor en door goede doelen
              </h2>
              <p>
                Goodplace is een stichting en heeft dus geen winstoogmerk. Zo
                ontvangt het bestuur geen salaris, krijgt Goodplace kortingen
                via partnerships en bestaat ons team grotendeels uit
                vrijwilligers. Zo gaat een zo groot mogelijk deel van jouw
                donatie naar de goede doel van jouw keuze, zodat zij het geld
                naar eigen inzicht kunnen besteden.
              </p>
              <h3 className="font-bold mb-4 mt-8 text-xl">Meetbare impact</h3>
              <p>
                Met de Goodplace.foundation app kun je doneren waar, wanneer en
                hoeveel je maar wilt. De app biedt een breed scala aan goede
                doelen waaruit je kunt kiezen, waaronder organisaties die zich
                richten op hulp voor kinderen in nood, klimaatverandering en
                oceanen behoud. Door te doneren aan goede doelen, draag je bij
                aan een betere wereld voor iedereen. Download de
                Goodplace.foundation app vandaag nog en begin met doneren aan
                het goede doel van jouw keuze.
              </p>
            </div>
          </div>
        </Wrapper>
      </Section>
    </Base>
  );
};

export default Charities;
