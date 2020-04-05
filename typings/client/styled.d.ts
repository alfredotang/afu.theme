import 'emotion-theming';
import { BreakPoints as IBreakPoints } from '@common/styles/breakPoints';
import { ISpacing } from '@common/styles/spacing';
import { ILayoutOption } from '@common/styles/layout';
import { IZIndex } from '@common/styles/zIndex';

declare module 'emotion-theming' {
    export interface IThemeOption {
        bgColor: string;
        color: string;
        linkColor: string;
        primary: string;
        secondary: string;
    }
    export interface DefaultTheme {
        breakPoints: IBreakPoints;
        spacing: ISpacing;
        layout: ILayoutOption;
        zIndex: IZIndex;
        body: IThemeOption;
    }
}
