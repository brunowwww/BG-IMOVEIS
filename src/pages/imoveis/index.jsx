import { useEffect, useState } from "react";
import Card from "../../components/card";
import Header from "../../components/header";
import api from "../../services/api";
import "./imoveis.modules.css";
import Footer from "../../components/footer";
import Modal from "../../components/modal";
import close from "../../assets/imoveis/fechar.png";
import Mapa from "../../components/mapa";

export default function Imoveis() {
  const [ArrImoveis, setArrImoveis] = useState(); //Declara o State que vai receber a resposta da API (Esse State é alterado na ordenação)
  const [ArrOriginal, setArrOriginal] = useState(); //Declara o State que vai receber a resposta da API e se manter original (Esse State não é alterado na ordenação)
  const [stateVisibilidade, setStateVisibilidade] = useState(false); //Declara o state de visibilidade da modal
  const [stateInfosCard, setStateInfosCard] = useState({}); //Declara o state de visibilidade de informações passadas para a modal

  useEffect(() => {
    api
      .get("/imoveis") // Faz o GET na API
      .then((response) => {
        const dataComIds = response.data.map((item, index) => ({
          ...item, // Copia todas as propriedades do item original
          id: index + 1, // Adiciona a propriedade `id`, começando de 1
        }));

        setArrImoveis(dataComIds); // Seta o state com a resposta da API, incluindo os IDs
        setArrOriginal(dataComIds); // Seta o state original com a resposta da API, incluindo os IDs
      })
      .catch((err) => {
        console.error("Algo inesperado ocorreu:" + err); //Mostra mensagem no console em caso de erro
      });
  }, []);

  let imoveis = []; // Declara uma variável com uma array vazia, que receberá os componentes que aparecerão na tela
  ArrImoveis?.map((imovel) => {
    // mapeia o State para pegar cada posição da array
    const cardImovel = (
      <Card //Componente criado para ser o card de cada imóvel
        id={imovel.id} //Passa, por parâmetro, a informação do id do imóvel
        preco={imovel.planta.preco} //Passa, por parâmetro, a informação do preço do imóvel
        rua={imovel.rua} //Passa, por parâmetro, a informação do endereco do imóvel
        bairro={imovel.bairro} //Passa, por parâmetro, a informação do endereco do imóvel
        img={imovel.fachada} //Passa, por parâmetro, a informação da imagem do imóvel
        dorms={imovel.planta.dorms} //Passa, por parâmetro, a informação da quantidade de dormitorios do imóvel
        metragem={imovel.planta.metragem} //Passa, por parâmetro, a informação da metragem do imóvel
        vagas={imovel.planta.vagas} //Passa, por parâmetro, a informação da quantidade de vagas do imóvel
        onclick={() => {
          setStateVisibilidade(true); //seta a visibilidade da modal como true
          setStateInfosCard({
            latitude: imovel.location._lat, //passa a latitude do imóvel para um state
            longitude: imovel.location._long, //passa a longitude do imóvel para um state
          });
          document.querySelector("body").style.overflow = "hidden";
        }}
      />
    );
    imoveis.push(cardImovel); //faz um push de cada card e monta uma array com todos os cards para serem exibidos na tela
  });

  function Ordena() {
    //função que ordena os imoveis
    const selected = document.querySelector("#ordens option:checked")?.value; //pega, por meio do querySelector, o valor da opção checada no select

    if (selected === "Novidades") {
      // se a opção selecionada for a de "Novidades"
      setArrImoveis([...ArrOriginal]); // Retorna à array original
    } else {
      // Senão
      let sortedArray = [...ArrImoveis]; //faz uma cópia da array

      if (selected === "Menor") {
        // se a opção selecionada for a de "Menor preço"
        sortedArray.sort((a, b) => a.planta.preco - b.planta.preco); // Ordena a array, deixando em ordem crescente
      } else if (selected === "Maior") {
        // se a opção selecionada for a de "Maior preço"
        sortedArray.sort((a, b) => b.planta.preco - a.planta.preco); // Ordena a array, deixando em ordem Decrescente
      }

      setArrImoveis(sortedArray); //Seta o state da array com a array ordenada
    }
  }
  return (
    <>
      <Modal
        visibilidade={stateVisibilidade} //controla a visibilidade da modal
        setStateVisibilidadeModal={setStateVisibilidade}
      > {/*Componente de Modal*/}
        <>
          <div className="conteudo_modal">
            <div className="conteudo_modal_linhaFechaModal">
              <button
                onClick={() => {
                  setStateVisibilidade(false); //seta a visibilidade da modal como falsa
                  document.querySelector("body").style.overflow = "scroll";
                }}
              >
                <img src={close} alt="fechar modal" />
              </button>
            </div>
            <div className="containerMapa">
              {stateInfosCard &&
              stateInfosCard.latitude &&
              stateInfosCard.longitude ? (
                <Mapa
                  latitude={stateInfosCard.latitude}
                  longitude={stateInfosCard.longitude}
                /> //Componente do mapa
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      </Modal>
      <div className="PagInicial">
        <Header /> {/* Componente do Cabeçalho */}
        {/* ==============Section da linha de quantidade de imóveis/opções de ordenação============== */}
        <section className="containerQuantidadeOrdenacao">
          <h2 className="textoImoveisDisponiveis">
            {ArrImoveis?.length} Imóveis disponíveis
          </h2>
          <div className="containerOrdenacao">
            <p className="textoOrdenacao">Ordenar por:</p>
            <select
              name="select"
              onChange={Ordena} /* Na mudança, chama a função de ordenação */
              id="ordens"
              className="selecionarOrdenacao"
            >
              <option value="Novidades">Novidades</option>
              <option value="Menor">Menor preço</option>
              <option value="Maior">Maior preço</option>
            </select>
          </div>
        </section>
        {/* ==============/Section da linha de quantidade de imóveis/opções de ordenação============== */}
        {/* ==============Section dos Cards dos imóveis============== */}
        <section className="containerCards" id="NossosImoveis">
          <div className="cards">{imoveis}</div>
        </section>
        {/* ==============/Section dos Cards dos imóveis============== */}
        {/* Componente do Rodapé */}
        <Footer />
        {/* /Componente do Rodapé */}
      </div>
    </>
  );
}
