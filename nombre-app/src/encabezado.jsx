
import miImagen from './assets/logo.png';

function Encabezado() {
    return (
        <div>
            <Logotipo />
            <Menu />
            <Redes />
        </div>
    )

}

function Logotipo() {
    return (
        <div>
            <img src={miImagen} alt='Logotipo' />
        </div>
    )
}

function Menu() {
    return (
        <div>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Sucursales</li>
            </ul>
        </div>
    )
}

function Redes() {
    return (
        <div>
            <ul>
                <li>Facebook</li>
                <li>Whatssap</li>
                <li>Instagram</li>
                <li>Youtube</li>
                <li>Linkedin</li>

            </ul>
        </div>
    )
}
/*Para que pueda ser accedido desde otros archivos*/
export default Encabezado