import React, { FC, Fragment } from 'react';
import Layout from '@components/layout';
import Sidebar from '@components/sidebar';

const Home: FC = () => {
    return (
        <Fragment>
            <Sidebar>
                <div>home</div>
            </Sidebar>
            <Layout>Home</Layout>
        </Fragment>
    );
};

export default Home;
