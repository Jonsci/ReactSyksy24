import '../App.css'
import { useState } from 'react'
import CustomerService from '../Services/Customer'


// props on otettu vastaan suoraan nimellä suluissa
const Customer = ({customer,setMessage, setIsPositive, setShowMessage}) => {

// Komponentin tilan määritys
const [showDetails, setShowDetails] = useState(false)

//Poistometodi
const deleteCustomer = (cust) => {
  let answer = window.confirm(`Remove customer: ${cust.companyName}?`)

  if (answer === false) {
    return
  }

  //Jos käyttäjä hyvksyy poiston, kutsutaan CustomerServicen delete metodia
  CustomerService.remove(cust.customerId)
  .then(response => {

    //Näytetään message
  setMessage(response)
  setIsPositive(true)
  setShowMessage(true)
  window.scrollBy(0, -10000) // Scrollataan ylös jotta nähdään alert :)

    // Messagen piilotus
    setTimeout(() => 
        setShowMessage(false)
    , 4000)

  })
  .catch(error => {
   //Näytetään message virhetilanteessakin
   setMessage(error.message)
   setIsPositive(false)
   setShowMessage(true)

     // Messagen piiloitus
     setTimeout(() => 
         setShowMessage(false)
     , 4000)
  })
}


  return (
    <div>
        
    {showDetails && <h2 style={{cursor: 'crosshair'}} onClick={() => setShowDetails(!showDetails)}>
      {customer.companyName}</h2>}

    {!showDetails && <h5 style={{cursor: 'crosshair'}} onClick={() => setShowDetails(!showDetails)}>
      {customer.companyName}</h5>}





     {/* Tämä on toinen tapa tehdä sama asia kuin yllä */}
       {/* <h4 onMouseEnter={() => setShowDetails(true)}
       onMouseLeave={() => setShowDetails(false)}
       >
           {customer.companyName}
        </h4> */}

       
       {showDetails && <div className="customerDetails">
            <button>Edit</button>
            <button onClick={() => deleteCustomer(customer)}>Delete</button>
            <table>
                    <thead>
                        <tr>
                            <th>Contact person</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{customer.contactName}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.address}</td>
                            <td>{customer.city}</td>
                            <td>{customer.country}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                }

    </div>
  )
}

export default Customer