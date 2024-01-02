import cruyff from '../assets/brands/cruyff.png';
import ifaw from '../assets/brands/ifaw.png';
import justdiggit from '../assets/brands/justdiggit.png';
import kika from '../assets/brands/kika.png';
import klabu from '../assets/brands/klabu.png';
import mf from '../assets/brands/mf.png';
import oceancleanup from '../assets/brands/ocean.png';
import saveachildsheart from '../assets/brands/savechildsheart.png';
import jarigejob from '../assets/brands/jarigejob.png';
import sunday from '../assets/brands/sunday.png';
import tjommie from '../assets/brands/tjommie.png';
import vriendensophia from '../assets/brands/vriendensophia.png';
import warchild from '../assets/brands/warchild.png';
import wildeganzen from '../assets/brands/wildeganzen.png';
import wwf from '../assets/brands/wwf.png';
import greenpeace from '../assets/brands/greenpeace.png';
import cordaid from '../assets/brands/cordaid.png';
import supportcasper from '../assets/brands/supportcasper.png';
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import whatsapp from '../assets/whatsapp.svg';
import sharingiscaring from '../assets/sharingiscaring.png';

export interface ContentImagesProps {
  [index: string]: StaticImageData | undefined;
}

export const contentImages: ContentImagesProps = {
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
  { id: '8', src: jarigejob },
  { id: '9', src: mf },
  { id: '10', src: saveachildsheart },
  { id: '11', src: cruyff },
  { id: '12', src: justdiggit },
  { id: '13', src: kika },
  { id: '14', src: ifaw },
  { id: '15', src: klabu },
  { id: '16', src: greenpeace },
  { id: '17', src: cordaid },
  { id: '18', src: supportcasper },
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
    href: 'https://instagram.com/goodplace.foundation',
    src: instagram,
  },
  {
    id: '4',
    href: 'https://www.facebook.com/profile.php?id=100078787633106',
    src: facebook,
  },
{
  id: '5',
  href: 'https://wa.me/message/2WUXUEODY26DH1',
  src: whatsapp,
},
];

export const socialsItems_follow = [
  {
    id: '2',
    href: 'https://www.linkedin.com/company/goodplacefoundation/',
    src: linkedin,
  },
  {
    id: '3',
    href: 'https://instagram.com/goodplace.foundation',
    src: instagram,
  },
  {
    id: '4',
    href: 'https://www.facebook.com/profile.php?id=100078787633106',
    src: facebook,
  },
];