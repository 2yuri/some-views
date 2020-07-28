<template>
<q-page class="bg-grey-1 fullscreen">
  <headerDash />

  <div class="column q-pa-sm bg-grey-1 fullscreen" style="margin-top: 72px;">

    <div class="row">
      <div class="column items-start">
        <div>
          <q-card class="my-card q-ma-sm">
            <q-card-section class="bg-white text-black">
              <div class="row justify-between text-subtitle2">
                <p>Versão expirando</p>
                <q-icon name="info"/>
              </div>
              <div class="text-h4">1.470.14</div>
              <p>restam 10 dias <span>55 terminais serão afetados</span></p>
            </q-card-section>
          </q-card>
        </div>
        <div>
          <q-card class="my-card q-ma-sm">
            <q-card-section class="bg-purple text-white">
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card>
        </div>
        <div>
          <q-card class="my-card q-ma-sm">
            <q-card-section class="bg-purple text-white">
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div>
        <div>big info</div>
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
    headerDash: require('../components/DashboardHeader.vue').default
  }

}
</script>

<style>
a {
  text-decoration: none;
}
</style>
