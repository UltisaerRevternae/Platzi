import { ROLES, User } from "./01_enum"
const currentUser: User = {
  username: 'Pepo',
  role: ROLES.CUSTOMER
}

const checkAdminRole = (value: User): boolean => {
  if (value.role === ROLES.ADMIN) {
    return true
  } else {
    return false
  }
}

const checkRole = (value: User, ...roles: string[]) => {
  if (roles.includes(value.role)) {
    return true
  }
  return false
}
console.log({ role : checkAdminRole(currentUser)})
console.log({ checkAdminRole : checkRole(currentUser, ROLES.ADMIN, ROLES.CUSTOMER, ROLES.SELLER)})
