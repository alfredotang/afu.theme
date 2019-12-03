import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useThemeCore } from '@src/client/config/themeCore';
import { ThemeCore } from '@typings/client/theme';

import Header from './header';
import Content from './content';

const custheme: ThemeCore = createMuiTheme(useThemeCore()) as ThemeCore;

const Layout = (): JSX.Element => {
    return (
        <ThemeProvider theme={custheme}>
            <CssBaseline />
            <Header />
            <Content />
        </ThemeProvider>
    );
};

export default Layout;
