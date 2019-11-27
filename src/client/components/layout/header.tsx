import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

interface IHeaderProps {}
const Header = (props: IHeaderProps): JSX.Element => {
    return (
        <AppBar>
            <article>icon</article>
            <nav>nav</nav>
            <aside>aside</aside>
        </AppBar>
    );
};

export default Header;
