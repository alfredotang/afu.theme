import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(theme => ({
    appBar: {
        boxShadow: 'none',
        padding: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            padding: 0,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));

interface IHeaderProps {}
const Header = (props: IHeaderProps): JSX.Element => {
    const classes = useStyles({});
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton color="inherit" aria-label="Open drawer" edge="start" className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">afu.theme(icon)</Typography>
                <nav>nav</nav>
                <aside>aside</aside>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
