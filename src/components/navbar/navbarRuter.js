import { Nav } from 'react-bootstrap';
import NavbarP from '../navbar/navbar'
/* navbarRuter() */
async function navbarRuter(props) {
    const respuesta = await fetch('/api/profile', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const exitoso = await respuesta.json();
    if (exitoso.error === true) {
        console.log("Aun no ingresa")
        console.log(exitoso)
        /* isLoggedIn = false */
        /* return (<NavbarUser />) */
        /*             var test = exitoso.name;
                  return test */
        /* return exitoso */
    } else {
        console.log("Usuario ingresado")
        console.log(exitoso)
        console.log("Bienbenido ", exitoso.name)
        console.log("El tipo de usuario es", exitoso.type)
        /* isLoggedIn = true */
        /* vari = exitoso.stringify */
        return (<NavbarP />)
    }

}
export default navbarRuter