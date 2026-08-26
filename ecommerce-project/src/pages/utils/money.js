export default function formatCurrency(moneyAmount) {
  if (moneyAmount >= 0) {
    return `$${(moneyAmount / 100).toFixed(2)}`;
  } else if (moneyAmount < 0) {
    return `-$${(-moneyAmount / 100).toFixed(2)}`;
  }
}
