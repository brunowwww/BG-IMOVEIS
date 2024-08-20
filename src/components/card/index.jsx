import "./card.modules.css";
import size from "../../assets/card/size.png";
import bed from "../../assets/card/bed.png";
import car from "../../assets/card/carro-esporte.png";

export default function Card({
  // Componente do Card de cada Imóvel, que recebe os parâmetros para sua composição
  id,
  preco,
  rua,
  bairro,
  img,
  dorms,
  vagas,
  metragem,
  onclick,
}) {
  return (
    <div className="containerCard" id={id} onClick={onclick}>
      <img className="imagem" src={img} />{" "}
      {/* Imagem do card, que é recebida por meio de parâmetros */}
      {/* div de informações do card */}
      <div className="infos">
        <p className="preco">R$ {preco.toLocaleString("pt-BR")}</p>{" "}
        {/* preço exibido no card por meio de parâmetro  (preco.toLocaleString("pt-BR") serve pora colocarmos os . e , correspondentes na visualização do card)*/}
        <p className="endereco">
          {rua}, {bairro}
        </p>{" "}
        {/*Endereço exibido no card por meio de dois parâmetros, o de RUA e o Bairro do imóvel */}

        {/*Div de especificações, como a metragem, dormitorios e vagas do imóvel */}
        <div className="especificacoes">
          <div className="metragem">
            <img alt="metragem" className="imgMetragem" src={size} />
            <p>
              {metragem}m<sup>2</sup>
            </p>
          </div>
          <div className="dorms">
            <img alt="cama" className="imgDorms" src={bed} />
            <p>{dorms}</p>
          </div>
          {vagas ? (
            <div className="vagas">
              <img alt="vagas" className="imgCar" src={car} />
              <p>{vagas}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
        {/*Div de especificações, como a metragem, dormitorios e vagas do imóvel */}
      </div>
      {/* /div de informações do card */}
    </div>
  );
}
