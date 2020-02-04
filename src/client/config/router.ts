// https://material.io/tools/icons/?icon=3d_rotation&style=baseline
import {
    Home as HomeIcon,
    DnsRounded as DnsIcon,
    Public as PublicIcon,
    Face as FaceIcon,
    NoteAdd as NotAddIcob,
} from '@material-ui/icons';
import SvgIcon from '@material-ui/core/SvgIcon';

import Home from '@src/client/pages/home';

type SvgIconComponent = typeof SvgIcon;
export interface RouterConfigEntity {
    name: string;
    path: string;
    exact: boolean;
    page: any;
    sidebarIcon: SvgIconComponent;
}

export const RouterConfig: RouterConfigEntity[] = [
    {
        name: '首頁',
        path: '/',
        exact: true,
        page: Home,
        sidebarIcon: HomeIcon,
    },
];
