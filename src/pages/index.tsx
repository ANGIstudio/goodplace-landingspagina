import { NextPage } from 'next';
import Image from 'next/image';

import applestore from '../assets/apple-store-badge.svg';
import googleplay from '../assets/google-play-badge.png';
import handmoney from '../assets/handmoney.svg';
import handphone from '../assets/handphone.svg';
import handworld from '../assets/handworld.svg';
import icons from '../assets/icons.svg';
import ifaw from '../assets/ifaw.svg';
import justdiggit from '../assets/justdiggit.svg';
import oceancleanup from '../assets/oceancleanup.svg';
import phonewithpeople from '../assets/phonewithpeople.svg';
import savechildsheart from '../assets/savechildsheart.svg';
import sunday from '../assets/sunday.svg';
import tjommie from '../assets/tjommie.svg';
import wwf from '../assets/wwf.svg';
import { Brands } from '../components/Brands/Brands';
import { ContentBlock } from '../components/ContentBlock/ContentBlock';
import { Hero } from '../components/Hero/Hero';
import { Section } from '../components/Section/Section';
import { Wrapper } from '../components/Wrapper/Wrapper';
import { Base } from '../templates/Base';

interface UspImages {
  title: string;
  description: string;
  image: string;
}

const Index: NextPage = () => {
  const uspImages: UspImages[] = [
    {
      title: 'Geven wanneer jij wilt',
      image: handmoney,
      description:
        'Doneer vrijblijvend wanneer en hoeveel jij wilt aan goede doelen.',
    },
    {
      title: 'Jij blijft anoniem',
      image: handphone,
      description:
        'Jouw donaties blijven anoniem, dus opeens gebeld worden gaat je zeker niet overkomen.',
    },
    {
      title: 'Zicht op je impact',
      image: handworld,
      description:
        'Blijf op de hoogte van de mooie dingen die goede doelen realiseren.',
    },
  ];

  const brandItems = [
    { id: '1', href: '#', src: ifaw },
    { id: '2', href: '#', src: wwf },
    { id: '3', href: '#', src: oceancleanup },
    { id: '4', href: '#', src: justdiggit },
    { id: '5', href: '#', src: savechildsheart },
    { id: '6', href: '#', src: sunday },
    { id: '7', href: '#', src: tjommie },
  ];

  return (
    <Base>
      <Wrapper>
        <Hero />
      </Wrapper>

      <Wrapper>
        <Brands brandItems={brandItems} />
      </Wrapper>

      <Section bgColor="primary">
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
                <div className="m-auto max-w-xs" key={usp.title}>
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
          <ContentBlock image="lifesavers" imageFirst>
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
              wordt met je vrienden delen.{' '}
              <i>Happiness is sweetest when shared.</i>
            </p>
          </ContentBlock>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <ContentBlock image="phones" imageFirst={false}>
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
              <Image width={408} height={81} alt={icons} src={icons} />
            </div>
          </ContentBlock>
        </Wrapper>
      </Section>

      <Section bgColor="primary">
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

      <Section bgColor="secondary" noPaddingBottom>
        <Wrapper>
          <div className="text-center">
            <h2 className="mb-4 text-darkgreen font-bold max-w-2xl m-auto">
              Doe je mee met Goodplace’s <i>positive movement?</i>
            </h2>
            <div className="mb-8">
              <Image
                width={100}
                height={40}
                alt="googleplay"
                src={googleplay}
              />
              <Image
                width={100}
                height={40}
                alt="apple-store"
                src={applestore}
              />
            </div>
            <Image alt="telephone" src={phonewithpeople} />
          </div>
        </Wrapper>
      </Section>
    </Base>
  );
};

export default Index;
