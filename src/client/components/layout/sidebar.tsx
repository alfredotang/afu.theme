import React, { FC } from 'react';
import styled from 'styled-components';
import { colorAddAlpha } from '@src/client/common/utils/colorUtils';

interface IProps {}

const Container = styled.nav`
    width: ${props => props.theme.layout.sidebarWidth};
    position: fixed;
    box-shadow: 0px 1px 3px 0px ${props => colorAddAlpha(props.theme.body.color, 0.5)},
        0px 1px 1px 0px ${props => colorAddAlpha(props.theme.body.color, 0.14)},
        0px 2px 1px -1px ${props => colorAddAlpha(props.theme.body.color, 0.12)};
    height: 100%;
    background-color: ${props => props.theme.body.bgColor};
    color: ${props => props.theme.body.color};
    padding: ${props => props.theme.spacing(3)};
    ${props => props.theme.breakPoints.down('sm')} {
        display: none;
    }
`;

const Sidebar: FC<IProps> = props => {
    return <Container>sidebar</Container>;
};

export default Sidebar;
