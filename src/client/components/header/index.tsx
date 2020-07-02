import React, { FC } from 'react';
import styled from '@emotion/styled';
import { DefaultTheme } from 'emotion-theming';
import { colorAddAlpha } from '@common/utils/colorUtils';
import Navbar from '@components/header/navbar';

const Container = styled.header<{ theme: DefaultTheme }>`
    display: flex;
    background-color: ${props => props.theme.body.bgColor};
    color: ${props => props.theme.body.color};
    box-shadow: 0px 1px 3px 0px ${props => colorAddAlpha(props.theme.body.color, 0.01)},
        0px 1px 1px 0px ${props => colorAddAlpha(props.theme.body.color, 0.1)},
        0px 2px 1px -1px ${props => colorAddAlpha(props.theme.body.color, 0.05)};
    padding: ${props => props.theme.spacing(1)};
`;

const Title = styled.div<{ theme: DefaultTheme }>`
    padding: ${props => props.theme.spacing(1)};
    flex: 1 1 ${props => props.theme.breakPoints.breakpointValues.sm / 3}px;
`;

interface IProps {}
const Header: FC<IProps> = () => {
    return (
        <Container>
            <Title>
                <span>afu.theme(icon)</span>
            </Title>

            <Navbar />
        </Container>
    );
};

export default Header;
