// https://material.io/tools/icons/?icon=3d_rotation&style=baseline
import { Home, DnsRounded, Public, Face, NoteAdd } from '@material-ui/icons';
import { RouterConfigEntity } from '@typings/client';

import HomeContainer from '@src/client/components/home/home';

export const RouterConfig: RouterConfigEntity[] = [
    {
        name: '首頁',
        path: '/',
        exact: true,
        page: HomeContainer,
        sidebarIcon: Home,
    },
];
