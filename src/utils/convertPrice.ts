export const convertPrice = (price: number) => {
  if(!price) return;

  const convert = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
  
  return convert;
}

