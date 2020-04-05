import React, { FC } from 'react';
import _ from 'lodash';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import { useThemeCore } from '@src/client/app/themeCore';
import { PageContainer } from '@components/layout';
import GlobalStyle from '@src/client/app/globalStyle';
import Header from '@components/header';
import { RouterConfig, IRouterConfig } from '@src/client/app/router';
import Home from '@src/client/pages/home';
import Resume from '@src/client/pages/resume';

const App: FC = () => {
    const [theme, setTheme] = useThemeCore();
    console.log('render');
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <GlobalStyle theme={theme} />
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
        </BrowserRouter>
    );
};

export default App;
