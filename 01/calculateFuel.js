const Calculate = (arr, total = 0) => {
  arr.map(value => {
    while (Math.floor(value / 3) - 2 > 0) {
      total += Math.floor(value / 3) - 2;
      value = Math.floor(value / 3) - 2;
    }
  });
  return total;
};
