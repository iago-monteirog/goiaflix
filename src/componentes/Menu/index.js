import './Menu.css'
import Logo from '../../assets/img/Logo.png'

const Menu = () => {
    return (
        <nav className="Menu ">
            <a href="/">
                <img className="Logo" src={Logo} alt="AluraFlix logo" />
            </a>
            <a className="ButtonLink" href="/">
                Novo vídeo
            </a>
        </nav>
    )
}

export default Menu