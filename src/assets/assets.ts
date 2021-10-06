import cruyff from './brands/cruyff.png';
import ifaw from './brands/ifaw.png';
import justdiggit from './brands/justdiggit.png';
import kika from './brands/kika.png';
import klabu from './brands/klabu.png';
import mf from './brands/mf.png';
import oceancleanup from './brands/ocean.png';
import saveachildsheart from './brands/savechildsheart.png';
import stichtingaap from './brands/stichtingaap.png';
import sunday from './brands/sunday.png';
import tjommie from './brands/tjommie.png';
import vriendensophia from './brands/vriendensophia.png';
import warchild from './brands/warchild.png';
import wildeganzen from './brands/wildeganzen.png';
import wwf from './brands/wwf.png';
import facebook from './facebook.svg';
import gortemaker from './gortemaker.png';
import gottenbos from './gottenbos.png';
import instagram from './instagram.svg';
import peoplewithballoons from './peoplewithballoons.png';
import phoneswithtiger from './phoneswithtiger.png';
import sharingiscaring from './sharingiscaring.png';
import twitter from './twitter.svg';
import vandermarel from './vandermarel.png';
import vanoosten from './vanoosten.png';

export interface ContentImagesProps {
  [index: string]: StaticImageData | undefined;
}

export const contentImages: ContentImagesProps = {
  phoneswithtiger,
  peoplewithballoons,
  sharingiscaring,
};

export interface BrandsProps {
  brandItems: {
    id: string;
    src: StaticImageData;
  }[];
}

export const brandItems = [
  { id: '1', src: wwf },
  { id: '2', src: wildeganzen },
  { id: '3', src: sunday },
  { id: '4', src: vriendensophia },
  { id: '5', src: tjommie },
  { id: '6', src: warchild },
  { id: '7', src: oceancleanup },
  { id: '8', src: stichtingaap },
  { id: '9', src: mf },
  { id: '10', src: saveachildsheart },
  { id: '11', src: cruyff },
  { id: '12', src: justdiggit },
  { id: '13', src: kika },
  { id: '14', src: ifaw },
  { id: '15', src: klabu },
];

interface TeamMember {
  name: string;
  id: number;
  img: StaticImageData;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Frank Gottenbos',
    id: 1,
    img: gottenbos,
    description:
      'Shaper & Getting things done \n Founder Biners / Investeerder',
  },
  {
    name: 'Menno van der Marel',
    id: 2,
    img: vandermarel,
    description: `Impact maken met slimme innovaties \n Goede ideeën moeten echt een kans krijgen \n Entrepreneur / Founder Fox-IT`,
  },
  {
    name: 'Joni Uhlenbeck',
    id: 3,
    img: vanoosten,
    description:
      'Innovatieve en sociale ondernemer \n Altijd bezig met de wereld van morgen \n CEO De Roos Advocaten',
  },
  {
    name: 'Yvo Gortemaker',
    id: 4,
    img: gortemaker,
    description:
      'Digital Product Strategy, Entrepreneurship \n Founder Global Orange',
  },

  {
    name: 'Leopold van Oosten',
    id: 5,
    img: vanoosten,
    description:
      'UX, Tech, Strategy, Entrepreneurship \n Founder Amsterdam Standard',
  },
];

export interface SocialsProps {
  socialsItems: {
    id: string;
    src: StaticImageData;
    href: string;
  }[];
}

export const socialsItems = [
  { id: '1', href: '#', src: instagram },
  { id: '2', href: '#', src: facebook },
  { id: '3', href: '#', src: twitter },
];
