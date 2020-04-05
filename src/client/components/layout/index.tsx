import styled from '@emotion/styled';
import { DefaultTheme } from 'emotion-theming';
import { pixleCalc } from '@common/utils/styleUtils';
import { colorAddAlpha } from '@src/client/common/utils/colorUtils';

export const PageContainer = styled.section<{ theme: DefaultTheme }>`
    /* margin-top: ${props => props.theme.layout.header.width};
    ${props => props.theme.breakPoints.down('sm')} {
        margin-top: ${props => props.theme.layout.header.smWidth};
    } */
`;

const Layout = styled.main<{ theme: DefaultTheme }>`
    border-top: 1px solid ${props => colorAddAlpha(props.theme.body.color, 0.5)};
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
