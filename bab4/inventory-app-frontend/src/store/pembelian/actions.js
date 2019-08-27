/*
export function someAction (context) {
}
*/
import setAxiosHeaders from '../barang/helpers'
import axios from 'axios'
const populate = '?$populate[]=transbeliDetail.barangId'

export function getDataPembelian ({ rootState }) {
  let header = setAxiosHeaders(rootState.user.user)

  /*
    return axios.get('http://localhost:4041/transaksi-beli', {
    'populate': {
      'path': 'users',
      'select': [
        'email'
      ]
    }
  })
    .then(response => {
      console.log(response.data)
      return response
    })
}
  */

  return axios.get(`http://localhost:4041/transaksi-beli/${populate}`, header)
    .then(response => {
      return response
    })
}

export function addPembelian ({ rootState }, form) {
  let header = setAxiosHeaders(rootState.user.user)

  return axios.post('http://localhost:4041/transaksi-beli', form, header)
    .then(response => {
      return response
    })
}

export function delPembelian ({ rootState }, form) {
  let header = setAxiosHeaders(rootState.user.user)

  return axios.delete(`http://localhost:4041/transaksi-beli/${form.id}`, header)
    .then(response => {
      return response
    })
}

export function featchPembelian ({ rootState }, form) {
  let header = setAxiosHeaders(rootState.user.user)

  // return axios.get(`http://localhost:4041/transaksi-beli/${form.id}/${populate}`, header)
  return axios.get(`http://localhost:4041/transaksi-beli/${form.id}`, header)
    .then(response => {
      return response.data
    })
}

export function updatePembelian ({ rootState }, form) {
  let header = setAxiosHeaders(rootState.user.user)

  return axios.patch(`http://localhost:4041/transaksi-beli/${form.id}`, form, header)
    .then(response => {
      return response.data
    })
}
