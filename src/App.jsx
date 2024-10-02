import './App.css'
import CustomerList from './CustomerList'
import Laskuri from './Laskuri'
import {useState} from'react'

function App() {

  //State määrittää näytetäänkö laskuri
  const [showLaskuri, setShowLaskuri] = useState(false)
  

  return (
      <div>
        <h1>Northwind Corporation</h1>

        <CustomerList />

        {
        showLaskuri ? <button onClick={() => setShowLaskuri(false) } >Piilota laskuri </button> :
         <button onClick={() => setShowLaskuri(true) } >Näytä laskuri</button>
        }



        {/* //Laskuri-komponentti, jolle välitetään otsikko propsina */}
        {showLaskuri && <Laskuri otsikko="Laskuri" /> }




      </div>
    
  )
}

export default App
