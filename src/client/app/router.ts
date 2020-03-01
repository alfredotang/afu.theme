import Home from '@src/client/pages/home';
import Resume from '@src/client/pages/resume';

export interface IRouterConfig {
    name: string;
    path: string;
    exact: boolean;
    Page: any;
}

export const RouterConfig: IRouterConfig[] = [
    {
        name: 'home',
        path: '/',
        exact: true,
        Page: Home,
    },
    {
        name: 'resume',
        path: '/resume',
        exact: true,
        Page: Resume,
    },
];
