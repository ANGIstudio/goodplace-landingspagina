import brandsframe from './brandsframe.png';
import peoplewithballoons from './peoplewithballoons.png';
import phoneswithtiger from './phoneswithtiger.png';
import sharingiscaring from './sharingiscaring.png';

export interface AssetsProps {
  [index: string]: StaticImageData | undefined;
}

export const assets: AssetsProps = {
  brandsframe,
  phoneswithtiger,
  peoplewithballoons,
  sharingiscaring,
};
export default assets;
