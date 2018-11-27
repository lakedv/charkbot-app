import axios from 'axios'

export const register = newUser => {
    return axios
    .post('usuarios/register', {
        name: newUser.name,
        username: newUser.username,
        email: newUser.email,
        password: newUser.password
    })
    .then(response => {
        console.log('Registered')
    })
}

export const login = user => {
    return axios
    .post('usuarios/login', {
        email: user.email,
        password: user.password
    })
    .then(response => {
        localStorage.setItem('usertoken', response.data)
        return response.data
    })
    .catch(err => {
        console.log(err)
    })
}