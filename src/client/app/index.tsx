import React, { FC, Component } from 'react';
import _ from 'lodash';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';

import { colorDarken } from '@common/utils/colorUtils';
import { useThemeCore } from '@src/client/app/themeCore';

import { PageContainer } from '@components/layout';
import Header from '@components/header';
import { RouterConfig, IRouterConfig } from '@src/client/app/router';
import Home from '@src/client/pages/home';
import Resume from '@src/client/pages/resume';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        background-color: ${props => props.theme.body.bgColor};
        color: ${props => props.theme.body.color};
        overflow-y: auto;

        &::-webkit-scrollbar {
            width: 8px;
            height: 8px;
            
        }

        &::-webkit-scrollbar-track {
            background: ${props => colorDarken(props.theme.body.bgColor, 0.15)};
        }

        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: ${props => props.theme.body.color};
            
            &:hover {
                background-color: ${props => colorDarken(props.theme.body.color, 0.15)};
            }
        }
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.body.linkColor};
    }
`;

const App: FC = () => {
    const [theme, setTheme] = useThemeCore();
    console.log('render');
    return (
        <BrowserRouter>
            <StylesProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Header />
                    <PageContainer>
                        <Switch>
                            {_.map(RouterConfig, (route: IRouterConfig) => {
                                const { Page, path, exact, name } = route;
                                return (
                                    <Route key={name} path={path} exact={exact}>
                                        <Page />
                                    </Route>
                                );
                            })}
                        </Switch>
                    </PageContainer>
                </ThemeProvider>
            </StylesProvider>
        </BrowserRouter>
    );
};

export default App;
