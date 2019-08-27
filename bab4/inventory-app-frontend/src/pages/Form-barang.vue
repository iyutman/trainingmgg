<template>
  <q-page padding>
     <q-card class="my-card">
      <q-card-section :class="titleColor">
        <div class="text-h6">
          <router-link :to="{ name: 'barang' }">
            <q-btn small round push glossy dense icon="arrow_back" color="teal"></q-btn>
          </router-link>
          {{ this.title }} Barang</div>
        <div class="text-subtitle2">{{ this.title }}</div>
      </q-card-section>
      <q-separator />

      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-md" >
          <q-input outlined v-model="form.nameBarang" label="name" />
          <q-input outlined v-model="form.kode" label="kode" />
          <q-input outlined v-model="form.category" label="category" />
          <q-input outlined v-model="form.hargaBeli" type="number" label="harga Beli" />
          <q-input outlined v-model="form.hargaJual" type="number" label="harga Jual" />
          <q-input outlined v-model="form.stock" type="number" label="stock" />
          <q-input outlined v-model="form.descBarang" type="textarea" label="desc Barang" />
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
  name: 'Form-barang',

  data () {
    return {
      title: '',
      titleColor: '',
      jenisMethod: '',
      form: {
        nameBarang: '',
        kode: '',
        category: '',
        hargaBeli: '',
        hargaJual: '',
        stock: '',
        descBarang: ''
      }

    }
  },

  methods: {
    onAdd () {
      this.$store.dispatch('barang/addBarang', {
        nameBarang: this.form.nameBarang, kode: this.form.kode, category: this.form.category, hargaBeli: this.form.hargaBeli, hargaJual: this.form.hargaJual, stock: this.form.stock, descBarang: this.form.descBarang
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
      this.$store.dispatch('barang/updateBarang', {
        id: this.$route.params.id, nameBarang: this.form.nameBarang, kode: this.form.kode, category: this.form.category, hargaBeli: this.form.hargaBeli, hargaJual: this.form.hargaJual, stock: this.form.stock, descBarang: this.form.descBarang
      }).then((response) => {
        this.$q.notify({
          color: 'blue-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Success Update'
        })
        this.$router.push({ name: 'barang' })
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    },

    onFeatch () {
      this.$store.dispatch('barang/featchBarang', {
        id: this.$route.params.id
      }).then((response) => {
        this.$q.notify({
          color: 'orange-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Edit'
        })
        this.form.nameBarang = response.nameBarang
        this.form.kode = response.kode
        this.form.category = response.category
        this.form.hargaBeli = response.hargaBeli
        this.form.hargaJual = response.hargaJual
        this.form.stock = response.stock
        this.form.descBaran = response.descBaran
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    },

    onSubmit () {
      if (this.$route.name === 'barang_add') {
        this.onAdd()
      } else if (this.$route.name === 'barang_edit') {
        this.onUpdate()
      }
    },

    onReset () {
      this.form.nameBarang = ''
      this.form.kode = ''
      this.form.category = ''
      this.form.hargaBeli = ''
      this.form.hargaJual = ''
      this.form.stock = ''
      this.form.descBarang = ''
    }
  },

  beforeMount () {
    this.jenisMethod = this.$route.name
    if (this.$route.name === 'barang_add') {
      this.title = 'Add'
      this.titleColor = 'bg-positive text-white'
    } else if (this.$route.name === 'barang_edit') {
      this.onFeatch()
      this.title = 'Edit'
      this.titleColor = 'bg-warning text-white'
    }
  }

}
</script>

<style>
</style>
