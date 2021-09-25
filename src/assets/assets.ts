import goededoelen from './goededoelen.svg';
import icons from './icons.svg';
import lifesavers from './lifesavers.svg';
import phones from './phones.svg';

export interface AssetsProps {
  [index: string]: HTMLImageElement | undefined;
}

export const assets: AssetsProps = {
  icons,
  phones,
  lifesavers,
  goededoelen,
};
export default assets;
