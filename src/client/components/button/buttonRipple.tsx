import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const ripple = keyframes`
    100% {
        transform: scale(2);
        opacity: 0;
    }
`;

export interface IButtonRipple {
    width: number;
    height: number;
    top: number;
    left: number;
}

interface IProps {
    rippleStyle: IButtonRipple;
}

// TODO: button ripple
const ButtonRipple = styled.span<IProps>`
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    border-radius: 100%;
    transform: scale(0);
    animation: ${ripple} 1s;
    width: ${props => props?.rippleStyle?.width || 0}px;
    height: ${props => props?.rippleStyle?.height || 0}px;
    top: ${props => props?.rippleStyle?.top || 0}px;
    left: ${props => props?.rippleStyle?.left || 0}px;
`;

export default ButtonRipple;
