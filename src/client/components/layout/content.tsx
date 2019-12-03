import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeCore } from '@typings/client/theme';
import Sidebar from './sidebar';

const useStyles = makeStyles((theme: ThemeCore) => ({
    contentContainer: {
        display: 'flex',
        marginTop: theme.layout.header.width,
        height: '100%',
        width: '100%',
        backgroundColor: 'aliceblue',
        [theme.breakpoints.down('xs')]: {
            marginTop: theme.layout.header.smWidth,
        },
    },
    mainContainer: {
        width: '100%',
        height: '100%',
        marginLeft: theme.layout.sidebar.width,
        padding: theme.spacing(3),
        backgroundColor: 'antiquewhite',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
        },
    },
}));

interface IContentProps {}

const Content = (props: IContentProps): JSX.Element => {
    const classes = useStyles({});
    return (
        <section className={classes.contentContainer}>
            <Sidebar />
            <main className={classes.mainContainer}>content</main>
        </section>
    );
};

export default Content;
