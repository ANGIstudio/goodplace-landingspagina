import { Meta } from '../utils/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Navigation } from '../components/Navigation/Navigation';

const Base: React.FC = ({ children }) => (
  <div className="antialiased text-gray-600">
    <Meta appConfig={AppConfig} />
    <Navigation logo="myBrand" />
    {children}
  </div>
);

export { Base };
