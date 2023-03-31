let dbUsers = [
    {
        username: "wanzu",
        password: "nohrokiah",
        name: "Wan Zuhaida",
        email: "wanzu@utem.edu.my"
    },
    {
        username: "alif",
        password: "Keping",
        name: "Alif Haikal",
        email: "alifhaikal@utem.edu.my"
    },
    {
        username: "azizah kamariah",
        password: "kamariah rogayah",
        name: "Azizah Zainal",
        email: "jijah@utem.edu.my"
    },
    {
        username: "fadhilawa",
        password: "fadhazian",
        name: "Fadhila Azian",
        email: "fadh@utem.edu.my"
    }
]

function login(username, password){
  console.log("someone try to login with", username, password)
  let matched = dbUsers.find(element => 
     element.username == username
  )
  if (matched) {
       if(matched.password == password){
            return matched
        } else {
            return "Pasword not matched"
        } 
    }
  else {
        return "Username not found"
    }
}
function register (newusername, newpassword, newname, newemail) {
    //TODO : CHECK IF USEERNAME EXIST
    dbUsers.push({
        username: newusername,
        password: newpassword,
        name: newname,
        email: newemail
    })
}
//try to login
//login("wanzu","noh rokiah")
//login("wanzu","12345")

console.log(login("alif","Keping"))
register("ana","anana","Anarusni","ana@utem.edu.my")

console.log(login("ana","anana"))
