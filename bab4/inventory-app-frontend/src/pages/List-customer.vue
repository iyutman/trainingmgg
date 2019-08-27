<template>
  <div class="q-pa-md">
    <q-table title="Customer" :data="data" :columns="columns" row-key="name"  :visible-columns="visibleColumns" >
      <template v-slot:top="props">
        <!-- <img style="height: 50px; width: 50px" src="statics/quasar-logo.svg" > -->
         <router-link :to="{ name: 'customer_add' }">
           <q-btn small round push glossy dense icon="add" color="primary"></q-btn>
         </router-link>
        <div class="text-h6 text-weight-medium "> List customer </div>
        <q-space />
        <q-select v-model="visibleColumns" multiple borderless dense options-dense :display-value="$q.lang.table.columns" emit-value map-options :options="columns" option-value="name" style="min-width: 150px" />
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="nameCustomer" :props="props">
            {{ props.row.nameCustomer }}
          </q-td>
          <q-td key="kode" :props="props">{{ props.row.kode }}</q-td>
          <q-td key="id" :props="props">
            <router-link :to="{ name: 'customer_edit', params: { id: props.row.id }}">
              <q-btn small round push glossy dense icon="edit" color="primary"></q-btn>
            </router-link>
            <q-btn small round push glossy dense icon="delete"  @click="onDelete(props.row.id)" color="red"></q-btn>
          </q-td>

        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">Desc: {{ props.row.descCustomer }}.</div>
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script>

export default {
  name: 'List-customer',
  data () {
    return {
      visibleColumns: ['nameCustomer', 'id', 'kode'],
      columns: [
        { name: 'nameCustomer', required: true, align: 'left', label: 'Name', field: 'nameCustomer' },
        { name: 'kode', label: 'kode', field: 'kode' },
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
      this.$store.dispatch('customer/getDataCustomer').then((response) => {
        let dataRow = response.data

        this.trTable = dataRow.data
        this.numberOfRow = dataRow.total
        this.numberOfPaging = dataRow.limit
        this.numberOfSkip = dataRow.skip

        this.trTable.forEach((roe) => {
          this.data.push({
            id: roe._id,
            nameCustomer: roe.nameCustomer,
            kode: roe.kode
          })
        })
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    },

    onDelete (id) {
      this.$store.dispatch('customer/delCustomer', {
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
