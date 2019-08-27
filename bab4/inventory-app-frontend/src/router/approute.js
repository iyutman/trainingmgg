
const approute = [
  {
    path: '/login',
    name: 'login',
    component: () => import('layouts/Login.vue')
  },
  {
    path: '/list-barang',
    name: 'barang',
    // component: () => import('pages/List-barang')
    component: () => import('layouts/Login')
  },
  {
    path: '/list-customer',
    name: 'customer',
    // component: () => import('pages/List-customer')
    component: () => import('layouts/Login')
  },
  {
    path: '/list-tranbeli',
    name: 'tranbeli',
    // component: () => import('pages/List-tranbeli')
    component: () => import('layouts/Login')
  },
  {
    path: '/list-tranjual',
    name: 'tranjual',
    // component: () => import('pages/List-tranjual')
    component: () => import('layouts/Login')
  }
]

export default approute
