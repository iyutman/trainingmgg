<template>
  <div class="q-pa-md">
    <q-table title="Pembelian" :data="data" :columns="columns" row-key="name"  :visible-columns="visibleColumns" >
      <template v-slot:top="props">
        <!-- <img style="height: 50px; width: 50px" src="statics/quasar-logo.svg" > -->
         <router-link :to="{ name: 'tranbeli_add' }">
           <q-btn small round push glossy dense icon="add" color="primary"></q-btn>
         </router-link>
        <div class="text-h6 text-weight-medium "> List pembelian </div>
        <q-space />
        <q-select v-model="visibleColumns" multiple borderless dense options-dense :display-value="$q.lang.table.columns" emit-value map-options :options="columns" option-value="name" style="min-width: 150px" />
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="transbeliNo" :props="props">
            {{ props.row.transbeliNo }}
            <q-btn dense round flat :icon="props.expand ? 'arrow_drop_up' : 'arrow_drop_down'" @click="props.expand = !props.expand" />
          </q-td>
          <q-td key="penjual" :props="props">{{ props.row.penjual }}</q-td>
          <q-td key="userId" :props="props">{{ props.row.userId }}</q-td>
          <q-td key="transbeliNote" :props="props">{{ props.row.transbeliNote }}</q-td>
          <q-td key="totaljmlhBarang" :props="props">{{ props.row.totaljmlhBarang }}</q-td>
          <q-td key="totalhargaBarang" :props="props">{{ props.row.totalhargaBarang }}</q-td>
          <q-td key="id" :props="props">
            <router-link :to="{ name: 'tranbeli_edit', params: { id: props.row.id }}">
              <q-btn small round push glossy dense icon="edit" color="primary"></q-btn>
            </router-link>
            <q-btn small round push glossy dense icon="delete"  @click="onDelete(props.row.id)" color="red"></q-btn>
          </q-td>

        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">Desc: {{ props.row.transbeliNote }}.</div>
            <q-separator />
            <div class="text-left">
              <span> <b> Nama Barang  </b> / <b>Harga Barang</b> / <b>jmlh Barang</b> / <b>Total</b> </span><br/>
              <span v-for="(item) in props.row.transbeliDetail" :key="item._id">
                  {{ item.barangId.nameBarang }} <b>-</b> {{ item.hargaBarang }} <b>-</b> {{ item.jmlhBarang }} <b>-</b> {{ item.totaldetailBarang }} <br/>
              </span>
            </div>
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script>

export default {
  name: 'List-tranbeli',
  data () {
    return {
      visibleColumns: ['transbeliNo', 'penjual', 'totaljmlhBarang', 'totalhargaBarang', 'id'],
      columns: [
        { name: 'transbeliNo', required: true, align: 'left', label: 'No Trans', field: 'transbeliNo' },
        { name: 'penjual', label: 'Penjual', field: 'penjual' },
        { name: 'totaljmlhBarang', label: 'Jmlh', field: 'totaljmlhBarang' },
        { name: 'totalhargaBarang', label: 'Total', field: 'totalhargaBarang' },
        { name: 'id', label: 'Action', field: 'id' }
      ],
      data: [],
      trTable: [],
      numberOfRow: 0,
      numberOfPaging: 0,
      numberOfSkip: 0

    }
  },

  methods: {
    getData () {
      this.$store.dispatch('pembelian/getDataPembelian').then((response) => {
        let dataRow = response.data

        this.trTable = dataRow.data
        this.numberOfRow = dataRow.total
        this.numberOfPaging = dataRow.limit
        this.numberOfSkip = dataRow.skip

        this.trTable.forEach((roe) => {
          this.data.push({
            id: roe._id,
            transbeliNo: roe.transbeliNo,
            penjual: roe.penjual,
            userId: roe.userId,
            transbeliNote: roe.transbeliNote,
            totaljmlhBarang: roe.totaljmlhBarang,
            totalhargaBarang: roe.totalhargaBarang,
            transbeliDetail: roe.transbeliDetail
          })
        })
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    },

    onDelete (id) {
      this.$store.dispatch('pembelian/delPembelian', {
        id: id
      }).then((response) => {
        this.data = []
        this.getData()
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Success Delete'
        })
        console.log('2')
        console.log(response)
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    }

  },

  beforeMount () {
    this.getData()
  }

}
</script>

<style>
</style>
