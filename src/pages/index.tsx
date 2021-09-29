import { NextPage } from 'next';
import Image from 'next/image';

import applestore from '../assets/apple-store-badge.png';
import contact from '../assets/contact.png';
import googleplay from '../assets/google-play-badge.png';
import icons from '../assets/icons.png';
import ifaw from '../assets/ifaw.png';
import impact from '../assets/impact.png';
import justdiggit from '../assets/justdiggit.png';
import oceancleanup from '../assets/oceancleanup.png';
import oneplace from '../assets/oneplace.png';
import saveachildsheart from '../assets/saveachildsheart.png';
import sunday from '../assets/sunday.png';
import time from '../assets/time.png';
import tjommie from '../assets/tjommie.png';
import wwf from '../assets/wwf.png';
import { Brands } from '../components/Brands/Brands';
import { ContentBlock } from '../components/ContentBlock/ContentBlock';
import { Hero } from '../components/Hero/Hero';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

interface UspImages {
  title: string;
  description: string;
  image: StaticImageData;
}

const Index: NextPage = () => {
  const uspImages: UspImages[] = [
    {
      title: 'Geven wanneer jij wilt',
      image: time,
      description:
        'Doneer eenvoudig en  vrijblijvend aan de doelen die jij belangrijk vindt.',
    },
    {
      title: 'Geen ongewenst contact',
      image: contact,
      description:
        'Geen ongewenste telefoontjes, post en e-mails van de doelen die je steunt.',
    },
    {
      title: 'Alles op 1 plek',
      image: oneplace,
      description:
        'Eenvoudig overzicht in je donaties aan verschillende goede doelen.',
    },
    {
      title: 'Zicht op je impact',
      image: impact,
      description:
        'Via de app ontvang je positieve berichten van de resultaten van jouw donaties.',
    },
  ];

  const brandItems = [
    { id: '1', href: '#', src: oceancleanup },
    { id: '2', href: '#', src: wwf },
    { id: '3', href: '#', src: justdiggit },
    { id: '4', href: '#', src: ifaw },
    { id: '5', href: '#', src: sunday },
    { id: '6', href: '#', src: tjommie },
    { id: '7', href: '#', src: saveachildsheart },
  ];

  return (
    <Base>
      <div className="bg-hero">
        <Wrapper>
          <Hero />
        </Wrapper>
      </div>

      <Wrapper>
        <Brands brandItems={brandItems} />
      </Wrapper>

      <Section bgColor="lightgreen">
        <Wrapper>
          <div className="text-center">
            <div className="mb-16 max-w-lg m-auto">
              <h3 className="mb-4">
                <strong>
                  Samen zorgen we voor een Goodplace op deze aarde
                </strong>
              </h3>
              <p>
                Goodplace is een <i>positive movement</i>. Een plek waar je als
                gever op een makkelijke en leuke manier goede doelen kan steunen
                en positieve updates krijgt.
              </p>
            </div>
            <div className="space-y-8 md:flex md:space-y-0 justify-around items-center">
              {uspImages.map((usp) => (
                <div
                  className="m-auto max-w-xs md:w-1/2 lg:w-1/4"
                  key={usp.title}
                >
                  <div className="mb-3">
                    <Image alt={usp.title} src={usp.image} />
                  </div>
                  <p>
                    <strong>{usp.title}</strong>
                  </p>
                  <p>{usp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <ContentBlock image="sharingiscaring" imageFirst>
            <h3 className="mb-4">
              <strong>Sharing is caring</strong>
            </h3>
            <p className="mb-8">
              Je favoriete goede doel nóg meer steunen? Je kunt eenvoudig je
              vrienden uitnodigen om ook een kleine bijdrage te doneren. In de
              app zie je in één overzicht wat jullie gezamenlijke impact is
              geweest. Laat dat balletje maar rollen!
            </p>
            <p>
              Je kunt natuurlijk ook een post waar je ontzettend vrolijk van
              wordt met je vrienden delen.
              <i>Happiness is sweetest when shared.</i>
            </p>
          </ContentBlock>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <ContentBlock image="phoneswithtiger" imageFirst={false}>
            <h3 className="mb-4">
              <strong>Snel en makkelijk doneren</strong>
            </h3>
            <p className="mb-8">
              Doelen steunen die jij belangrijk vind moet eenvoudig zijn. Daarom
              kun je Goodplace koppelen aan je favoriete betaal methode. Of het
              nou gaat om eenmalig €15,- of juist een maandelijkse bijdrage van
              €2,-. Het kan! En wanneer je toch voor een maandelijks bijdrage
              gaat, kan je dat ook simpelweg met 1 druk op de knop stopzetten.
            </p>
            <p className="mb-10">
              <i>Eigenlijk wel zo vanzelfsprekend toch?</i>
            </p>
            <div>
              <Image width={408} height={81} alt="icons" src={icons} />
            </div>
          </ContentBlock>
        </Wrapper>
      </Section>

      <Section bgColor="lightgreen">
        <Wrapper>
          <div className="text-center">
            <div className="mb-16 max-w-lg m-auto">
              <h3 className="mb-4">
                <strong>
                  Prachtige goede doelen met nog mooiere doelstellingen
                </strong>
              </h3>
              <p className="mb-3">
                Onze missie is even uitdagend als helder: het creëren van een
                wereld waar mens en natuur floreren door het activeren van
                miljoenen mensen. Goodplace heeft met zorg goede doelen
                geselecteerd en breid deze graag uit. Weet jij een geweldig doel
                dat zich bij Goodplace moet aansluiten?
              </p>
              <a
                className="text-darkgreen hover:underline text-lg font-medium"
                href="#"
              >
                Aansluiten bij Goodplace ❯
              </a>
            </div>
            <Brands brandItems={brandItems} />
          </div>
        </Wrapper>
      </Section>

      <Section bgColor="beige" noPaddingBottom>
        <Wrapper>
          <div className="text-center">
            <h2 className="mb-4 text-darkgreen font-bold max-w-2xl m-auto">
              Doe je mee met Goodplace’s <i>positive movement?</i>
            </h2>
            <div className="mb-8 flex space-x-3">
              <div>
                <Image
                  height={41}
                  width={141}
                  alt="googleplay"
                  src={googleplay}
                />
              </div>
              <div>
                <Image
                  width={125}
                  height={41}
                  alt="apple-store"
                  src={applestore}
                />
              </div>
            </div>
            {/* <Image alt="telephone" src={} /> */}
          </div>
        </Wrapper>
      </Section>
    </Base>
  );
};

export default Index;
