// import something here

// "async" is optional

// export default async ({ /* app, router, Vue, ... */ }) => {
// something to do
// }

import Vuelidate from 'vuelidate'

export default ({ Vue }) => {
  Vue.use(Vuelidate)
}

// export default async ({ Vue }) => {
//   Vue.prototype.$axios = axios
// }
