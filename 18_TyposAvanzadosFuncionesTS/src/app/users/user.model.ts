import { BaseModel } from "../base.models";

enum ROLES {
  ADMIN = "SuperAdmin",
  SELLER = "Minivendedor",
  CUSTOMER = "Cliente?"
}

interface User extends BaseModel{
  username: string,
  role: ROLES
}

export { User, ROLES}
