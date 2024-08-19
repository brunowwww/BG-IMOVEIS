import "./homeCard.modules.css";

export default function HomeCard({ titulo, subtitulo, texto, foto }) {
  return (
    <>
      <div class="blog-card">
        <div class="meta">
          <div
            class="photo"
            style={{backgroundImage: `url(${foto})`}}
          ></div>
        </div>
        <div class="description">
          <h1>{titulo}</h1>
          <h2>{subtitulo}</h2>
          <p>{texto}</p>
          <p class="read-more">
            <a href="/imoveis">Veja mais</a>
          </p>
        </div>
      </div>
    </>
  );
}
