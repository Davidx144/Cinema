function Auth() {


/* const caragarUsuario = JSON.stringify(user);
console.log(caragarUsuario); */
conectar();
async function conectar(){
    const respuesta = await fetch('/api/profile', {
    /* const respuesta = fetch(`${'/api/register'}`, { */
        method: "GET",            
        headers:{
             "Content-Type": "application/json" ,
        }
    });
    const exitoso = await respuesta.json();
    if (exitoso.error === true) {
        console.log("diooooooo")
        console.log(exitoso)

    } else {
        console.log("dioooooooX2")
        console.log(exitoso)
    }
}

}

export default Auth;