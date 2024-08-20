import "./header.modules.css";
import user from "../../assets/header/user.png";

export default function Header() {
  // Componente de cabeçalho da página

  const menuHamburguer = document.querySelector(".menu-hamburguer"); // seleciona o elemento de menu-hamburguer, utilizado na responsividade da pagina

  function toggleMenu() {
    debugger;
    //função de ativar/desativar o menu responsivo
    const nav = document.querySelector(".navbar-responsive"); // seleciona a navbar responsiva
    const header = document.querySelector(".containerHeader"); // seleciona a div de container do cabeçalho
    menuHamburguer?.classList.toggle("change"); // "desliga" a classe 'change' do menu-hamburguer

    if (menuHamburguer?.classList.contains("change")) {
      // se o menu hamburguer possui a classe 'change'
      nav.style.display = "block"; // muda a navbar responsiva de invisivel para visivel
      header.style.position = "absolute"; //muda a posicao do cabeçalho por causa da nav responsiva
    } else {
      nav.style.display = "none"; // muda a navbar responsiva de visivel para invisivel
      header.style.position = "relative"; //muda a posicao do cabeçalho por causa da nav responsiva
    }
  }
  return (
    <div className="containerHeader">
      <a href="#" class="logo">
        BG IMÓVEIS
      </a>
      {/* navbar que aparece em telas maiores */}
      <div className="navbar">
        <a href="/">Home</a>
        <a href="/imoveis">Nossos Imóveis</a>
        <a href="/sobre">Sobre</a>
        <a href="#User">
          <img
            src={user}
            className="imgUser"
            alt="icone para ir para o login/cadastro"
          />
        </a>
      </div>
      {/* /navbar que aparece em telas maiores */}

      {/* navbar que aparece em telas menores */}
      <div className="navbar-responsive">
        <a href="/">Home</a>
        <a href="/imoveis">Nossos Imóveis</a>
        <a href="/sobre">Sobre</a>
        {/* <a href="#User">
          <img
            src={user}
            className="imgUser"
            alt="icone para ir para o login/cadastro"
          />
        </a> */}
      </div>
      {/* /navbar que aparece em telas menores */}
      {/* Menu hamburguer que aparece em telas menores */}
      <div className="menu-hamburguer" onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      {/* /Menu hamburguer que aparece em telas menores */}
    </div>
  );
}
