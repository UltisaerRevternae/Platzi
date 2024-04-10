/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña.
2. El sistema debe ser capaz de validar si el usuario y 
contraseña son correctos.
3. Si el usuario y la contraseña son correctos, el sistema
debe mostrar un mensaje de bienvenida y mostrar el timeline
del usuario.
4. Si el usuario o la contraseña son incorrectos, el sistema
debe mostrar un mensaje de error y no mostrar ningun timeline.
*/

const usersDatabase = [
  { username: "andres", password: "123" },
  { username: "caro", password: "456" },
  { username: "mariana", password: "789" },
];
const usersTimeline = [
  { username: "Estefany", timeline: "Me encata Javascript!" },
  { username: "Oscar", timeline: "Bebeloper es lo mejor!" },
  { username: "Mariana", timeline: "A mi me gusta mÃ¡s el cafÃ© que el tÃ©" },
  { username: "Andres", timeline: "Yo hoy no quiero trabajar" },
];

login = (user, passwordUser) => {
  const isCorrectUserPassword = usersDatabase.find(({ username , password} ) => username.toLocaleLowerCase() === user.toLocaleLowerCase() && password === passwordUser)

  if (!!isCorrectUserPassword) {
    console.log(`Bienvenido usuario ${user} este es tu timeline`)
    const timelineUser = usersTimeline.find((data) => data.username.toLocaleLowerCase() === user.toLocaleLowerCase())
    console.log(timelineUser.timeline)
  } else {
    console.log('Error intente de nuevo')
  }  
}

login('mariana', '789')