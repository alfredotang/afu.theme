import React, { FC } from 'react';
import styled from 'styled-components';
import { colorAddAlpha, colorDarken } from '@src/client/common/utils/colorUtils';

interface IProps {}

const Container = styled.nav`
    width: ${props => props.theme.layout.sidebar.width};
    position: fixed;
    z-index: ${props => props.theme.zIndex.navBar};
    box-shadow: 0px 1px 3px 0px ${props => colorAddAlpha(props.theme.body.color, 0.5)},
        0px 1px 1px 0px ${props => colorAddAlpha(props.theme.body.color, 0.14)},
        0px 2px 1px -1px ${props => colorAddAlpha(props.theme.body.color, 0.12)};
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

const Content = styled.div`
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
    return (
        <Container>
            <Content>
                <div style={{ height: 1000 }}>sidebar</div>
            </Content>
        </Container>
    );
};

export default Sidebar;
