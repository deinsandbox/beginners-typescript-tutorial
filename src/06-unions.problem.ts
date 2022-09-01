
// type Role = ('admin' | 'user' | 'super-admin')

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
//   role: Role;
// }

type RoleAttributes = (| { role: "admin", password: string } | { role: "user" } | {role: "super-admin", password: string})

type User = {
  id: number,
  firstName: string,
  lastName: string
} & RoleAttributes /* Discriminated Union Type */

type Role = RoleAttributes['role'] /* Derived Type */

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: "admin",
  password: 'p4ssw0rd'
}

const logRole = (role: Role) =>{ 
  console.log(role)
}

logRole('user')
