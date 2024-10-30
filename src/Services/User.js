// Tämä palvelu hoitaa http pyyntöjen tekemisen
import axios from 'axios'

const baseUrl = 'https://localhost:7215/api/users'


    const getAll = () => {
        const request = axios.get(baseUrl)
        return request.then(response => response.data)
    }

    const addNew = (object) => {
        const request = axios.post(baseUrl, object)
        return request.then(response => response.data)
    }

    const remove = (id) => {
        const request = axios.delete(baseUrl + "/" + id)
        return request.then(response => response.data)
    }

    const edit = (object) => {
        const request = axios.put(baseUrl + "/" + object.userID, object)
        return request.then(response => response.data)
    }

    export default {getAll, addNew, remove, edit}