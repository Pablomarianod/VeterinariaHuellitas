import axios from 'axios'

const API = "http://localhost:8080/api";

export const registerRequest = (user) => axios.post(`${API}/registro`, user)


export const loginRequest = (user) => axios.post(`${API}/login`, user)
