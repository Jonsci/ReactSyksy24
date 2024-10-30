import '../App.css'
import React, {useState} from 'react'
import UserService from '../Services/User'
import md5 from 'md5'

// Komponentti ottaa vastaan propsina setAdding tilanmuutos metodin,
// jolla adding tila voidaan muuttaa falseksi kun painetaan back -nappia
const UserAdd = ({setAdding, setMessage, setIsPositive, setShowMessage}) => {

// Komponentin tilan määritys
// Pitävät kirjaa input kenttien sisällöstä

const [newFirstName, setNewFirstName] = useState('')
const [newLastName, setNewLastName] = useState('')
const [newUserName, setNewUserName] = useState('')
const [newPassword, setNewPassword] = useState('') // Tämän perään tulee passun varmistus inputti
const [newAcceslevelId, setNewAcceslevelId] = useState('')





// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
      event.preventDefault()
      var newUser = {
        firstname: newFirstName,
        lastname: newLastName,
        username: newUserName,
        password: md5(newPassword),
        accesLevelId: newAcceslevelId
       
    }
    
    UserService.addNew(newUser)
    .then(response => {

        //Näytetään message
      setMessage(response)
      setIsPositive(true)
      setShowMessage(true)

    
        // Messagen piilotus
        setTimeout(() => 
            setShowMessage(false)
        , 4000)

         //Piilotetaan lisäyslomake
      setAdding(false)

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

          //Piilotetaan lisäyslomake
      setAdding(false)
      })
    }


  return (
    <div id="addNew">
       <h3>Adding new user</h3>

       <form onSubmit={handleSubmit}>
      
            <div>
                <input type="text" value={newFirstName} placeholder="First name"
                    onChange={({ target }) => setNewFirstName(target.value)} required />
            </div>
            <div>
                <input type="text" value={newLastName} placeholder="Last name"
                    onChange={({ target }) => setNewLastName(target.value)} required />
            </div>
            <div>
                <input type="text" value={newUserName} placeholder="User name"
                    onChange={({ target }) => setNewUserName(target.value)} required />
            </div>
            <div>
                <input type="password" value={newPassword} placeholder="Password"
                    onChange={({ target }) => setNewPassword(target.value)} required />
            </div>
            <div>
                <input type="number" min={1} max={2} value={newAcceslevelId} placeholder="Acces level"
                    onChange={({ target }) => setNewAcceslevelId(target.value)} required />
            </div>
       
         
         <input type='submit' value='save' />
         {" "}
         <input type='button' onClick={() => setAdding(false)} value='back' />

       </form>

    </div>
  )
}

export default UserAdd