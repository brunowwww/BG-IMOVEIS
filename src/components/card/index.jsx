import "./card.css";
import size from "../../assets/size.png";
import bed from "../../assets/bed.png";
import car from "../../assets/carro-esporte.png";

export default function Card({ // Componente do Card de cada Imóvel, que recebe os parâmetros para sua composição 
  preco,
  rua,
  bairro,
  img,
  dorms,
  vagas,
  metragem,
}) {
  return (
    <div className="containerCard">
      <img className="imagem" src={img} />

      <div className="infos">
        <p className="preco">R$ {preco.toLocaleString("pt-BR")}</p>
        <p className="endereco">
          {rua}, {bairro}
        </p>
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
      </div>
    </div>
  );
}
