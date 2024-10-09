import './App.css'
import CustomerList from './Customers/CustomerList'
import Laskuri from './Laskuri'
import {useState} from'react'
import Message from './Message'

function App() {

  //State määrittää näytetäänkö laskuri
  const [showLaskuri, setShowLaskuri] = useState(false)

//Messageen liittyvät statet
  const [message, setMessage] = useState("")
  const [showMessage, setShowMessage] = useState(false)
  const [isPositive, setIsPositive] = useState(false)

  

  return (
      <div>
        <h1>Northwind Corporation</h1>

        {showMessage && <Message message={message} isPositive={isPositive} />}

        <CustomerList setMessage={setMessage} setIsPositive={setIsPositive} 
        setShowMessage={setShowMessage} />

        <br/>

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
