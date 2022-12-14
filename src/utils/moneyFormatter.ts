export function moneyFormatter(price: number) {
  const newPrice = Number(price)
  const formatting = new Intl.NumberFormat('it', {
    style: 'currency',
    currency: 'EUR',
  }).format(newPrice)
  return formatting
}
