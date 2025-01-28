export default class UserModel{
   constructor(id,name,email,password){
    this.id = id,
    this.email = email,
    this.name = name,
    this.password = password
   }
   static add(name,email,password){
    const newUser = new UserModel(
        users.length+1,
        name,
        email,
        password
    )
    users.push(newUser)
   }
   static check(email,password){
   const result = users.find((user) => user.email == email && user.password == password)
    return result
   }
}
 const users =[]