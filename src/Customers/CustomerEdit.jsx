import '../App.css'
import React, {useState} from 'react'
import CustomerService from '../Services/Customer'

// Komponentti ottaa vastaan propsina setAdding tilanmuutos metodin,
// jolla adding tila voidaan muuttaa falseksi kun painetaan back -nappia
const CustomerEdit = ({setEditing, custToEdit, setMessage, setIsPositive, setShowMessage}) => {


//custToEdit tulee propisina ja se on customer objekti, jota ollaan muokaamassa

// Komponentin tilan määritys
const [newCompanyName, setNewCompanyName] = useState(custToEdit.companyName)
const [newContactName, setNewContactName] = useState(custToEdit.contactName)
const [newContactTitle, setNewContactTitle] = useState(custToEdit.contactTitle)

const [newCountry, setNewCountry] = useState(custToEdit.country)
const [newAddress, setNewAddress] = useState(custToEdit.address)
const [newCity, setNewCity] = useState(custToEdit.city)

const [newPostalCode, setNewPostalCode] = useState(custToEdit.postalCode)
const [newPhone, setNewPhone] = useState(custToEdit.phone)
const [newFax, setNewFax] = useState(custToEdit.fax)


// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
      event.preventDefault()
      var newCustomer = {
        customerId: custToEdit.customerId,
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
    
    CustomerService.edit(newCustomer)
    .then(response => {

        //Näytetään message
      setMessage(response)
      setIsPositive(true)
      setShowMessage(true)

      window.scrollBy(0, -10000) // Scrollataan ylös jotta nähdään alert

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

       window.scrollBy(0, -10000)
 
         // Messagen piiloitus
         setTimeout(() => 
             setShowMessage(false)
         , 4000)
      })
    }


  return (
    <div id="addNew">
       <h3>Editing customer</h3>

       <form onSubmit={handleSubmit}>
       <div>
                <input type="text" value={custToEdit.customerId} disabled />
                    
            </div>
            <div>
                <label>Company name</label>
                <input type="text" value={newCompanyName}
                    onChange={({ target }) => setNewCompanyName(target.value)} required />
            </div>
            <div>
                <label>Contact name</label>
                <input type="text" value={newContactName}
                    onChange={({ target }) => setNewContactName(target.value)} />
            </div>
            <div>
                <label>Contact title</label>
                <input type="text" value={newContactTitle}
                    onChange={({ target }) => setNewContactTitle(target.value)} />
            </div>
            <div>
                <label>Country</label>
                <input type="text" value={newCountry} 
                    onChange={({ target }) => setNewCountry(target.value)} />
            </div>
            <div>
                <label>Address</label>
                <input type="text" value={newAddress}
                    onChange={({ target }) => setNewAddress(target.value)} />
            </div>
            <div>
                <label>City</label>
                <input type="text" value={newCity} 
                    onChange={({ target }) => setNewCity(target.value)} />
            </div>
            <div>
                <label>Postal code</label>
                <input type="text" value={newPostalCode} 
                    onChange={({ target }) => setNewPostalCode(target.value)} />
            </div>
            <div>
                <label>Phone</label>
                <input type="text" value={newPhone}
                    onChange={({ target }) => setNewPhone(target.value)} />
            </div>
            <div>
                <label>Fax</label>
                <input type="text" value={newFax}
                    onChange={({ target }) => setNewFax(target.value)} />
            </div>
         
         <input type='submit' value='save' />
         {" "}
         <input type='button' onClick={() => setEditing(false)} value='back' />

       </form>

    </div>
  )
}

export default CustomerEdit
