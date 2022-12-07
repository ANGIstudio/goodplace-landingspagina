import cruyff from '../assets/brands/cruyff.png';
import ifaw from '../assets/brands/ifaw.png';
import justdiggit from '../assets/brands/justdiggit.png';
import kika from '../assets/brands/kika.png';
import klabu from '../assets/brands/klabu.png';
import mf from '../assets/brands/mf.png';
import oceancleanup from '../assets/brands/ocean.png';
import saveachildsheart from '../assets/brands/savechildsheart.png';
import stichtingaap from '../assets/brands/stichtingaap.png';
import sunday from '../assets/brands/sunday.png';
import tjommie from '../assets/brands/tjommie.png';
import vriendensophia from '../assets/brands/vriendensophia.png';
import warchild from '../assets/brands/warchild.png';
import wildeganzen from '../assets/brands/wildeganzen.png';
import wwf from '../assets/brands/wwf.png';
import gortemaker from '../assets/gortemaker.png';
import gottenbos from '../assets/gottenbos.png';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import peoplewithballoons from '../assets/peoplewithballoons.png';
import phoneswithtiger from '../assets/phoneswithtiger.png';
import sharingiscaring from '../assets/sharingiscaring.png';
import uhlenbeck from '../assets/uhlenbeck.png';
import vandermarel from '../assets/vandermarel.png';
import vanoosten from '../assets/vanoosten.png';

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
    id: 5,
    img: uhlenbeck,
    description:
      'Innovatieve en sociale ondernemer \n Altijd bezig met de wereld van morgen \n CEO De Roos Advocaten',
  },
  {
    name: 'Yvo Gortemaker',
    id: 3,
    img: gortemaker,
    description:
      'Digital Product Strategy, Entrepreneurship \n Founder Global Orange',
  },
  {
    name: 'Leopold van Oosten',
    id: 4,
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
  {
    id: '2',
    href: 'https://www.linkedin.com/company/goodplacefoundation/',
    src: linkedin,
  },
  {
    id: '3',
    href: 'https://instagram.com/goodplace.foundation'
    src: instagram,
  },
  {
    id: '4',
    href: 'https://www.facebook.com/profile.php?id=100078787633106',
    src: facebook,
  },
];
