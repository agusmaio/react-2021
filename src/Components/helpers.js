


export const formatPrice = (n) => {
    const formatted =
      '$ ' +
      parseInt(n)
        .toFixed(2)
        .replace('.', ',')
        .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
  
    const split = formatted.split(',');
  
    return [split[0], split[1]]
  };