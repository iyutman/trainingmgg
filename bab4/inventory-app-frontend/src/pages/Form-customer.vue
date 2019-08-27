<template>
  <q-page padding>
     <q-card class="my-card">
      <q-card-section :class="titleColor">
        <div class="text-h6">
          <router-link :to="{ name: 'customer' }">
            <q-btn small round push glossy dense icon="arrow_back" color="teal"></q-btn>
          </router-link>
          {{ this.title }} Customer</div>
        <div class="text-subtitle2">{{ this.title }}</div>
      </q-card-section>
      <q-separator />

      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-md" >
          <q-input outlined v-model="form.nameCustomer" label="name" />
          <q-input outlined v-model="form.kode" label="kode" />
          <q-card-actions align="right">
            <q-btn v-if="title === 'Add'" label="Submit" type="Save" color="primary"/>
            <q-btn v-if="title === 'Edit'" label="Submit" type="Save" color="accent"/>
            <q-btn v-if="title === 'Add'" label="Reset" @click="onReset" color="primary" flat class="q-ml-sm" />
          </q-card-actions>
        </q-form>
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Form-customer',

  data () {
    return {
      title: '',
      titleColor: '',
      jenisMethod: '',
      form: {
        nameCustomer: '',
        kode: ''
      }

    }
  },

  methods: {
    onAdd () {
      this.$store.dispatch('customer/addCustomer', {
        nameCustomer: this.form.nameCustomer, kode: this.form.kode
      }).then((response) => {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Submitted'
        })
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    },

    onUpdate () {
      this.$store.dispatch('customer/updateCustomer', {
        id: this.$route.params.id, nameCustomer: this.form.nameCustomer, kode: this.form.kode
      }).then((response) => {
        this.$q.notify({
          color: 'blue-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Success Update'
        })
        this.$router.push({ name: 'customer' })
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    },

    onFeatch () {
      this.$store.dispatch('customer/featchCustomer', {
        id: this.$route.params.id
      }).then((response) => {
        this.$q.notify({
          color: 'orange-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Edit'
        })
        this.form.nameCustomer = response.nameCustomer
        this.form.kode = response.kode
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    },

    onSubmit () {
      if (this.$route.name === 'customer_add') {
        this.onAdd()
      } else if (this.$route.name === 'customer_edit') {
        this.onUpdate()
      }
    },

    onReset () {
      this.form.nameCustomer = ''
      this.form.kode = ''
    }
  },

  beforeMount () {
    this.jenisMethod = this.$route.name
    if (this.$route.name === 'customer_add') {
      this.title = 'Add'
      this.titleColor = 'bg-positive text-white'
    } else if (this.$route.name === 'customer_edit') {
      this.onFeatch()
      this.title = 'Edit'
      this.titleColor = 'bg-warning text-white'
    }
  }

}
</script>

<style>
</style>
