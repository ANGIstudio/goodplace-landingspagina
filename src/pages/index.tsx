import { NextPage } from 'next';
import Image from 'next/image';

import applestore from '../assets/apple-store-badge.png';
import contact from '../assets/contact.svg';
import googleplay from '../assets/google-play-badge.png';
import icons from '../assets/icons.png';
import ifaw from '../assets/ifaw.png';
import impact from '../assets/impact.svg';
import justdiggit from '../assets/justdiggit.png';
import moneyone from '../assets/money-one.svg';
import moneytwo from '../assets/money-two.svg';
import oceancleanup from '../assets/oceancleanup.png';
import oneplace from '../assets/oneplace.svg';
import phones from '../assets/phones.png';
import saveachildsheart from '../assets/saveachildsheart.png';
import sunday from '../assets/sunday.png';
import taxes from '../assets/taxes.svg';
import time from '../assets/time.svg';
import tjommie from '../assets/tjommie.png';
import wallet from '../assets/wallet.svg';
import wwf from '../assets/wwf.png';
import { Brands } from '../components/Brands/Brands';
import { ContentBlock } from '../components/ContentBlock/ContentBlock';
import { Hero } from '../components/Hero/Hero';
import { Section } from '../components/Section/Section';
import { Usp } from '../components/Usp/Usp';
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

  const howDoesItWorkUsp: UspImages[] = [
    {
      title: '100% naar het goede doel',
      image: moneyone,
      description:
        'Als je een donatie doet via Goodplace dan gaat het volledige bedrag regelrecht naar het goede doel.',
    },
    {
      title: 'Niks aan de Goodplace strijkstok',
      image: wallet,
      description:
        'Goodplace is een stichting, en heeft dus geen winstoogmerk. Met een start donatie van diverse betrokkenen is Goodplace ontwikkeld, en het bestuur ontvangt ook geen salaris.',
    },
    {
      title: 'Belastingvrij geven',
      image: taxes,
      description:
        'Je ontvangt jaarlijks een overzicht van al je donaties zodat je met belastingvoordeel kunt doneren. Afhankelijk van jouw inkomen is jouw totale donatie van dat jaar belasting aftrekbaar en betaal je dus minder inkomstenbelasting. ',
    },
    {
      title: 'Transparant over jaarcijfers',
      image: moneytwo,
      description:
        'Meer lezen over de financiering van Goodplace? Dat kan! Wij streven er naar om zo transparant mogelijk te zijn over onze financien. De jaarcijfers van Goodplace worden daarom jaarlijks op onze website gepubliceerd.',
    },
  ];

  const brandItems = [
    { id: '1', src: oceancleanup },
    { id: '2', src: wwf },
    { id: '3', src: justdiggit },
    { id: '4', src: ifaw },
    { id: '5', src: sunday },
    { id: '6', src: tjommie },
    { id: '7', src: saveachildsheart },
  ];

  return (
    <Base>
      <Section bgColor="lightbeige" noPaddingBottom noPaddingTop>
        <Wrapper>
          <div className="bg-hero">
            <Hero />
          </div>
        </Wrapper>
      </Section>

      <Wrapper>
        <Brands brandItems={brandItems} />
      </Wrapper>

      <Section bgColor="lightgreen">
        <Wrapper>
          <div className="text-center">
            <div className="mb-8 md:mb-16 max-w-lg m-auto">
              <h3 className="mb-4">
                <strong>
                  Samen zorgen we voor een Goodplace op deze aarde
                </strong>
              </h3>
              <p>
                Goodplace is een plek waar je als gever op een makkelijke en
                leuke manier goede doelen kan steunen en positieve updates
                krijgt.
              </p>
            </div>
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {uspImages.map((usp) => (
                <Usp key={usp.title} usp={usp} variant="primary" />
              ))}
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <ContentBlock image="sharingiscaring" imageFirst>
            <div className="max-w-lg">
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
                <i> Happiness is sweetest when shared.</i>
              </p>
            </div>
          </ContentBlock>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <ContentBlock image="phoneswithtiger" imageFirst={false}>
            <div className="max-w-lg">
              <h3 className="mb-4">
                <strong>Snel en makkelijk doneren</strong>
              </h3>
              <p className="mb-8">
                Doelen steunen die jij belangrijk vind moet eenvoudig zijn.
                Daarom kun je Goodplace koppelen aan je favoriete betaal
                methode. Of het nou gaat om eenmalig €15,- of juist een
                maandelijkse bijdrage van €2,-. Het kan! En wanneer je toch voor
                een maandelijks bijdrage gaat, kan je dat ook simpelweg met 1
                druk op de knop stopzetten.
              </p>
              <p className="mb-10">
                <i>Eigenlijk wel zo vanzelfsprekend toch?</i>
              </p>
              <div>
                <Image width={408} height={81} alt="icons" src={icons} />
              </div>
            </div>
          </ContentBlock>
        </Wrapper>
      </Section>

      <Section bgColor="lightgreen">
        <Wrapper>
          <div className="text-center">
            <div className="mb-8 md:mb-16 max-w-lg m-auto">
              <h3 className="mb-4">
                <strong>Hoe werkt geven via Goodplace precies?</strong>
              </h3>
              <p>
                Belangrijk dat jouw bijdrage aan een goed doel, ook echt daar
                terecht komt.
              </p>
            </div>
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
              {howDoesItWorkUsp.map((usp) => (
                <Usp key={usp.title} usp={usp} variant="secondary" />
              ))}
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <div className="text-center">
            <div className="mb-8 md:mb-16 max-w-lg m-auto">
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
                target="_blank"
              >
                Aansluiten bij Goodplace ❯
              </a>
            </div>
            <Brands brandItems={brandItems} />
          </div>
        </Wrapper>
      </Section>

      <Section bgColor="beige" noPaddingBottom bgImage="bg-people">
        <Wrapper>
          <div className="text-center overflow-hidden">
            <h2 className="mb-10 text-darkgreen font-bold max-w-2xl m-auto">
              Doe je mee met Goodplace?
            </h2>
            <div className="flex space-x-3 justify-center">
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
            <div className="mt-10 -mb-48">
              <Image src={phones} alt="phones" />
            </div>
          </div>
        </Wrapper>
      </Section>
    </Base>
  );
};

export default Index;
