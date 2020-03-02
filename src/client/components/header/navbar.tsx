import React, { FC, useEffect, useState } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import Button from '@components/button';

import { RouterConfig, IRouterConfig } from '@src/client/app/router';

const Container = styled.nav``;

const IconWrapper = styled(IconButton)`
    && {
        margin-right: ${props => props.theme.spacing(2)};
        ${props => props.theme.breakPoints.up('sm')} {
            display: none;
        }
    }
`;

const LinkContainer = styled.div`
    display: inline-block;
    margin-left: ${props => props.theme.spacing(1)};
    ${props => props.theme.breakPoints.down('sm')} {
        display: none;
    }
`;

const Navbar: FC = () => {
    console.log('navbar render');
    const [activePath, setActivePath] = useState<string>(window.location.pathname);
    return (
        <Container>
            <IconWrapper color="inherit" aria-label="Open drawer" edge="start">
                <MenuIcon />
            </IconWrapper>
            {_.map(RouterConfig, (route: IRouterConfig) => {
                const { name, path } = route;
                return (
                    <LinkContainer key={name}>
                        <Button variant={activePath === path ? 'outlined' : 'text'} onClick={() => setActivePath(path)}>
                            <Link to={path}>{name}</Link>
                        </Button>
                    </LinkContainer>
                );
            })}
        </Container>
    );
};

export default Navbar;
