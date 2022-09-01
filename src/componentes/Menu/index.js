import './Menu.css'
import Logo from '../../assets/img/Logo.png'
import Button from '../Button'

const Menu = () => {
    return (
        <nav className="Menu ">
            <a href="/">
                <img className="Logo" src={Logo} alt="GoiaFlix logo" />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu