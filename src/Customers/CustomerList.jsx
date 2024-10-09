import '../App.css'
import { useState, useEffect } from 'react'
import CustomerService from '../Services/Customer'
import Customer from './Customer'
import CustomerAdd from './CustomerAdd'

//Messagen asettamiseen liittyvät metodit on välitetty tälle komponentille
function CustomerList({setMessage, setIsPositive, setShowMessage}) {



// useEffect kutsutaan aina alussa
//2. parametrina tyhjä taulukko, jotta useEffect kutsutaan vain kerran
useEffect(() => {
    CustomerService.getAll()
    // fetch('https://localhost:7215/api/customers')
    // .then(response => response.json()) //javascript muotoon json muodosta
    .then(data => setCustomers(data)) // asetetaan stateen nimeltä customers
}, [])

//State määrittely
const [customers, setCustomers] = useState([])
const [show, setShow] = useState(false)
const [adding, setAdding] = useState(false)
//Hakukentän state 
const [search, setSearch] = useState("")




// function showAlert(cust) {
//     alert("Contact " + cust.contactName + " by calling " + cust.phone)
// }


  return (
      <div>

  <button onClick={() => setShow(!show)}>{show ? "Hide Customers" : "Show customers"}</button>


        {show && adding && <CustomerAdd setMessage={setMessage} setIsPositive={setIsPositive} 
        setShowMessage={setShowMessage}setAdding={setAdding} />}

        {show && !adding && <button onClick={() => setAdding(true)}>Add New Customer</button>}

        <br/>
        <br/>

        {show && !adding && <input type="text" placeholder='Search by Company Name'
         value={search} onChange={({target}) => setSearch(target.value)} />}

        {show && customers && customers.map(cust =>  {

                const lowerCaseName = cust.companyName.toLowerCase()

                if (lowerCaseName.indexOf(search) > -1) {
                    return(
            <Customer key={cust.customerId} customer = {cust}
            setMessage={setMessage}setIsPositive={setIsPositive} 
            setShowMessage={setShowMessage} />
            )          
          }
        

        })
        }

      
      </div>
  )
}

export default CustomerList

