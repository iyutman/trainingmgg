<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <q-page-container>
      <!-- This is where pages get injected -->
      <q-page padding class="fixed-center">
        <q-card >
      <q-card-section>
        Log in
      </q-card-section>
      <q-separator />
      <q-card-section>
          <q-field
            icon="mail"
            label="Email"
            label-width= 3
            @blur="$v.form.email.$touch"
            :error="$v.form.email.$error"
            helper="Enter your registered email address to Log in"
            error-label="Please type a valid email address"
            >
            <q-input
            type="email"
            v-model="form.email"
            />
          </q-field>
          <q-field
            icon="vpn_key"
            label="Password"
            label-width= 3
            helper="Enter your password"
            :error="$v.form.email.$error"
            error-label="Please type a valid password"
            v-on:keyup.enter="submit"
            >
            <q-input
            type="password"
            v-model="form.password"
            v-on:keyup.enter="submit"
            />
          </q-field>
      </q-card-section>
      <q-separator />
      <q-card-actions align="center">
        <q-btn color="primary" align="center" label="Log In" @click="submit" />
      </q-card-actions>
    </q-card>
    </q-page>
      <!-- .end This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required }
    }
  },
  methods: {
    submit () {
      this.$v.form.$touch()

      if (this.$v.form.$error) {
        this.$q.notify('Please review fields again.')
      }
      this.$store.dispatch('user/login', {
        email: this.form.email,
        password: this.form.password,
        strategy: 'local'
      }).then((response) => {
        this.$router.push({ name: 'home' })
        console.log('2')
        console.log(response)
      }).catch((error) => {
        this.$q.notify('not authenticated')
        // if (error.response.status === 401) {
        //   console.log('401')
        // }
        console.log('1')
        console.log(error)
        return null
      })
      // iyutman2@gmail.com
    }
  }
}
</script>
