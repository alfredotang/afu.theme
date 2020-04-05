/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { DefaultTheme, IThemeOption } from 'emotion-theming';

import color from '@common/styles/color';
import layout from '@common/styles/layout';
import breakPoints from '@common/styles/breakPoints';
import spacing from '@common/styles/spacing';
import zIndex from '@common/styles/zIndex';

const defaultThemeOption: IThemeOption = {
    bgColor: color.$black[400],
    color: color.$teal[100],
    linkColor: color.$yellow[100],
    primary: color.$teal[100],
    secondary: color.$green[100],
};

const defaultTheme: DefaultTheme = {
    breakPoints,
    spacing,
    layout,
    zIndex,
    body: defaultThemeOption,
};

export const themeLight: IThemeOption = {
    color: color.$hotPink[100],
    bgColor: color.$white[100],
    linkColor: 'inherit',
    primary: color.$red[100],
    secondary: color.$green[100],
};
export const themeDark: IThemeOption = {
    color: color.$white[100],
    bgColor: color.$black[400],
    linkColor: color.$white[100],
    primary: color.$red[100],
    secondary: color.$green[100],
};

export const useThemeCore = (): [DefaultTheme, Dispatch<SetStateAction<IThemeOption>>] => {
    const [themeOption, setThemeOption] = useState<IThemeOption>(defaultThemeOption);
    const [theme, setTheme] = useState<DefaultTheme>(defaultTheme);
    useEffect(() => {
        setTheme({ ...theme, body: themeOption });
    }, [themeOption]);

    return [theme, setThemeOption];
};
