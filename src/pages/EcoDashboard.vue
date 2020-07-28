<template>
<q-page class="bg-grey-1 fullscreen">
  <headerDash />

  <div class="column q-pa-sm bg-grey-1 fullscreen" style="margin-top: 72px;">

    <div class="row justify-evently" style="height: 420px">
      <div class="column items-center" style="width: 29%">
        <div>
          <q-card class="card-dashboard my-card q-ma-sm">
            <q-card-section class="column bg-white text-black">
              <div class="row justify-between text-subtitle2">
                <p>Versão expirando</p>
                <q-icon name="info" />
              </div>
              <div class="text-h4">1.470.14</div>
              <p>restam 10 dias 55 terminais serão afetados</p>
            </q-card-section>
          </q-card>
        </div>
        <div>
          <q-card class="card-dashboard row my-card q-ma-sm">
            <q-card-section class="row items-center bg-white text-black">
              <div class="q-pr-lg">
                <img src="https://api.adorable.io/avatars/32/abott@adorable.png" style="width: 50px; heigth: 50px; border-radius: 50%;">
              </div>
              <div class="column items-center">
                <p class="text-h4">10 Versões</p>
                <p>lorem ipsum dollor</p>
                <p>lorem ipsum dollor</p>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div>
          <q-card class="card-dashboard row my-card q-ma-sm">
            <q-card-section class="row items-center bg-white text-black">
              <div class="q-pr-lg">
                <img src="https://api.adorable.io/avatars/32/abott@adorable.png" style="width: 50px; heigth: 50px; border-radius: 50%;">
              </div>
              <div class="column items-center">
                <p class="text-h4">250 clientes</p>
                <p>lorem ipsum dollor</p>
                <p>lorem ipsum dollor</p>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div style="width: 70%; height: 100%">
        <tableDash />
      </div>
    </div>

    <div class="row">
      <div>info 1</div>
      <div>info 2</div>
    </div>
  </div>
</q-page>
</template>

<script>
export default {
  name: 'EcoDashboard',
  components: {
    headerDash: require('../components/DashboardHeader.vue').default,
    tableDash: require('../components/TablePagination.vue').default
  }

}
</script>

<style>
a {
  text-decoration: none;
}

.card-dashboard {
  width: 320px;
  height: 120px;
}
.card-dashboard p{
  margin: 0
}
</style>
