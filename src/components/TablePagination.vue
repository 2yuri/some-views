<template>
<div class="c-table-pagination-page q-pa-md bg-white">
  <q-table class="no-shadow" title="Tarefas agendadas" :data="data" :columns="columns" row-key="name" />
</div>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        { name: 'Cliente', align: 'center', label: 'Cliente', field: 'Cliente', sortable: true },
        { name: 'Cidade', label: 'Cidade', field: 'Cidade', sortable: true },
        { name: 'Terminais', label: 'Terminais', field: 'Terminais' },
        { name: 'Atualização', align: 'center', label: 'Atualização', field: 'Atualização' },
        { name: 'Agendamento', label: 'Agendamento', field: 'Agendamento' },
        { name: 'Ação', label: 'Ação', field: 'Ação', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
      ],
      data: [
        {
          Cliente: 'Frozen Yogurt',
          Cidade: 'Cascavel',
          Terminais: 50,
          Atualização: '1.460.40 -> 1.470.20',
          Agendamento: '20/20/2020 14:50',
          Ação:'ALTERAR AGENDAMENTO',
        },
        {
          Cliente: 'Ice cream sandwich',
          Cidade: 'Cascavel',
          Terminais: 50,
          Atualização: '1.460.40 -> 1.470.20',
          Agendamento: '20/20/2020 14:50',
          Ação:'ALTERAR AGENDAMENTO',
        },
        {
          Cliente: 'Eclair',
          Cidade: 'Cascavel',
          Terminais: 50,
          Atualização: '1.460.40 -> 1.470.20',
          Agendamento: '20/20/2020 14:50',
          Ação:'ALTERAR AGENDAMENTO',
        },
        {
          Cliente: 'Cupcake',
          Cidade: 'Cascavel',
          Terminais: 50,
          Atualização: '1.460.40 -> 1.470.20',
          Agendamento: '20/20/2020 14:50',
          Ação:'ALTERAR AGENDAMENTO',
        },
        {
          Cliente: 'Gingerbread',
          Cidade: 'Cascavel',
          Terminais: 50,
          Atualização: '1.460.40 -> 1.470.20',
          Agendamento: '20/20/2020 14:50',
          Ação:'ALTERAR AGENDAMENTO',
        },
        {
          Cliente: 'Jelly bean',
          Cidade: 'Cascavel',
          Terminais: 50,
          Atualização: '1.460.40 -> 1.470.20',
          Agendamento: '20/20/2020 14:50',
          Ação:'ALTERAR AGENDAMENTO',
        },
        {
          Cliente: 'Lollipop',
          Cidade: 'Cascavel',
          Terminais: 50,
          Atualização: '1.460.40 -> 1.470.20',
          Agendamento: '20/20/2020 14:50',
          Ação:'ALTERAR AGENDAMENTO',
        },
        {
          Cliente: 'Honeycomb',
          Cidade: 'Cascavel',
          Terminais: 50,
          Atualização: '1.460.40 -> 1.470.20',
          Agendamento: '20/20/2020 14:50',
          Ação:'ALTERAR AGENDAMENTO',
        },
        {
          Cliente: 'Donut',
          Cidade: 'Cascavel',
          Terminais: 50,
          Atualização: '1.460.40 -> 1.470.20',
          Agendamento: '20/20/2020 14:50',
          Ação:'ALTERAR AGENDAMENTO',
        },
        {
          Cliente: 'KitKat',
          Cidade: 'Cascavel',
          Terminais: 50,
          Atualização: '1.460.40 -> 1.470.20',
          Agendamento: '20/20/2020 14:50',
          Ação:'ALTERAR AGENDAMENTO',
        }
      ]
    }
  }
}
</script>

<style>
.c-table-pagination-page {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12)
}
  thead tr:first-child th {
    /* bg color is important for th; just specify one */
    background-color: #d8d8d8
    }
</style>
