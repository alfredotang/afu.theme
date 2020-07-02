import React, { FC, useState } from 'react';
import _ from 'lodash';
import styled from '@emotion/styled';
import { DefaultTheme } from 'emotion-theming';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import Button from '@components/button';
import { RouterConfig, IRouterConfig } from '@src/client/app/router';

const Container = styled.nav<{ theme: DefaultTheme }>`
    flex: 2 2;
    text-align: end;
    padding-right: ${props => props.theme.spacing(1)};
`;

const LinkContainer = styled.div<{ theme: DefaultTheme }>`
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
            {_.map(RouterConfig, (route: IRouterConfig) => {
                const { name, path } = route;
                return (
                    <LinkContainer key={name}>
                        <Link to={path}>
                            <Button
                                variant={activePath === path ? 'outlined' : 'text'}
                                onClick={() => setActivePath(path)}>
                                {name}
                            </Button>
                        </Link>
                    </LinkContainer>
                );
            })}
            <LinkContainer key="setting_icon">
                <Button variant="icon">
                    <FontAwesomeIcon icon={faCog} size="2x" />
                </Button>
            </LinkContainer>
        </Container>
    );
};

export default Navbar;
