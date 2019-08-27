/*
export function someAction (context) {
}
*/
import setAxiosHeaders from './helpers'
import axios from 'axios'

export function init ({ state }) {
  setAxiosHeaders(state)
}

export function getDataBarang ({ rootState }) {
  let header = setAxiosHeaders(rootState.user.user)

  return axios.get('http://localhost:4041/barang', header)
    .then(response => {
      return response
    })
}

export function addBarang ({ rootState }, form) {
  let header = setAxiosHeaders(rootState.user.user)

  return axios.post('http://localhost:4041/barang', form, header)
    .then(response => {
      return response
    })
}

export function delBarang ({ rootState }, form) {
  let header = setAxiosHeaders(rootState.user.user)

  return axios.delete(`http://localhost:4041/barang/${form.id}`, header)
    .then(response => {
      return response
    })
}

export function featchBarang ({ rootState }, form) {
  let header = setAxiosHeaders(rootState.user.user)

  return axios.get(`http://localhost:4041/barang/${form.id}`, header)
    .then(response => {
      return response.data
    })
}

export function updateBarang ({ rootState }, form) {
  let header = setAxiosHeaders(rootState.user.user)

  return axios.patch(`http://localhost:4041/barang/${form.id}`, form, header)
    .then(response => {
      return response.data
    })
}
