import Color from 'color';

export const colorAddAlpha = (color: string, alpha: number = 1): string => {
    return Color(color)
        .alpha(alpha)
        .toString();
};

export const colorDarken = (color: string, ratio: number): string => {
    return Color(color)
        .darken(ratio)
        .hex()
        .toString();
};

export const colorLighten = (color: string, ratio: number): string => {
    return Color(color)
        .lighten(ratio)
        .hex()
        .toString();
};
