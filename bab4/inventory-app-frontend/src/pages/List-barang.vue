<template>
  <div class="q-pa-md">
    <q-table title="Barang" :data="data" :columns="columns" row-key="name"  :visible-columns="visibleColumns" >
      <template v-slot:top="props">
        <!-- <img style="height: 50px; width: 50px" src="statics/quasar-logo.svg" > -->
         <router-link :to="{ name: 'barang_add' }">
           <q-btn small round push glossy dense icon="add" color="primary"></q-btn>
         </router-link>
        <div class="text-h6 text-weight-medium "> List barang </div>
        <q-space />
        <q-select v-model="visibleColumns" multiple borderless dense options-dense :display-value="$q.lang.table.columns" emit-value map-options :options="columns" option-value="name" style="min-width: 150px" />
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="nameBarang" :props="props">
            {{ props.row.nameBarang }}
            <q-btn dense round flat :icon="props.expand ? 'arrow_drop_up' : 'arrow_drop_down'" @click="props.expand = !props.expand" />
          </q-td>
          <q-td key="kode" :props="props">{{ props.row.kode }}</q-td>
          <q-td key="category" :props="props">{{ props.row.category }}</q-td>
          <q-td key="hargaBeli" :props="props">{{ props.row.hargaBeli }}</q-td>
          <q-td key="hargaJual" :props="props">{{ props.row.hargaJual }}</q-td>
          <q-td key="stock" :props="props">{{ props.row.stock }}</q-td>
          <q-td key="id" :props="props">
            <router-link :to="{ name: 'barang_edit', params: { id: props.row.id }}">
              <q-btn small round push glossy dense icon="edit" color="primary"></q-btn>
            </router-link>
            <q-btn small round push glossy dense icon="delete"  @click="onDelete(props.row.id)" color="red"></q-btn>
          </q-td>

        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">Desc: {{ props.row.descBarang }}.</div>
          </q-td>
        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script>

export default {
  name: 'List-barang',
  data () {
    return {
    /*
      visibleColumns: ['calories', 'desc', 'protein', 'sodium', 'iron'],
      columns: [
        { name: 'desc', required: true, label: 'Dessert (100g serving)', align: 'left', field: row => row.name, format: val => `${val}`, sortable: true },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
     */
      visibleColumns: ['nameBarang', 'id', 'kode', 'category', 'hargaBeli', 'hargaJual', 'stock'],
      columns: [
        {
          name: 'nameBarang',
          required: true,
          label: 'Name',
          align: 'left',
          field: row => row.descBarang,
          format: val => `${val}`
        },
        { name: 'kode', label: 'Kode', field: 'kode' },
        { name: 'category', label: 'Category', field: 'category' },
        { name: 'hargaBeli', label: 'Harga Beli', field: 'hargaBeli' },
        { name: 'hargaJual', label: 'Harga Jual', field: 'hargaJual' },
        { name: 'stock', label: 'Stock', field: 'stock' },
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
      this.$store.dispatch('barang/getDataBarang').then((response) => {
        let dataRow = response.data

        this.trTable = dataRow.data
        this.numberOfRow = dataRow.total
        this.numberOfPaging = dataRow.limit
        this.numberOfSkip = dataRow.skip

        this.trTable.forEach((roe) => {
          this.data.push({
            nameBarang: roe.nameBarang,
            kode: roe.kode,
            category: roe.category,
            hargaBeli: roe.hargaBeli,
            hargaJual: roe.hargaJual,
            stock: roe.stock,
            id: roe._id,
            descBarang: roe.descBarang
          })
        })
      }).catch((error) => {
        this.$q.notify(error.message)
        return null
      })
    },

    onDelete (id) {
      this.$store.dispatch('barang/delBarang', {
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
