
import miImagen from './assets/logo.png';
import './encabezado.css'

function Encabezado() {
    return (
        <div className='encabezadoDiv'>
            <Logotipo />
            <Menu />
            <Redes />
        </div>
    )

}

function Logotipo() {
    return (
        <div className='logoDiv'>
            <img src={miImagen} alt='Logotipo' />
        </div>
    )
}

function Menu() {
    return (
        <div className='menuDiv'>
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
        <div className='redesDiv'>
            <ul>
                <li> <img src="/src/assets/facebook.png" alt='Facebook' /></li>
                <li> <img src="/src/assets/wass.png" alt='Whatssap' /></li>
                <li> <img src="/src/assets/insta.png" alt='Instagram' /></li>
                <li> <img src="/src/assets/youtube.png" alt='Youtube' /></li>
                <li> <img src="/src/assets/link.png" alt='Linkedin' /></li>
            </ul>
        </div>
    )
}
/*Para que pueda ser accedido desde otros archivos*/
export default Encabezado