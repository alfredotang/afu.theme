import React, { FC, Fragment } from 'react';
import Layout from '@components/layout';
import Sidebar from '@components/sidebar';
import Button from '@components/button';

const Home: FC = () => {
    return (
        <Fragment>
            <Sidebar>
                <div>home</div>
            </Sidebar>
            <Layout>
                <Button>hello</Button>
            </Layout>
        </Fragment>
    );
};

export default Home;
