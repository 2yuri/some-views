<template>
<q-page class="bg-grey-1 fullscreen overflow-auto	">
  <headerDash />

  <div class="column q-pa-sm bg-grey-1" style="margin-top: 72px;">

    <div class="q-ma-sm row justify-evently" style="height: 420px">
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

    <div class="q-ma-sm q-mt-md q-mb-lg row justify-between" style="height: 400px">
      <div class="row q-pa-md bg-white rounded-borders	shadow-1" style="width: 50%">

        <q-timeline color="secondary">

          <q-timeline-entry color="purple">
            <template v-slot:title>
              <div class="row items-center" style="height: 20px; width: 100%">
                <q-badge style="height: 15px" class="shadow-1" color="yellow-8">
                  HOTFIX
                </q-badge>
                <p class="text-subtitle2 q-ma-none q-ml-md"> Versão v1.490.01</p>
              </div>
            </template>

            <div>

              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <q-timeline color="purple-8">
                <q-timeline-entry>
                  Lorem ipsum dolor sit amet
                </q-timeline-entry>
                <q-timeline-entry>
                  Lorem ipsum dolor sit amet
                </q-timeline-entry>
                <q-timeline-entry>
                  Lorem ipsum dolor sit amet
                </q-timeline-entry>
              </q-timeline>

            </div>
          </q-timeline-entry>

          <q-timeline-entry color="purple">
            <template v-slot:title>
              <div class="row items-center" style="height: 20px; width: 100%">
                <q-badge style="height: 15px" class="shadow-1" color="blue-8">
                  PRINCIPAL
                </q-badge>
                <p class="text-subtitle2 q-ma-none q-ml-md"> Versão v1.490.01</p>
              </div>
            </template>

          </q-timeline-entry>

        </q-timeline>
      </div>
      <div class="column q-pa-md bg-white justify-center rounded-borders shadow-1	" style="width: 49%">
        <div class="row justify-between">
          <p class="text-subtitle2">Terminais por versão</p>
          <q-icon class="cursor-pointer" name="refresh" />
        </div>

        <!-- <div class="row items-center q-pa-sm" style="width: 100%">
          <p  style="width: 10%;" class="q-ma-none">1.490.01</p>
          <div style="width: 10%; height: 40px; background-color: #3CB371"></div>
        </div>
        <div class="row items-center q-pa-sm" style="width: 100%">
          <p style="width: 10%;" class="q-ma-none">1.490.01</p>
          <div style="width: 90%; height: 40px; background-color: #3CB371"></div>
        </div> -->
        <chartDash />
      </div>
    </div>
  </div>
</q-page>
</template>

<script>
export default {
  name: 'EcoDashboard',
  components: {
    headerDash: require('../components/DashboardHeader.vue').default,
    chartDash: require('../components/DashboardChart.vue').default,
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

.card-dashboard p {
  margin: 0
}
</style>
