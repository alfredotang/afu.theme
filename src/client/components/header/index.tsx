import React, { FC } from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { IRouterConfig } from '@src/client/app/router';
import { colorAddAlpha } from '@common/utils/colorUtils';

import Navbar from '@components/header/navbar';

const Container = styled(AppBar)`
    && {
        background-color: ${props => props.theme.body.bgColor};
        color: ${props => props.theme.body.color};
        box-shadow: 0px 1px 3px 0px ${props => colorAddAlpha(props.theme.body.color, 0.01)},
            0px 1px 1px 0px ${props => colorAddAlpha(props.theme.body.color, 0.1)},
            0px 2px 1px -1px ${props => colorAddAlpha(props.theme.body.color, 0.05)};
        padding: ${props => props.theme.spacing(2)};
        ${props => props.theme.breakPoints.down('sm')} {
            padding: 0;
        }
    }
`;

const ParagraphContainer = styled.div`
    flex: 1;
    min-width: ${props => props.theme.breakPoints.breakpointValues.sm / 3}px;
`;

interface IProps {}
const Header: FC<IProps> = props => {
    return (
        <Container>
            <Toolbar>
                <ParagraphContainer>
                    <Typography variant="h6">afu.theme(icon)</Typography>
                </ParagraphContainer>
                <Navbar />
            </Toolbar>
        </Container>
    );
};

export default Header;
