const telefoneFormatado = (value) => {
  let numbers = value.replace(/\D/g, '')
  numbers = numbers.slice(0, 11)

  if (numbers.length <= 10) {
    return numbers
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
  }

  return numbers
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
}

export { telefoneFormatado }
