import ApplyUrlStyles from './customizations/global/ApplyUrlStyles';
import FaviconHelmet from './components/AppExtras/FaviconHelmet';

const applyConfig = (config) => {
  config.settings.appExtras = [
    ...(config.settings.appExtras || []),
    {
      match: '', // Aplica globalmente
      component: () => <ApplyUrlStyles />,
    },
  ];

  config.settings.appExtras = [


    ...(config.settings.appExtras || []),


    { match: '', component: FaviconHelmet },


  ];

  return config;
};

export default applyConfig;
