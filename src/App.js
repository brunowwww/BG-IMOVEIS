import "./App.css";
import React, { useEffect, useState } from "react";
import api from "./services/api";
import Header from "./components/header";
import Card from "./components/card";

export default function App() {
  const [ArrImoveis, setArrImoveis] = useState();

  useEffect(() => {
    api
      .get("/imoveis")
      .then((response) => setArrImoveis(response.data))
      .catch((err) => {
        console.error("Algo inesperado ocorreu:" + err);
      });
  }, []);
  let imoveis = [];
  // console.log(ArrImoveis);

  ArrImoveis?.map((imovel) => {
    const cardImovel = (
      <Card
        preco={imovel.planta.preco}
        rua={imovel.rua}
        bairro={imovel.bairro}
        img={imovel.fachada}
        dorms={imovel.planta.dorms}
        metragem={imovel.planta.metragem}
        vagas={imovel.planta.vagas}
      />
    );
    imoveis.push(cardImovel);    
  });
  function Ordena() {
    const selected = document.querySelector("#ordens option:checked")?.value;
    let sortedArray = [...ArrImoveis];
    if (selected === "Menor") {
      sortedArray?.sort((a, b) => a.planta.preco - b.planta.preco);
      
    } else if (selected === "Maior") {
      sortedArray?.sort((a, b) => b.planta.preco - a.planta.preco);
    }
    setArrImoveis(sortedArray);
  }

  return (
    <div className="PagInicial">
      <Header />
      {/* ==============Section da linha de quantidade de imóveis/opções de ordenação============== */}
      <section className="containerQuantidadeOrdenacao">
        <h2 className="textoImoveisDisponiveis">
          {ArrImoveis?.length} Imóveis disponíveis
        </h2>
        <div className="containerOrdenacao">
          <p className="textoOrdenacao">Ordenar por:</p>
          <select name="select" onChange={Ordena} id="ordens" className="selecionarOrdenacao">
            <option value="Menor">Menor preço</option>
            <option value="Maior">Maior preço</option>
            <option value="Novidades">Novidades</option>
          </select>
        </div>
      </section>
      <div className="containerCards">
        <div className="cards">{imoveis}</div>
      </div>
    </div>
  );
}
