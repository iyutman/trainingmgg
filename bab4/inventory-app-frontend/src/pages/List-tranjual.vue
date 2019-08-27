<template>
  <div class="q-pa-md">
    <q-table title="Penjualan" :data="data" :columns="columns" row-key="name"  :visible-columns="visibleColumns" >
      <template v-slot:top="props">
        <!-- <img style="height: 50px; width: 50px" src="statics/quasar-logo.svg" > -->
         <router-link :to="{ name: 'tranjual_add' }">
           <q-btn small round push glossy dense icon="add" color="primary"></q-btn>
         </router-link>
        <div class="text-h6 text-weight-medium "> List penjualan </div>
        <q-space />
        <q-select v-model="visibleColumns" multiple borderless dense options-dense :display-value="$q.lang.table.columns" emit-value map-options :options="columns" option-value="name" style="min-width: 150px" />
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="transjualNo" :props="props">
            {{ props.row.transjualNo }}
            <q-btn dense round flat :icon="props.expand ? 'arrow_drop_up' : 'arrow_drop_down'" @click="props.expand = !props.expand" />
          </q-td>
          <q-td key="pembeliId" :props="props"  v-if="props.row.pembeliId !== null" >{{ props.row.pembeliId.nameCustomer }}</q-td>
          <q-td key="pembeliId" :props="props"  v-if="props.row.pembeliId === null" > null </q-td>
          <q-td key="totaljmlhBarang" :props="props">{{ props.row.totaljmlhBarang }}</q-td>
          <q-td key="totalhargaBarang" :props="props">{{ props.row.totalhargaBarang }}</q-td>
          <q-td key="id" :props="props">
            <router-link :to="{ name: 'tranjual_edit', params: { id: props.row.id }}">
              <q-btn small round push glossy dense icon="edit" color="primary"></q-btn>
            </router-link>
            <q-btn small round push glossy dense icon="delete"  @click="onDelete(props.row.id)" color="red"></q-btn>
          </q-td>

        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">Desc: {{ props.row.transjualNote }}.</div>
            <q-separator />
            <div class="text-left">
              <span> <b> Nama Barang  </b> / <b>Harga Barang</b> / <b>jmlh Barang</b> / <b>Total</b> </span><br/>
              <span v-for="(item) in props.row.transjualDetail" :key="item._id">
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
  name: 'List-tranjual',
  data () {
    return {
      visibleColumns: ['transjualNo', 'pembeliId', 'totaljmlhBarang', 'totalhargaBarang', 'transjualDetail', 'id'],
      columns: [
        { name: 'transjualNo', required: true, align: 'left', label: 'No Trans', field: 'transjualNo' },
        { name: 'pembeliId', label: 'Pembeli', field: 'pembeliId' },
        { name: 'totaljmlhBarang', label: 'jmlh', field: 'totaljmlhBarang' },
        { name: 'totalhargaBarang', label: 'total', field: 'totalhargaBarang' },
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
      this.$store.dispatch('penjualan/getDataPenjualan').then((response) => {
        let dataRow = response.data

        this.trTable = dataRow.data
        this.numberOfRow = dataRow.total
        this.numberOfPaging = dataRow.limit
        this.numberOfSkip = dataRow.skip

        this.trTable.forEach((roe) => {
          this.data.push({
            id: roe._id,
            transjualNo: roe.transjualNo,
            pembeliId: roe.pembeliId,
            userId: roe.userId,
            pembeliMember: roe.pembeliMember,
            totaljmlhBarang: roe.totaljmlhBarang,
            totalhargaBarang: roe.totalhargaBarang,
            transjualNote: roe.transjualNote,
            transjualDetail: roe.transjualDetail
          })
        })
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    },

    onDelete (id) {
      this.$store.dispatch('penjualan/delPenjualan', {
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
