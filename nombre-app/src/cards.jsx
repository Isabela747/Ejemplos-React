import perritoImg from "./assets/perrito.jpg"
import huskyImg from "./assets/husky.jpg"
import cafesitoImg from "./assets/cafesito.jpg"
import "./cards.css"

function Cards() {
  return (
    <>
      <section className="cards-container">
        <div className="cards">
          <div className="card-item">
            <img src={perritoImg} alt="Perrito" className="card-img" />
            <h3>Perrito</h3>
            <p>Un amigable compañero de cuatro patas, tierno y juguetón.</p>
          </div>

          <div className="card-item">
            <img src={huskyImg} alt="Husky" className="card-img" />
            <h3>Husky</h3>
            <p>Un husky con mirada intensa y pelaje esponjoso.</p>
          </div>

          <div className="card-item">
            <img src={cafesitoImg} alt="Cafesito" className="card-img" />
            <h3>Cafesito</h3>
            <p>Hola, solo soy un perrito.</p>
          </div>
        </div>
      </section>
      <section className="info-container">
        <h2>Nuestros Perritos</h2>
        <p>Descubre más sobre nuestros adorables compañeros peludos. Cada uno tiene su propia personalidad única, recuerda que cada animalito es una sonrisa en tu hogar.</p>
      </section>
    </>
  )
}

export default Cards



