import axios from 'axios'

//back-end >

export const register = newUser => {
    return axios
        .post('http://localhost:3001/usuarios/register', {
            name: newUser.name,
            username: newUser.username,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            alert('Usuario Registrado Correctamente!')
            console.log('Registered')
        })
        .catch(err => {
            console.log(err)
        })
}

export const addprodc = newProds => {
    var user = JSON.parse(localStorage.getItem('usertoken'))
    console.log(user.ID)
    return axios
        .post('http://localhost:3001/productos/create', {
            name: newProds.name,
            value: newProds.value,
            description: newProds.desc,
            IDuser: user.ID
        })
        .then(response => {  
            alert('Producto agregado Correctamente!')
            console.log('Registered')
        })
        .catch(err => {
            console.log(err)
        })
}

export const login = user => {
    return axios
        .post('http://localhost:3001/usuarios/login', {
            usuario: user.email,
            password: user.password
        })
        //.then(response => response.json())
        .then(json => {
            console.log(json.data.user)
            localStorage.setItem('usertoken', JSON.stringify(json.data.user))
            return json
        })
        .catch(err => {
            console.log(err)
        })
}