import { css } from '@emotion/core';
import { colorLighten, colorAddAlpha } from '@common/utils/colorUtils';

export type Variant = 'text' | 'outlined' | 'contained' | 'icon';

const ButtonVariant = (variant: Variant, main: string, second: string) => {
    switch (variant) {
        case 'contained':
            return css`
                background-color: ${main};
                color: ${second};
                &:hover {
                    background-color: ${colorLighten(main, 0.1)};
                }
            `;

        case 'outlined':
            return css`
                background-color: transparent;
                color: ${main};
                border: 1px solid ${main};
                &:hover {
                    background-color: ${main};
                    border: 1px solid ${main};
                    color: ${second};
                }
            `;
        case 'text':
            return css`
                background-color: transparent;
                color: ${main};
                box-shadow: none;
                &:hover {
                    background-color: ${colorAddAlpha(main, 0.2)};
                }
            `;
        case 'icon':
            return css`
                background-color: transparent;
                color: ${main};
                box-shadow: none;
                border-radius: 20px;
                &:hover {
                    background-color: ${colorAddAlpha(main, 0.2)};
                }
            `;
        default:
            return css`
                background-color: ${main};
                color: ${main};
                cursor: pointer;
                &:hover {
                    background-color: ${colorLighten(main, 0.1)};
                }
            `;
    }
};

export default ButtonVariant;
