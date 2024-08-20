import Header from "../../components/header";
import "./sobre.modules.css";
import Footer from "../../components/footer";

export default function Sobre() {
  return (
    <div>
      <Header />
      <article className="containerSobre">
        <h1>Sobre a BG Imóveis</h1>
        <p>
          A BG Imóveis é a maior plataforma de moradia da América Latina e
          oferece uma experiência direta, simples e transparente para quem busca
          alugar, comprar ou vender um imóvel. Com a BG Imóveis, os inquilinos
          alugam com facilidade, e os compradores têm maior transparência ao
          longo de toda a transação. A startup encontra-se no top 5 das empresas
          com maior valor de mercado na América Latina, com uma presença
          consolidada em 75 cidades brasileiras. A BG Imóveis é reconhecido como
          a 5ª marca mais valiosa no Brasil, de acordo com WPP, Design Bridge
          and Partners e TM20. Além disso, é destacada como Top of Mind em sua
          categoria, de acordo com o Datafolha, e é a preferida dos brasileiros
          nas cidades em que atua, conforme Ipsos. No âmbito digital, a BG
          Imóveis é uma das marcas imobiliárias mais buscadas no Brasil,
          representando 25% do total de pesquisas no Google. Em 2023, alcançou a
          maior parcela de tráfego direto do setor imobiliário, de acordo com o
          Similarweb, com mais de 10 milhões de visitas mensais no site.
        </p>
        <br />
        <p>
          A fiança de aluguel número 1 do Brasil. Só quem é líder e pioneira em
          fiança locatícia, garante a análise de crédito mais confiável do
          mercado, proporcionando às imobiliárias, uma carteira de clientes
          saudável. Para inquilinos e proprietários, oferecemos maior
          praticidade, segurança e agilidade na hora de alugar um imóvel.
        </p>
        <br />
        <p>
          Através da Rede BG Imóveis, mais de 80 mil imóveis de imobiliárias
          parceiras estão listados na plataforma. Além disso, a Rede BG Imóveis
          facilita a marcação de visitas, registrando mais de 150 mil visitas
          agendadas por meio dessa colaboração. Essa expansão regional e
          parceria com diversos agentes do mercado imobiliário reforçam a
          presença e alcance significativos do BG Imóveis no setor.
        </p>
      </article>
      <Footer />
    </div>
  );
}
