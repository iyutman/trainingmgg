/*
export function someAction (context) {
}
*/
import setAxiosHeaders from '../barang/helpers'
import axios from 'axios'

export function getDataCustomer ({ rootState }) {
  let header = setAxiosHeaders(rootState.user.user)

  return axios.get('http://localhost:4041/customer', header)
    .then(response => {
      return response
    })
}

export function addCustomer ({ rootState }, form) {
  let header = setAxiosHeaders(rootState.user.user)

  return axios.post('http://localhost:4041/customer', form, header)
    .then(response => {
      return response
    })
}

export function delCustomer ({ rootState }, form) {
  let header = setAxiosHeaders(rootState.user.user)

  return axios.delete(`http://localhost:4041/customer/${form.id}`, header)
    .then(response => {
      return response
    })
}

export function featchCustomer ({ rootState }, form) {
  let header = setAxiosHeaders(rootState.user.user)

  return axios.get(`http://localhost:4041/customer/${form.id}`, header)
    .then(response => {
      return response.data
    })
}

export function updateCustomer ({ rootState }, form) {
  let header = setAxiosHeaders(rootState.user.user)

  return axios.patch(`http://localhost:4041/customer/${form.id}`, form, header)
    .then(response => {
      return response.data
    })
}
