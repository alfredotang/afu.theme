import { Theme } from '@material-ui/core/styles';

interface IColorTheme {
    color?: string;
    backgroundColor?: string;
    hoverColor?: string;
    hoverBackgroundColor?: string;
    activeColor?: string;
    activeBackgroundColor?: string;
}
interface INavbarTheme<T> {
    link: T;
}

interface ILayoutComponentTheme<T> {
    navbar?: INavbarTheme<T>;
    palette: T;
    width: string;
    smWidth?: string;
}

export interface IThemeOptions {
    body: IColorTheme;
    color: IColorTheme;
}

interface ILayoutTheme<T> {
    layout: {
        header: ILayoutComponentTheme<T>;
        sidebar: ILayoutComponentTheme<T>;
        button: T;
    };
}

export interface ThemeMiddleware extends ILayoutTheme<IColorTheme> {
    palette: {
        background: {
            default: string;
        };
    };
}

export interface ThemeCore extends Theme, ILayoutTheme<IColorTheme> {}
