import Encabezado from "./encabezado"
import Expersion from "./expersiones"
import "./App.css"

import perritoImg from "./assets/perrito.jpg"
import huskyImg from "./assets/husky.jpg"
import cafesitoImg from "./assets/cafesito.jpg"

function App() {
  return (
    <div>
      <Encabezado />
      <Expersion />

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

      <h1 className="color">#5C DSM</h1>
      <h2>Margaret Isabela Rojas de Leon</h2>
    </div>
  )
}

export default App