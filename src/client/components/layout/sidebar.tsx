import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeCore } from '@typings/client/theme';

interface ISidebarProps {}
const sidebarWidth: string = '330px';

const useStyles = makeStyles((theme: ThemeCore) => ({
    sideBarContainer: {
        width: theme.layout.sidebar.width,
        position: 'fixed',
        height: '100%',
        backgroundColor: 'darkgrey',
        padding: theme.spacing(3),
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
}));

const Sidebar = (props: ISidebarProps): JSX.Element => {
    const classes = useStyles({});
    return <nav className={classes.sideBarContainer}>sidebar</nav>;
};

export default Sidebar;
