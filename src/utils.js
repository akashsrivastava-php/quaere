import axios from 'axios'

const BASEURL = "https://jsonplaceholder.typicode.com/users"


export const getAll = () => {
    return axios.get(BASEURL)
    .then(res=>{
        return { status: true, data: res.data }
    })
    .catch((err) => { 
        return { status: false, msg : 'Unable to fetch data!' }
    })
}

export const getUser = (id) => {
    return axios.get(`${BASEURL}/${id}`)
    .then(res=>{
        return { status: true, data: res.data }
    })
    .catch((err) => { 
        return { status: false, msg : 'Unable to fetch data!' }
    })
}

export const add = (data) => {
    return axios.post(`${BASEURL}`, data)
    .then(res=>{
        return { status: true, data: res.data }
    })
    .catch((err) => { 
        return { status: false, msg : 'Invalid credentials!' }
    })
}

export const update = (id, data) => {
    return axios.put(`${BASEURL}/${id}`, data)
    .then(res=>{
        return { status: true, data: res.data }
    })
    .catch((err) => { 
        return { status: false, msg : 'Something went wrong!' }
    })
}

export const deleteUser = (id) => {
    return axios.delete(`${BASEURL}/${id}`)
    .then(res=>{
        return { status: true, data: res.data }
    })
    .catch((err) => { 
        return { status: false, msg : 'Something went wrong!' }
    })
}