import React, { FC, Fragment } from 'react';
import Layout from '@components/layout';
import Sidebar from '@components/sidebar';
import alfredoMountain from '@assets/images/alfredo/alfredo_mountain.jpg';

const Resume: FC = () => {
    return (
        <Fragment>
            <Sidebar>
                <div>Resume</div>
            </Sidebar>
            <Layout>
                <img src={alfredoMountain} alt="alfredo_picture" />
            </Layout>
        </Fragment>
    );
};

export default Resume;
