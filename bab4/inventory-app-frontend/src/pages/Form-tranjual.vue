<template>
  <q-page padding>
     <q-card class="my-card">
      <q-card-section :class="titleColor">
        <div class="text-h6">
          <router-link :to="{ name: 'tranjual' }">
            <q-btn small round push glossy dense icon="arrow_back" color="teal"></q-btn>
          </router-link>
          {{ this.title }} Penjualan</div>
        <div class="text-subtitle2">{{ this.title }}</div>
      </q-card-section>
      <q-separator />

      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-md" >
          <div class="row">
            <div class="col">
              <q-input outlined v-model="form.transjualNo" label="No. trans" />
            </div>
            <div class="col">
            </div>
            <div class="col">
              <q-select v-model="form.pembeliId" :options="customers" label="Pembeli"  @input="selectcostomer($event)" map-options/>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <q-input outlined v-model="form.totaljmlhBarang" label="total jmlh Barang" readonly />
            </div>
            <div class="col">
            </div>
            <div class="col">
              <q-input outlined v-model="form.totalhargaBarang" label="total harga Barang" readonly />
            </div>
          </div>

          <q-btn small round push glossy dense icon="add"  @click="addRow" color="info"></q-btn>
          <q-separator />
          <div class="row" :id="'trdetail-' + index" v-for="(transjualDetails, index) in form.transjualDetail" :key="transjualDetails.index">
            <div class="col">
              <!-- <q-select v-model="transjualDetails.nameBarang" :options="barangs" label="Barang" :key="key" @change="@change="val => { model = val }"selectbarang(index)"  emit-value map-options/> -->
              <q-select v-bind:ref="'tdbarangId-' + transjualDetails.index" v-model="transjualDetails.barangId" :options="barangs" label="Barang" @input="selectbarang(index, $event)" map-options/>
            </div>
            <div class="col">
              <q-input outlined v-bind:ref="'tdhargaBarang-' + transjualDetails.index" v-model="transjualDetails.hargaBarang" label="hargaBarang" readonly />
            </div>
            <div class="col">
              <q-input outlined v-bind:ref="'tdjmlhBarang-' + transjualDetails.index" v-model="transjualDetails.jmlhBarang" v-on:keyup="addJmlbarang(index, $event)" label="jmlhBarang" />
            </div>
            <div class="col">
              <q-input outlined v-bind:ref="'tdtotaldetailBarang-' + transjualDetails.index" v-model="transjualDetails.totaldetailBarang" label="totaldetailBarang" readonly />
            </div>
            <q-btn small round push glossy dense icon="remove"  @click="deleteRow(index)" color="red"></q-btn>
          </div>

          <q-card-actions align="right">
            <q-btn v-if="title === 'Add'" label="Submit" type="Save" color="primary"/>
            <q-btn v-if="title === 'Edit'" label="Submit" type="Save" color="accent"/>
            <!-- <q-btn v-if="title === 'Add'" label="Reset" @click="onReset" color="primary" flat class="q-ml-sm" /> -->
          </q-card-actions>
        </q-form>
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Form-tranjual',

  data () {
    return {
      title: '',
      titleColor: '',
      jenisMethod: '',
      barangs: [],
      customers: [],
      form: {
        transjualDetail: [],
        totaljmlhBarang: 0,
        totalhargaBarang: 0,
        transjualNo: '',
        pembeliId: ''
      }

    }
  },

  methods: {
    addRow () {
      this.form.transjualDetail.push({
        barangId: '',
        hargaBarang: '',
        jmlhBarang: '',
        totaldetailBarang: ''
      })
      // this.listBarang()
    },
    selectbarang (key, newVal) {
      // console.log(this.$children)
      this.form.transjualDetail[key].barangId = newVal.value
      this.form.transjualDetail[key].hargaBarang = newVal.harga
      this.form.transjualDetail[key].totaldetailBarang = Number(this.form.transjualDetail[key].hargaBarang) * Number(this.form.transjualDetail[key].jmlhBarang)
      this.totalHarga()
    },
    selectcostomer (newVal) {
      this.form.pembeliId = newVal.value
    },
    addJmlbarang (key, event) {
      this.form.transjualDetail[key].totaldetailBarang = Number(this.form.transjualDetail[key].hargaBarang) * Number(this.form.transjualDetail[key].jmlhBarang)
      this.totalBarang()
    },

    totalHarga () {
      let awal = []
      const arrSum = arr => arr.reduce((a, b) => a + b, 0)
      this.form.transjualDetail.forEach((roe) => {
        awal.push(Number(roe.totaldetailBarang))
      })
      this.form.totalhargaBarang = arrSum(awal)
    },
    totalBarang () {
      let awal = []
      const arrSum = arr => arr.reduce((a, b) => a + b, 0)
      this.form.transjualDetail.forEach((roe) => {
        awal.push(Number(roe.jmlhBarang))
      })
      this.form.totaljmlhBarang = arrSum(awal)
      this.totalHarga()
    },

    deleteRow (index) {
      this.form.transjualDetail.splice(index, 1)
      this.totalBarang()
    },

    listBarang () {
      this.$store.dispatch('barang/getDataBarang').then((response) => {
        // this.form.transjualDetail.splice(index, 1)
        response.data.data.forEach((roe) => {
          // this.barangs.push(`${roe.nameBarang} #${roe._id}`)
          this.barangs.push({
            label: `${roe.nameBarang} (${roe.kode})`,
            harga: roe.hargaJual,
            value: roe._id
          })
        })
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    },

    listCustomer () {
      this.$store.dispatch('customer/getDataCustomer').then((response) => {
        // this.form.transjualDetail.splice(index, 1)
        response.data.data.forEach((roe) => {
          // this.barangs.push(`${roe.nameBarang} #${roe._id}`)
          this.customers.push({
            label: `${roe.nameCustomer} (${roe.kode})`,
            value: roe._id
          })
        })
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    },

    onAdd () {
      this.$store.dispatch('penjualan/addPenjualan', {
        transjualNo: this.form.transjualNo,
        pembeliId: this.form.pembeli,
        totaljmlhBarang: this.form.totaljmlhBarang,
        totalhargaBarang: this.form.totalhargaBarang,
        transjualDetail: this.form.transjualDetail
      }).then((response) => {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Submitted'
        })
        this.$router.push({ name: 'tranjual' })
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    },

    onUpdate () {
      this.$store.dispatch('penjualan/updatePenjualan', {
        id: this.$route.params.id,
        transjualNo: this.form.transjualNo,
        pembeliId: this.form.pembeliId,
        totaljmlhBarang: this.form.totaljmlhBarang,
        totalhargaBarang: this.form.totalhargaBarang,
        transjualDetail: this.form.transjualDetail
      }).then((response) => {
        this.$q.notify({
          color: 'blue-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Success Update'
        })
        this.$router.push({ name: 'tranjual' })
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    },

    onFeatch () {
      this.$store.dispatch('penjualan/featchPenjualan', {
        id: this.$route.params.id
      }).then((response) => {
        this.$q.notify({
          color: 'orange-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Edit'
        })
        this.form.transjualNo = response.transjualNo
        this.form.pembeliId = response.pembeliId
        this.form.totaljmlhBarang = response.totaljmlhBarang
        this.form.totalhargaBarang = response.totalhargaBarang
        this.form.transjualDetail = response.transjualDetail
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    },

    onSubmit () {
      if (this.$route.name === 'tranjual_add') {
        this.onAdd()
      } else if (this.$route.name === 'tranjual_edit') {
        this.onUpdate()
      }
    },

    onReset () {
      this.form.namePenjualan = ''
      this.form.kode = ''
    }
  },

  beforeMount () {
    this.listBarang()
    this.listCustomer()
    this.jenisMethod = this.$route.name
    if (this.$route.name === 'tranjual_add') {
      this.title = 'Add'
      this.titleColor = 'bg-positive text-white'
    } else if (this.$route.name === 'tranjual_edit') {
      this.onFeatch()
      this.title = 'Edit'
      this.titleColor = 'bg-warning text-white'
    }
  }

}
</script>

<style>
</style>
