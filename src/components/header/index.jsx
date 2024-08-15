import './header.css';
import Logo from '../../assets/Logo.png'
export default function Header() {
    return (
        <div className='containerHeader'>
            <a href="#" class="logo">BG IMÓVEIS</a>

            <a href='#' >Nossos Imóveis</a>
            <a href='#' >Comprar</a>
            <a href='#' >Sobre</a>
            <a href='#' >User</a>
        </div>
    );
}