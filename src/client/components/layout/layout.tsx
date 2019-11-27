import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { themeCore } from '@src/client/config/themeCore';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './header';
import Content from './content';

const custheme = createMuiTheme(themeCore());

const Layout = (): JSX.Element => {
    return (
        <MuiThemeProvider theme={custheme}>
            <CssBaseline />
            <Header />
            <Content />
        </MuiThemeProvider>
    );
};

export default Layout;
