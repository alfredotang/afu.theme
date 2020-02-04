import React, { FC } from 'react';
import { render } from 'react-dom';
import { ThemeProvider, createGlobalStyle, DefaultTheme } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterConfig } from '@src/client/config/router';
import { useThemeCore } from '@src/client/config/themeCore';
import Layout from '@components/layout';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: ${props => props.theme.body.bgColor};
        color: ${props => props.theme.body.color};
    }
`;

const App: FC = () => {
    const [theme, setTheme] = useThemeCore();
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Layout />
            </ThemeProvider>
        </Router>
    );
};

render(<App />, document.querySelector('#root'));
