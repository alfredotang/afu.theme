import React, { FC, Fragment } from 'react';
import Layout from '@components/layout';
import Sidebar from '@components/sidebar';

const Resume: FC = () => {
    return (
        <Fragment>
            <Sidebar>
                <div>Resume</div>
            </Sidebar>
            <Layout>Resume</Layout>
        </Fragment>
    );
};

export default Resume;
