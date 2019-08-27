/*

export default {
  token: localStorage.getItem('token') || ' '
}

 */
import { LocalStorage } from 'quasar'

export default {
  user: LocalStorage.getItem('user')
}
