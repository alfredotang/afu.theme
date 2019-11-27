import SvgIcon from '@material-ui/core/SvgIcon';

type SvgIconComponent = typeof SvgIcon;
export interface memberDataEntity {
    key: number;
    name: string;
    imgUrl: string;
}

export interface teamChainDataEntity<T> {
    fromEnd: T;
    toEnd: T;
}

export interface RouterConfigEntity {
    name: string;
    path: string;
    exact: boolean;
    page: () => JSX.Element;
    sidebarIcon: SvgIconComponent;
}
