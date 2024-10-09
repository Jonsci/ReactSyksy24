import '../App.css'
import React, {useState} from 'react'
import CustomerService from '../Services/Customer'

// Komponentti ottaa vastaan propsina setAdding tilanmuutos metodin,
// jolla adding tila voidaan muuttaa falseksi kun painetaan back -nappia
const CustomerAdd = ({setAdding, setMessage, setIsPositive, setShowMessage}) => {

// Komponentin tilan määritys

const [newCustomerId, setNewCustomerId] = useState('')
const [newCompanyName, setNewCompanyName] = useState('')
const [newContactName, setNewContactName] = useState('')
const [newContactTitle, setNewContactTitle] = useState('')

const [newCountry, setNewCountry] = useState('')
const [newAddress, setNewAddress] = useState('')
const [newCity, setNewCity] = useState('')

const [newPostalCode, setNewPostalCode] = useState('')
const [newPhone, setNewPhone] = useState('')
const [newFax, setNewFax] = useState('')


// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
      event.preventDefault()
      var newCustomer = {
        customerId: newCustomerId.toUpperCase(),
        companyName: newCompanyName,
        contactName: newContactName,
        contactTitle: newContactTitle,
        country: newCountry,
        address: newAddress,
        city: newCity,
        postalCode: newPostalCode,
        phone: newPhone,
        fax: newFax
    }
    
    CustomerService.addNew(newCustomer)
    .then(response => {

        //Näytetään message
      setMessage(response)
      setIsPositive(true)
      setShowMessage(true)

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
    <div id="addNew">
       <h3>Add customer</h3>

       <form onSubmit={handleSubmit}>
       <div>
                <input type="text" value={newCustomerId} placeholder="ID with 5 capital letters" maxLength="5" minLength="5"
                    onChange={({ target }) => setNewCustomerId(target.value)} required />
            </div>
            <div>
                <input type="text" value={newCompanyName} placeholder="Company name"
                    onChange={({ target }) => setNewCompanyName(target.value)} required />
            </div>
            <div>
                <input type="text" value={newContactName} placeholder="Contact name"
                    onChange={({ target }) => setNewContactName(target.value)} />
            </div>
            <div>
                <input type="text" value={newContactTitle} placeholder="Contact title"
                    onChange={({ target }) => setNewContactTitle(target.value)} />
            </div>
            <div>
                <input type="text" value={newCountry} placeholder="Country"
                    onChange={({ target }) => setNewCountry(target.value)} />
            </div>
            <div>
                <input type="text" value={newAddress} placeholder="Address"
                    onChange={({ target }) => setNewAddress(target.value)} />
            </div>
            <div>
                <input type="text" value={newCity} placeholder="City"
                    onChange={({ target }) => setNewCity(target.value)} />
            </div>
            <div>
                <input type="text" value={newPostalCode} placeholder="Postal code"
                    onChange={({ target }) => setNewPostalCode(target.value)} />
            </div>
            <div>
                <input type="text" value={newPhone} placeholder="Phone"
                    onChange={({ target }) => setNewPhone(target.value)} />
            </div>
            <div>
                <input type="text" value={newFax} placeholder="Fax"
                    onChange={({ target }) => setNewFax(target.value)} />
            </div>
         
         <input type='submit' value='save' />
         {" "}
         <input type='button' onClick={() => setAdding(false)} value='back' />

       </form>

    </div>
  )
}

export default CustomerAdd