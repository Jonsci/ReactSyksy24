import './App.css'
import { useState, useEffect } from 'react'


function CustomerList() {

// useEffect kutsutaan aina alussa
//2. parametrina tyhjä taulukko, jotta useEffect kutsutaan vain kerran
useEffect(() => {
    fetch('https://localhost:7215/api/customers')
    .then(response => response.json()) //javascript muotoon json muodosta
    .then(data => setCustomers(data)) // asetetaan stateen nimeltä customers
}, [])
//State määrittely
const [customers, setCustomers] = useState([])
const [show, setShow] = useState(false)

function showAlert(cust) {
    alert("Contact " + cust.contactName + " by calling " + cust.phone)
}


  return (
      <div>

  <button onClick={() => setShow(!show) }>  {show ? "Hide Customers" : "Show customers"}</button>
  <br></br>

        { show && customers && customers.map(cust => (
            <h5 className='customer' onClick={() => showAlert(cust)}>
                {cust.companyName} from {cust.city},{cust.country}</h5>

        ))
        
        
        
        }

      
      </div>
  )
}

export default CustomerList

