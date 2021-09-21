import { Navigation } from '../components/Navigation/Navigation';
import { AppConfig } from '../utils/AppConfig';
import { Meta } from '../utils/Meta';

const Base: React.FC = ({ children }) => (
  <div className="antialiased text-gray-600 font-cabin">
    <Meta appConfig={AppConfig} />
    <Navigation logo="https://via.placeholder.com/150" />
    {children}
  </div>
);

export { Base };
