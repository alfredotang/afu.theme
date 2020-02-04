/**
 *
 * @param {string} value
 * '100px' --> 100
 */
export const stringToNumberFormat = (value: string): number => {
    const filterStringAns: string = value.replace(/[^\d]/g, '');
    const result: number = Number(filterStringAns);
    return result;
};
