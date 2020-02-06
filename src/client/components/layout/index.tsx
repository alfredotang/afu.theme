import React, { Fragment, FC } from 'react';
import styled from 'styled-components';

import { stringToNumberFormat, pixleCalc } from '@common/utils/styleUtils';
import Button from '@components/button';
import Header from './header';
import Sidebar from './sidebar';

const Container = styled.section`
    display: flex;
    margin-top: ${props => props.theme.layout.header.width};
    height: 100%;
    width: 100%;
    ${props => props.theme.breakPoints.down('sm')} {
        margin-top: ${props => props.theme.layout.header.smWidth};
    }
`;

const PageContent = styled.main`
    width: 100%;
    height: 100%;
    margin-left: ${props =>
        pixleCalc(
            props.theme.layout.sidebar.width,
            props.theme.layout.sidebar.paddingLeft,
            props.theme.layout.sidebar.paddingRight
        )};
    padding: ${props => props.theme.spacing(3)};
    ${props => props.theme.breakPoints.down('sm')} {
        margin-left: 0;
    }
`;

interface IProps {}

const Layout: FC<IProps> = props => {
    return (
        <Fragment>
            <Header />
            <Container>
                <Sidebar />
                <PageContent>
                    <div style={{ height: 1000 }}>
                        <Button variant="contained">content</Button>
                    </div>
                </PageContent>
            </Container>
        </Fragment>
    );
};

export default Layout;
