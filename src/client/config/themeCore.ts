import { IThemeOptions, ThemeMiddleware } from '@typings/client/theme';
import { colorMixin } from './colorMixin';

export const useThemeCore = (theme?: IThemeOptions): ThemeMiddleware => {
    return {
        palette: {
            background: {
                default: colorMixin.$whiteDark_Mid,
            },
        },
        layout: {
            header: {
                palette: {
                    backgroundColor: 'red',
                    color: '',
                },
                width: '96px',
                smWidth: '56px',
                navbar: {
                    link: {
                        backgroundColor: '',
                        color: '',
                        activeBackgroundColor: '',
                        activeColor: '',
                        hoverColor: '',
                    },
                },
            },
            sidebar: {
                palette: {
                    backgroundColor: 'red',
                    color: '',
                },
                width: '330px',
                navbar: {
                    link: {
                        backgroundColor: '',
                        color: '',
                        activeBackgroundColor: '',
                        activeColor: '',
                        hoverColor: '',
                    },
                },
            },
            button: {
                backgroundColor: '',
                color: '',
                hoverColor: '',
            },
        },
    };
};

export const themeLight: IThemeOptions = {
    body: {
        backgroundColor: colorMixin.$white,
    },
    color: {
        color: '',
        backgroundColor: '',
        activeColor: '',
        activeBackgroundColor: '',
        hoverColor: '',
    },
};
export const themeDark: IThemeOptions = {
    body: {
        backgroundColor: colorMixin.$white,
    },
    color: {
        color: '',
        backgroundColor: '',
        activeColor: '',
        activeBackgroundColor: '',
        hoverColor: '',
    },
};
export const themeCMS = {};
