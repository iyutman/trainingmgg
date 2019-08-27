<template>
  <q-page padding>
     <q-card class="my-card">
      <q-card-section :class="titleColor">
        <div class="text-h6">
          <router-link :to="{ name: 'tranbeli' }">
            <q-btn small round push glossy dense icon="arrow_back" color="teal"></q-btn>
          </router-link>
          {{ this.title }} Pembelian</div>
        <div class="text-subtitle2">{{ this.title }}</div>
      </q-card-section>
      <q-separator />

      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-md" >
          <div class="row">
            <div class="col">
              <q-input outlined v-model="form.transbeliNo" label="No. trans" />
            </div>
            <div class="col">
            </div>
            <div class="col">
              <q-input outlined v-model="form.penjual" label="Produser / Distributor" />
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
          <div class="row" :id="'trdetail-' + index" v-for="(transbeliDetails, index) in form.transbeliDetail" :key="transbeliDetails.index">
            <div class="col">
              <!-- <q-select v-model="transbeliDetails.nameBarang" :options="barangs" label="Barang" :key="key" @change="@change="val => { model = val }"selectbarang(index)"  emit-value map-options/> -->
              <q-select v-bind:ref="'tdbarangId-' + transbeliDetails.index" v-model="transbeliDetails.barangId" :options="barangs" label="Barang" @input="selectbarang(index, $event)" map-options/>
            </div>
            <div class="col">
              <q-input outlined v-bind:ref="'tdhargaBarang-' + transbeliDetails.index" v-model="transbeliDetails.hargaBarang" label="hargaBarang" readonly />
            </div>
            <div class="col">
              <q-input outlined v-bind:ref="'tdjmlhBarang-' + transbeliDetails.index" v-model="transbeliDetails.jmlhBarang" v-on:keyup="addJmlbarang(index, $event)" label="jmlhBarang" />
            </div>
            <div class="col">
              <q-input outlined v-bind:ref="'tdtotaldetailBarang-' + transbeliDetails.index" v-model="transbeliDetails.totaldetailBarang" label="totaldetailBarang" readonly />
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
  name: 'Form-tranbeli',

  data () {
    return {
      title: '',
      titleColor: '',
      jenisMethod: '',
      barangs: [],
      form: {
        transbeliDetail: [],
        totaljmlhBarang: 0,
        totalhargaBarang: 0,
        transbeliNo: '',
        penjual: ''
      }

    }
  },

  methods: {
    addRow () {
      this.form.transbeliDetail.push({
        barangId: '',
        hargaBarang: '',
        jmlhBarang: '',
        totaldetailBarang: ''
      })
      // this.listBarang()
    },
    selectbarang (key, newVal) {
      // console.log(this.$children)
      this.form.transbeliDetail[key].barangId = newVal.value
      this.form.transbeliDetail[key].hargaBarang = newVal.harga
      this.form.transbeliDetail[key].totaldetailBarang = Number(this.form.transbeliDetail[key].hargaBarang) * Number(this.form.transbeliDetail[key].jmlhBarang)
      this.totalHarga()
    },
    addJmlbarang (key, event) {
      this.form.transbeliDetail[key].totaldetailBarang = Number(this.form.transbeliDetail[key].hargaBarang) * Number(this.form.transbeliDetail[key].jmlhBarang)
      this.totalBarang()
    },

    totalHarga () {
      let awal = []
      const arrSum = arr => arr.reduce((a, b) => a + b, 0)
      this.form.transbeliDetail.forEach((roe) => {
        awal.push(Number(roe.totaldetailBarang))
      })
      this.form.totalhargaBarang = arrSum(awal)
    },
    totalBarang () {
      let awal = []
      const arrSum = arr => arr.reduce((a, b) => a + b, 0)
      this.form.transbeliDetail.forEach((roe) => {
        awal.push(Number(roe.jmlhBarang))
      })
      this.form.totaljmlhBarang = arrSum(awal)
      this.totalHarga()
    },

    deleteRow (index) {
      this.form.transbeliDetail.splice(index, 1)
      this.totalBarang()
    },

    listBarang () {
      this.$store.dispatch('barang/getDataBarang').then((response) => {
        // this.form.transbeliDetail.splice(index, 1)
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

    onAdd () {
      this.$store.dispatch('pembelian/addPembelian', {
        transbeliNo: this.form.transbeliNo,
        penjual: this.form.penjual,
        totaljmlhBarang: this.form.totaljmlhBarang,
        totalhargaBarang: this.form.totalhargaBarang,
        transbeliDetail: this.form.transbeliDetail
      }).then((response) => {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Submitted'
        })
        this.$router.push({ name: 'tranbeli' })
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    },

    onUpdate () {
      this.$store.dispatch('pembelian/updatePembelian', {
        id: this.$route.params.id,
        transbeliNo: this.form.transbeliNo,
        penjual: this.form.penjual,
        totaljmlhBarang: this.form.totaljmlhBarang,
        totalhargaBarang: this.form.totalhargaBarang,
        transbeliDetail: this.form.transbeliDetail
      }).then((response) => {
        this.$q.notify({
          color: 'blue-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Success Update'
        })
        this.$router.push({ name: 'tranbeli' })
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    },

    onFeatch () {
      this.$store.dispatch('pembelian/featchPembelian', {
        id: this.$route.params.id
      }).then((response) => {
        this.$q.notify({
          color: 'orange-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Edit'
        })
        this.form.transbeliNo = response.transbeliNo
        this.form.penjual = response.penjual
        this.form.totaljmlhBarang = response.totaljmlhBarang
        this.form.totalhargaBarang = response.totalhargaBarang
        this.form.transbeliDetail = response.transbeliDetail
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    },

    onSubmit () {
      if (this.$route.name === 'tranbeli_add') {
        this.onAdd()
      } else if (this.$route.name === 'tranbeli_edit') {
        this.onUpdate()
      }
    },

    onReset () {
      this.form.namePembelian = ''
      this.form.kode = ''
    }
  },

  beforeMount () {
    this.listBarang()
    this.jenisMethod = this.$route.name
    if (this.$route.name === 'tranbeli_add') {
      this.title = 'Add'
      this.titleColor = 'bg-positive text-white'
    } else if (this.$route.name === 'tranbeli_edit') {
      this.onFeatch()
      this.title = 'Edit'
      this.titleColor = 'bg-warning text-white'
    }
  }

}
</script>

<style>
</style>
