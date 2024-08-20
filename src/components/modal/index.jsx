import "./modal.modules.css";

export default function Modal({ children, tamanho, visibilidade, setStateVisibilidadeModal }) {
  
  const modal = document.querySelector(".containerModal"); // seleciona o container da modal
  if (!visibilidade) { //se o state de visibilidade na tela de imóveis for false
    if (modal) modal.style.display = "none"; // modal fica invisivel
  } else { //senão
    modal.style.display = "flex"; //modal fica visivel
  }
  return (
    <>
      <div className="containerModal">
        <section className="containerModal_conteudo">{children}</section>
      </div>
    </>
  );
}
