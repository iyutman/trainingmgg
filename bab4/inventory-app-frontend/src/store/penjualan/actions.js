/*
export function someAction (context) {
}
*/
import setAxiosHeaders from '../barang/helpers'
import axios from 'axios'
const populate = '?$populate[]=transjualDetail.barangId&$populate=pembeliId'

export function getDataPenjualan ({ rootState }) {
  let header = setAxiosHeaders(rootState.user.user)

  return axios.get(`http://localhost:4041/transaksi-jual/${populate}`, header)
    .then(response => {
      return response
    })
}

export function addPenjualan ({ rootState }, form) {
  let header = setAxiosHeaders(rootState.user.user)

  return axios.post('http://localhost:4041/transaksi-jual', form, header)
    .then(response => {
      return response
    })
}

export function delPenjualan ({ rootState }, form) {
  let header = setAxiosHeaders(rootState.user.user)

  return axios.delete(`http://localhost:4041/transaksi-jual/${form.id}`, header)
    .then(response => {
      return response
    })
}

export function featchPenjualan ({ rootState }, form) {
  let header = setAxiosHeaders(rootState.user.user)

  // return axios.get(`http://localhost:4041/transaksi-jual/${form.id}/${populate}`, header)
  return axios.get(`http://localhost:4041/transaksi-jual/${form.id}`, header)
    .then(response => {
      return response.data
    })
}

export function updatePenjualan ({ rootState }, form) {
  let header = setAxiosHeaders(rootState.user.user)

  return axios.patch(`http://localhost:4041/transaksi-jual/${form.id}`, form, header)
    .then(response => {
      return response.data
    })
}
