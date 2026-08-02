export default function formatCurrency(moneyAmount) {
  return (moneyAmount / 100).toFixed(2);
}