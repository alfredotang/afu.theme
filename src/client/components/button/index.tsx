import MuiButton from '@material-ui/core/Button';
import styled, { css, DefaultTheme } from 'styled-components';
import { colorLighten, colorAddAlpha } from '@common/utils/colorUtils';
import color from '@common/styles/color';

type Variant = 'text' | 'outlined' | 'contained';

const buttonVariant = (variant: Variant, bgColor: string, textColor: string) => {
    switch (variant) {
        case 'contained':
            return css`
                background-color: ${bgColor};
                color: ${textColor};
                cursor: pointer;
                &:hover {
                    background-color: ${colorLighten(bgColor, 0.1)};
                }
            `;

        case 'outlined':
            return css`
                background-color: transparent;
                color: ${bgColor};
                cursor: pointer;
                border: 1px solid ${bgColor};
                &:hover {
                    background-color: ${bgColor};
                    border: 1px solid ${bgColor};
                    color: ${textColor};
                }
            `;
        case 'text':
            return css`
                background-color: transparent;
                color: ${bgColor};
                cursor: pointer;
                &:hover {
                    background-color: ${colorAddAlpha(bgColor, 0.2)};
                }
            `;

        default:
            return css`
                background-color: ${bgColor};
                color: ${bgColor};
                cursor: pointer;
                &:hover {
                    background-color: ${colorLighten(bgColor, 0.1)};
                }
            `;
    }
};

interface IButtonProps {
    readonly theme: DefaultTheme;
    variant?: Variant;
    bgColor?: string;
    textColor?: string;
}

const Button = styled(MuiButton)`
    && {
        transition: 0.1s;
        ${(props: IButtonProps) =>
            buttonVariant(
                props.variant,
                props.bgColor || props.theme.body.primary,
                props.textColor || color.$white[100]
            )};
    }
`;

export default Button;
