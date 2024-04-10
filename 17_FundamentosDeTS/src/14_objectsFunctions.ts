(() => {

  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const login = (data: {email: string, password: number}) => {
    console.log({ email: data.email, password: data.password });
  };

  login({
    email: 'asdasd@asd',
    password: 54713554
  });

  const products: any[] = []

  const addProdict = (data: {
    title: string,
    createdAt : Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data)
    console.log(products)
  }

  addProdict({
    title: 'TITLE 1',
    createdAt: new Date(1930,5,6),
    stock: 110,
  })

  addProdict({
    title: 'TITLE 2',
    createdAt: new Date(),
    stock: 130,
    size: 'XL'
  })
})();
