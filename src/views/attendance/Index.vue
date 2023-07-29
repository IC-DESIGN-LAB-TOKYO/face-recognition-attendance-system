<script>
    import { ref } from 'vue'

const columns = [
  {
    name: 'index',
    label: 'ID',
    field: 'index'
  },
  {
    name: 'name',
    required: true,
    label: 'Name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'type', align: 'left', label: 'Type', field: row => row.type},
  { name: 'regular', align: 'left', label: 'Regular', field: row => row.regular, sortable: true },
  { name: 'overtime', align: 'left', label: 'Overtime', field: row => row.overtime },
  { name: 'sickleave', align: 'left', label: 'Sick Leave', field: 'sickleave' },
  { name: 'pto', align: 'left', label: 'PTO', field: 'pto' },
  { name: 'paidholiday', align: 'left', label: 'Paid Holiday', field: 'paidholiday', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
  { name: 'totalhour', align: 'left', label: 'Total hour', field: 'totalhour', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
]

const employee = [
  {
    name: 'Ko Kyaw Thant Zin',
    type: 'Fulltime',
    regular: '180 Hours',
    overtime: '24 hours',
    sickleave: '-',
    pto: 87,
    paidholiday: '14%',
    totalhour: '1%'
  },
  {
    name: 'Ma Khine Wut Yee',
    type: 'Fulltime',
    regular: '180 Hours',
    overtime: '18 hours',
    sickleave: '-',
    pto: 129,
    paidholiday: '8%',
    totalhour: '1%'
  },
  {
    name: 'Ma Naw Mar Mar',
    type: 'Fulltime',
    regular: '180 Hours',
    overtime: '18 hours',
    sickleave: '-',
    pto: 337,
    paidholiday: '6%',
    totalhour: '7%'
  },
  {
    name: 'Ma Myat Thazin Aung',
    type: 'Fulltime',
    regular: '180 Hours',
    overtime: '-',
    sickleave: '-',
    pto: 413,
    paidholiday: '3%',
    totalhour: '8%'
  },
  {
    name: 'Ko Kyaw Thant Zin',
    type: 'Freelancer',
    regular: '171 Hours',
    overtime: '18 hours',
    sickleave: '-',
    pto: 327,
    paidholiday: '7%',
    totalhour: '16%'
  },
  {
    name: 'Ma Khine Wut Yee',
    type: 'Fulltime',
    regular: '170 Hours',
    overtime: '18 hours',
    sickleave: '-',
    pto: 50,
    paidholiday: '0%',
    iron: '0%'
  },
  {
    name: 'Ma Naw Mar Mar',
    type: 'Parttime',
    regular: '169 Hours',
    overtime: '18 hours',
    sickleave: '-',
    pto: 38,
    paidholiday: '0%',
    iron: '2%'
  },
  {
    name: 'Ma Myat Thazin Aung',
    type: 'Parttime',
    regular: '168 Hours',
    overtime: '18 hours',
    sickleave: '-',
    pto: 562,
    paidholiday: '0%',
    iron: '45%'
  }
]

// we generate lots of rows here
let rows = []
for (let i = 0; i < 10; i++) {
  rows = rows.concat(employee.slice(0).map(r => ({ ...r })))
}
rows.forEach((row, index) => {
  row.index = index
})

export default {
  setup () {
    return {
      columns,
      rows,

      pagination: ref({
        rowsPerPage: 10
      })
    }
  }
}
</script>
<template>
    <div class="q-pa-sm row items-start q-pa-md">
        <q-breadcrumbs>
            <q-breadcrumbs-el label="Home" icon="mdi-home-variant-outline" :to="{ name: 'admin.dashboard' }" />
            <q-breadcrumbs-el label="Attendance" />
        </q-breadcrumbs>
    </div>
    <div class="full-width custom-border">
        <!-- <div class="text-left q-ml-md">
            <q-toolbar>
                <q-toolbar-title class="page-ttl common-ttl">
                    Attendance List
                </q-toolbar-title>
            </q-toolbar>
        </div> -->
        <div class="q-pa-md">
            <q-table
              style="height: 400px"
              flat bordered
              title="Attendance List"
              :rows="rows"
              :columns="columns"
              row-key="index"
              virtual-scroll
              v-model:pagination="pagination"
              :rows-per-page-options="[0]"
            />
        </div>
    </div>
</template>