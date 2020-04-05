import React, { FC } from 'react';
import { Global, css } from '@emotion/core';
import { colorDarken } from '@common/utils/colorUtils';
import { DefaultTheme } from 'emotion-theming';

interface IProps {
    theme: DefaultTheme;
}
const GlobalStyle: FC<IProps> = props => {
    const { theme } = props;
    return (
        <Global
            styles={css`
                body {
                    padding: 0;
                    margin: 0;
                    background-color: ${theme.body.bgColor};
                    color: ${theme.body.color};
                    overflow-y: auto;

                    &::-webkit-scrollbar {
                        width: 8px;
                        height: 8px;
                    }

                    &::-webkit-scrollbar-track {
                        background: ${colorDarken(theme.body.bgColor, 0.15)};
                    }

                    &::-webkit-scrollbar-thumb {
                        border-radius: 10px;
                        background-color: ${theme.body.color};

                        &:hover {
                            background-color: ${colorDarken(theme.body.color, 0.15)};
                        }
                    }
                }

                a {
                    text-decoration: none;
                }
            `}
        />
    );
};

export default GlobalStyle;
