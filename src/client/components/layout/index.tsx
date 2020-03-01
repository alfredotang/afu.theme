import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { pixleCalc } from '@common/utils/styleUtils';

export const PageContainer = styled.section`
    margin-top: ${props => props.theme.layout.header.width};
    ${props => props.theme.breakPoints.down('sm')} {
        margin-top: ${props => props.theme.layout.header.smWidth};
    }
`;

const Layout = styled.main`
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

export default Layout;
