import "./footer.modules.css";
import logo from "../../assets/footer/Logo.png";
import instagram from "../../assets/footer/instagram.png";
import linkedin from "../../assets/footer/linkedin.png";
import facebook from "../../assets/footer/facebook.png";

export default function Footer() { // Componente de footer
  return (
    <>
      <div className="containerFooter">
        <div className="esquerda">
          <img className="logo" src={logo} />
          <p className="texto">&copy; 2024 Todos os direitos reservados</p>
        </div>
        <div className="direita">
          <div className="containerPaginas">
            <a href="/">Home</a>
            <a href="/imoveis">Nossos Imóveis</a>
            <a href="/sobre">Sobre</a>
          </div>
          <div className="containerRedes">
            <a href="#">
              <img src={instagram} />
            </a>
            <a href="#">
              <img src={linkedin} />
            </a>
            <a href="#">
              <img src={facebook} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
