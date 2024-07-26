import vikeReact from 'vike-react/config';

import Head from './Head';

interface ConfigType {
    Head: typeof Head;
    favicon: string;
    title: string;
    ssr: boolean;
    extends: (typeof vikeReact)[];
}

const config: ConfigType = {
    Head,
    favicon: '/favicon.ico',
    title: 'Web Challenge Marvel',
    ssr: true,
    extends: [vikeReact],
};

export default config;
