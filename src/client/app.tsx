import React, { FC } from 'react';
import { render } from 'react-dom';
import { ThemeProvider, createGlobalStyle, DefaultTheme } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterConfig } from '@src/client/config/router';
import { useThemeCore } from '@src/client/config/themeCore';
import Layout from '@components/layout';
import { colorDarken } from '@common/utils/colorUtils';

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
            &:focus {
            }
            &:active {
            }
        }

      

    }
`;

const App: FC = () => {
    const [theme, setTheme] = useThemeCore();
    console.log('render');
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
