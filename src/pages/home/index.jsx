import Header from "../../components/header";
import HomeCard from "../../components/homeCard";
import pool from "../../assets/home/piscina.jpg";
import gym from "../../assets/home/gym.jpg";
import "./home.modules.css";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <div className="">
      <Header /> {/* Componente de cabeçalho sendo chamado */}
      {/* Seção que comporta os Cards do menu e a imagem de fundo */}
      <section className="containerImagemCards">
        <div className="textoCards">
          <div className="textoPrincipal">
            <h1>
              Encontre aqui o seu <span>LAR</span>!
            </h1>
          </div>
          {/* div que comporta os componentes de cards do menu */}
          <div className="cards">
            {/* componentes de cards do menu, onde passamos as informações para eles por meio de parâmetros */}
            <HomeCard
              titulo="Condomínios completos"
              subtitulo="os condominios com a melhor estrutura"
              texto="Muito lazer, com piscinas, churrasqueiras, áreas de convívio e muito mais para você e sua família!"
              foto={pool}
            />
            <HomeCard
              titulo="Academia no prédio"
              subtitulo="facilidade e agilidade"
              texto="Pra você que gosta da praticidade de se exercitar sem sair de casa!"
              foto={gym}
            />
            {/* componentes de cards do menu, onde passamos as informações para eles por meio de parâmetros */}
          </div>
          {/* /div que comporta os componentes de cards do menu */}
        </div>
      </section>
      {/* /Seção que comporta os Cards do menu e a imagem de fundo */}
      <Footer />
    </div>
  );
}
