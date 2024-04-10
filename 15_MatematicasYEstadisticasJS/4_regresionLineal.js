const linearRegression = (keys, values, predict) => {
  const N = keys.length;
  
  const sumX = keys.reduce((acc, cur) => acc + cur, 0);
  const sumY = values.reduce((acc, cur) => acc + cur, 0);
  const sumX2 = keys.reduce((acc, cur) => acc + cur ** 2, 0);
  const sumXY = keys.map((keys, index) => keys * values[index]).reduce((acc, cur) => acc + cur, 0);
  
  const M = ((N * sumXY) - (sumX * sumY)) / ((N * sumX2) - (sumX ** 2));
  const B = (sumY - M * sumX) / N;
  
  return (M * predict + B).toFixed(3);
}

export { linearRegression }