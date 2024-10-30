import './App.css'
import CustomerList from './Customers/CustomerList'
import Laskuri from './Laskuri'
import {useState} from'react'
import Message from './Message'
import UserList from './Users/UserList'

//Navigointi ja bootstrap importit
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {


//Messageen liittyvät statet
  const [message, setMessage] = useState("")
  const [showMessage, setShowMessage] = useState(false)
  const [isPositive, setIsPositive] = useState(false)

  

  return (
      <div>

        <Router>

        <Navbar bg="dark" variant="dark">
            <Nav justify variant="tabs"className="mr-auto">
                <Nav.Link href='/customers'>Customers</Nav.Link>
                <Nav.Link href='/users'>Users</Nav.Link>
                <Nav.Link href='/laskuri'>Laskuri</Nav.Link>
            </Nav>
          </Navbar>

        <h1>Northwind Corporation</h1>

        {showMessage && <Message message={message} isPositive={isPositive} />}

        <Routes>
          <Route path="/customers"
          element={<CustomerList setMessage={setMessage} setIsPositive={setIsPositive} 
          setShowMessage={setShowMessage} />}>
          </Route>

          <Route path="/users"
          element={<UserList setMessage={setMessage} setIsPositive={setIsPositive} 
          setShowMessage={setShowMessage} />}>
          </Route>
          
          <Route path="/laskuri" 
          element={<Laskuri otsikko={"Laskuri"} />}>
        </Route>
        
        </Routes>
      </Router>
      </div>
    
  )
}

export default App


 {/* <CustomerList setMessage={setMessage} setIsPositive={setIsPositive} 
        setShowMessage={setShowMessage} />

        <br/>

        {
        showLaskuri ? <button onClick={() => setShowLaskuri(false) } >Piilota laskuri </button> :
         <button onClick={() => setShowLaskuri(true) } >Näytä laskuri</button>
        }



        {/* //Laskuri-komponentti, jolle välitetään otsikko propsina */}
        // {showLaskuri && <Laskuri otsikko="Laskuri" /> } */}