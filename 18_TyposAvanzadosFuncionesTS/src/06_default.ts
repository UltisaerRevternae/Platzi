function createUser(
  id: number,
  name: string,
  age: number = 0
) {
  return {
    id,
    name,
    age
  };
}
