import './App.css'
import { useState } from 'react'


function Laskuri({otsikko}) { //propsit otetaan vastaan parametrina

//Laskurikomponentin tila, joka on nimeltään luku ja alustetaan nollaan
//setLuku funktiota kutsumalla voidaan asettaa luku state 
//Aina kun state muuttuu, komponentti renderöidään uudelleen
const [luku, setLuku] = useState(0)


  return (
      <div>
        {/* //propsin avulla voidaan välittää tietoa ylemmältä tasolta alemmalle tasolle */}
        <h2>{otsikko}</h2> 

        <h4>{luku}</h4>
        {luku < 10 && <button onClick={() => setLuku(luku + 1)}>Lisää</button>} 

        {luku > 9 && <button disabled>Lisää</button>}

        <button onClick={() => setLuku(luku - 1)}>Vähennä</button>
        <button onClick={() => setLuku(0)}>Nollaa</button>
        <br />

        <input type="number" value={luku} onChange={(e) => setLuku(parseInt(e.target.value))} />

        {/* Ternary operaattori tapa esittää ehtolause */}
        <h5>{luku > 9 ? "Pääsit kymppiin asti!" : "Sinulla on vielä matkaa kymppiin"}</h5> 

    
      </div>
  )
}

export default Laskuri
