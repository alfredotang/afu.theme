import _ from 'lodash';

/**
 *
 * @param {string} value
 * '100px' --> 100
 */
export const stringToNumberFormat = (value: string): number => {
    return parseInt(value, 10);
};

/**
 *
 * @param {string} values
 * pixleCalc('1px', '2px', '3px') --> '6px'
 */
export const pixleCalc = (...values: string[]): string => {
    const value: number[] = _.map(values, val => stringToNumberFormat(val));
    return `${_.sum(value)}px`;
};
