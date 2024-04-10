enum ROLES {
  ADMIN = "SuperAdmin",
  SELLER = "Minivendedor",
  CUSTOMER = "Cliente?"
}

type User = {
  username: string,
  role: ROLES
}

const adminUser: User = {
  username: 'Jhan' ,
  role: ROLES.ADMIN
}


export { User, ROLES}
