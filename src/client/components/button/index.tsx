import styled from '@emotion/styled';
import { DefaultTheme } from 'emotion-theming';
import color from '@common/styles/color';
import ButtonContainer from '@components/button/buttonContainer';
import ButtonVariant, { Variant } from '@components/button/buttonVariant';

interface IButtonProps {
    readonly theme: DefaultTheme;
    variant?: Variant;
    main?: string;
    second?: string;
}

const Button = styled.button`
    ${ButtonContainer}
    ${(props: IButtonProps) => {
        const { theme, variant, main, second } = props;
        return ButtonVariant(variant, main || theme.body.primary, second || color.$white[100]);
    }};
`;
Button.defaultProps = {
    variant: 'contained',
};

export default Button;
