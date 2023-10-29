export const roundValue = (value: number) => {
    const decimalPlaces = 2;
    const multiplier = Math.pow(10, decimalPlaces);
    const roundedValue = Math.round(value * multiplier) / multiplier;
    return roundedValue
}