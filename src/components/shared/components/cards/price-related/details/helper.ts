export function covertToToman(price: number) {
  return price / 10;
}

export function formatDeltaToTwoDecimalPlaces(delta: string) {
  return Number.parseFloat(delta).toFixed(2);
}
