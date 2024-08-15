import "./header.css";
export default function Header() { // Componente de cabeçalho da página
  return (
    <div className="containerHeader">
      <a href="#" class="logo">
        BG IMÓVEIS
      </a>

      <div>
        <a href="#">Nossos Imóveis</a>
        <a href="#">Comprar</a>
        <a href="#">Sobre</a>
        <a href="#">User</a>
      </div>
    </div>
  );
}
