import styled from '@emotion/styled';
import { DefaultTheme } from 'emotion-theming';
import color from '@common/styles/color';
import ButtonContainer from '@components/button/buttonContainer';
import ButtonVariant, { Variant } from '@components/button/buttonVariant';
import ButtonDisabled from '@components/button/buttonDisabled';

interface IButtonProps {
    readonly theme: DefaultTheme;
    variant?: Variant;
    main?: string;
    second?: string;
    disabled?: boolean;
}

const Button = styled.button`
    ${ButtonContainer}
    ${(props: IButtonProps) => {
        const { theme, variant, main, second, disabled } = props;
        if (disabled) {
            return ButtonDisabled;
        }
        return ButtonVariant(variant, main || theme.body.primary, second || color.$white[100]);
    }};
`;
Button.defaultProps = {
    variant: 'contained',
};

export default Button;
