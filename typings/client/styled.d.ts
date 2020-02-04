import 'styled-components';
import { BreakPoints as IBreakPoints } from '@common/styles/breakPoints';
import { ISpacing } from '@common/styles/spacing';
import { ILayoutOption } from '@common/styles/layout';

declare module 'styled-components' {
    export interface IThemeOption {
        bgColor: string;
        color: string;
        primary: string;
        secondary: string;
    }
    export interface DefaultTheme {
        breakPoints: IBreakPoints;
        spacing: ISpacing;
        layout: ILayoutOption;
        body: IThemeOption;
    }
}
