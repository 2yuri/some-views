<template>
  <q-page class="bg-purple-8 pa-sm fullscreen">
    <img src="../assets/Nubank.png">
    <div class="div-nubank-main bg-white absolute-center">
        <form class="pa-sm text-center" style="width: 316px; heigth: 400px">
        <q-input label="Cpf"/>
        <q-input label="Senha"/>

        <q-btn outline class="mt-sm" style="color: #8b10ae;" label="Confirmar" />
        </form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'EcoDashboard',
  data () {
    text: true
  }
}
</script>

<style>
  .div-nubank-main {
    width: 450px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: 1px;
  }
</style>