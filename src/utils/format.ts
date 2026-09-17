export function formatKg(value: number) {
  return (Number.isInteger(value) ? value : value.toFixed(1)) + " kg";
}
