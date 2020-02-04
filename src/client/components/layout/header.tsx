import React, { FC } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

import { colorAddAlpha, colorDarken } from '@common/utils/colorUtils';

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

const IconWrapper = styled(IconButton)`
    && {
        margin-right: ${props => props.theme.spacing(2)};
        ${props => props.theme.breakPoints.up('sm')} {
            display: none;
        }
    }
`;

interface IProps {}
const Header: FC<IProps> = props => {
    return (
        <Container>
            <Toolbar>
                <IconWrapper color="inherit" aria-label="Open drawer" edge="start">
                    <MenuIcon />
                </IconWrapper>
                <Typography variant="h6">afu.theme(icon)</Typography>
                <nav>nav</nav>
                <aside>aside</aside>
            </Toolbar>
        </Container>
    );
};

export default Header;
