const layout = () => import('layouts/MyLayout.vue')

const routes = []

const home = {
  path: '/',
  component: layout,
  meta: { auth: true },
  children: [
    { path: '', name: 'home', component: () => import('pages/Index.vue') }
  ]
}

const login = {
  path: '/login',
  name: 'login',
  meta: { guest: true },
  component: () => import('layouts/Login')
}

const secured = {
  path: '/secured',
  name: 'secured',
  component: () => import('pages/Secured')
}

const logout = {
  path: '/logout',
  name: 'logout',
  meta: { auth: true, guest: true },
  beforeEnter () {
    this.$store.dispatch('user/logout')
      .then((result) => {
        location.href = 'http://localhost:8081/#/login'
      })
  }
}

const barang = {
  path: '/list-barang',
  component: layout,
  meta: { auth: true },
  children: [
    { path: '', name: 'barang', component: () => import('pages/List-barang') },
    { path: '/add-barang', name: 'barang_add', component: () => import('pages/Form-barang') },
    { path: '/edit-barang/:id', name: 'barang_edit', component: () => import('pages/Form-barang') }
  ]
}

const customer = {
  path: '/list-customer',
  component: layout,
  meta: { auth: true },
  children: [
    { path: '', name: 'customer', component: () => import('pages/List-customer') },
    { path: '/add-customer', name: 'customer_add', component: () => import('pages/Form-customer') },
    { path: '/edit-customer/:id', name: 'customer_edit', component: () => import('pages/Form-customer') }
  ]
}

const tranbeli = {
  path: '/list-tranbeli',
  component: layout,
  meta: { auth: true },
  children: [
    { path: '', name: 'tranbeli', component: () => import('pages/List-tranbeli') },
    { path: '/add-tranbeli', name: 'tranbeli_add', component: () => import('pages/Form-tranbeli') },
    { path: '/edit-tranbeli/:id', name: 'tranbeli_edit', component: () => import('pages/Form-tranbeli') }
  ]
}

const tranjual = {
  path: '/list-tranjual',
  component: layout,
  meta: { auth: true },
  children: [
    { path: '', name: 'tranjual', component: () => import('pages/List-tranjual') },
    { path: '/add-tranjual', name: 'tranjual_add', component: () => import('pages/Form-tranjual') },
    { path: '/edit-tranjual/:id', name: 'tranjual_edit', component: () => import('pages/Form-tranjual') }
  ]
}

routes.push(login)
routes.push(secured)
routes.push(logout)
routes.push(home)
routes.push(barang)
routes.push(customer)
routes.push(tranbeli)
routes.push(tranjual)

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
