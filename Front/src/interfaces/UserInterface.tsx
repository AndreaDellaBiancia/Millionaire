import Role from "./RoleInterface";

interface User {
 id? : number,
 username?: string,
 email?: string,
 password?: string,
 points?: number,
 role?: Role
 }

 export default User;