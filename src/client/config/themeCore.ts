export const colorMixin = {
    $white: '',
    $grey: '#e0e0e0',
};
export const themeCore = (theme?) => {
    return {
        palette: {
            background: {
                default: colorMixin.$grey,
            },
        },
        headerNavbar: {
            backgroundColor: 'red',
            color: '',
        },
    };
};

export const themeLight = {
    body: {
        backgroundColor: '',
    },
    core: {
        color: '',
        backgroundColor: '',
    },
};
export const themeDark = {};
export const themeCus = {};
export const themeCMS = {};
