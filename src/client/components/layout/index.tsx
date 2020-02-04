import React, { Fragment, FC } from 'react';
import styled from 'styled-components';

import { stringToNumberFormat } from '@common/utils/styleUtils';
import Button from '@components/button';
import Header from './header';
import Sidebar from './sidebar';

const Container = styled.section`
    display: flex;
    margin-top: ${props => props.theme.layout.headerWidth};
    height: 100%;
    width: 100%;
    ${props => props.theme.breakPoints.down('sm')} {
        margin-top: ${props => props.theme.layout.smHeaderWidth};
    }
`;

const PageContent = styled.main`
    width: 100%;
    height: 100%;
    margin-left: ${props =>
        stringToNumberFormat(props.theme.layout.sidebarWidth) + stringToNumberFormat(props.theme.spacing(6))}px;
    padding: ${props => props.theme.spacing(3)};
    ${props => props.theme.breakPoints.down('sm')} {
        margin-left: 0;
    }
`;

interface IProps {}

const AA = styled(Button)`
    && {
        background: hotpink;
    }
`;

const Layout: FC<IProps> = props => {
    return (
        <Fragment>
            <Header />
            <Container>
                <Sidebar />
                <PageContent>
                    <Button variant="contained">content</Button>
                </PageContent>
            </Container>
        </Fragment>
    );
};

export default Layout;
