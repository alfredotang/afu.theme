export type ISpacing = (value: ISpacingValue) => string;
type ISpacingValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
const spacing: ISpacing = value => {
    return `${value * 8}px`;
};

export default spacing;
