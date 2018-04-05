import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/owners'

let token = null

const config = () => {
  return {
    headers: { 'Authorization': token }
  }
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject, config())
  return response.data
}

const update = (identity, newObject) => {
  const request = axios.put(`${baseUrl}/${identity}`, newObject, config())
  return request.then(response => response.data)
}

const remove = (identity) => {
  const request = axios.delete(`${baseUrl}/${identity}`, config())
  return request.then(response => response.data)
}

export default { getAll, create, update, remove, setToken }