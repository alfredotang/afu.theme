import React, { FC } from 'react';
import styled from '@emotion/styled';
import { DefaultTheme } from 'emotion-theming';
import { colorAddAlpha, colorDarken } from '@common/utils/colorUtils';

interface IProps {
    children: React.ReactNode;
}

const Container = styled.aside<{ theme: DefaultTheme }>`
    width: ${props => props.theme.layout.sidebar.width};
    position: fixed;
    z-index: ${props => props.theme.zIndex.navBar};
    /* box-shadow: 0px 1px 3px 0px ${props => colorAddAlpha(props.theme.body.color, 0.5)},
        0px 1px 1px 0px ${props => colorAddAlpha(props.theme.body.color, 0.14)},
        0px 2px 1px -1px ${props => colorAddAlpha(props.theme.body.color, 0.12)}; */
    border-top: 1px solid ${props => colorAddAlpha(props.theme.body.color, 0.5)};
    border-right: 1px solid ${props => colorAddAlpha(props.theme.body.color, 0.5)};
    height: 100%;
    background-color: ${props => props.theme.body.bgColor};
    color: ${props => props.theme.body.color};
    padding-top: ${props => props.theme.layout.sidebar.paddingTop};
    padding-bottom: ${props => props.theme.layout.sidebar.paddingBottom};
    padding-right: ${props => props.theme.layout.sidebar.paddingRight};
    padding-left: ${props => props.theme.layout.sidebar.paddingLeft};

    ${props => props.theme.breakPoints.down('sm')} {
        display: none;
    }
`;

const Content = styled.div<{ theme: DefaultTheme }>`
    overflow-y: auto;
    overflow-x: hidden;
    border-radius: 3px;
    height: 82%;
    border: 1px solid ${props => colorAddAlpha(props.theme.body.color, 0.5)};
    padding: ${props => props.theme.spacing(2)};
    box-sizing: border-box;
    background-color: ${props => colorDarken(props.theme.body.bgColor, 0.15)};
    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        background: ${props => colorDarken(props.theme.body.bgColor, 0.15)};
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${props => props.theme.body.color};
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${props => colorDarken(props.theme.body.color, 0.15)};
    }
`;

const Sidebar: FC<IProps> = props => {
    const { children } = props;
    return (
        <Container>
            <Content>{children}</Content>
        </Container>
    );
};

export default Sidebar;
