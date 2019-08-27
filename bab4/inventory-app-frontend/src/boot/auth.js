// import something here

// "async" is optional
// export default async ({ /* app, router, Vue, ... */ }) => {
// something to do
// }

export default ({ app, router, Vue }) => {
  // Check for protected and guest routes and perform checks
  router.beforeEach((to, from, next) => {
    /*
    // ### check meta auth
    const protectedRoute = to.matched.some(route => {
      console.log(`### meta auth ### ${route.meta.auth}`)
      // if (!route.meta) {
      //   route = { meta: { guest: true } }
      // }
      console.log(`### meta ###`)
      console.log(route.meta)

      return route.meta.auth
    })
    console.log(protectedRoute)
*/

    const loginRoute = to.name
    // console.log(loginRoute)

    if (app.store.getters['user/isAuthenticated']) {
      // console.log(`### enter isAuthenticated ###`)
      // if (loginRoute === 'login') {
      //   return next({ name: 'home' })
      // }

      return next()
      /*
      // ### check validasi token
      return app.store.dispatch('user/validate').then(user => {
        user ? next() : next({ name: 'login' })
      })
       */
    } else {
      if (loginRoute === 'login') {
        return next()
      } else {
        return next({ name: 'login' })
      }
    }

    /*
    // ### Auth with check validasi token
    // console.trace(app.store.getters['user/token'])
    const protectedRoute = to.matched.some(route => {
      console.log(`### meta auth ### ${route.meta.auth}`)
      // if (!route.meta) {
      //   route = { meta: { guest: true } }
      // }
      console.log(`### meta ###`)
      console.log(route.meta)

      return route.meta.auth
    })
    console.log(protectedRoute)

    // Allow guest routes
    if (!protectedRoute) {
      return next()
    }

    // If auth is required and the user is logged in, verify the token...
    if (app.store.getters['user/isAuthenticated']) {

      return app.store.dispatch('user/validate').then(user => {
        user ? next() : next({ name: 'login' })
      })
    }

    next({ name: 'login' })
 */
  })
}
