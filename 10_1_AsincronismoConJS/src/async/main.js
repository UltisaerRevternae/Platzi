resolvePromise = (time) => {
  return  new Promise((resolve) => {
    setTimeout(() => resolve('HH'), time)
  })
}

asyncCall = async (time) => {
  console.log('calling');
  const result = await resolvePromise(time);
  console.log(result);
  console.log('finish');
}

asyncCall(0)
console.log('asdaasd');
