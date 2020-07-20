<template>
  <q-page class="bg-purple-8 fullscreen">
    <img class="q-pa-md" src="../assets/Nubank.png">
    <div class="div-nubank-main column bg-white absolute-center">
       <p class="text-h6 text-center q-mb-xl">Faça seu login</p> 
        <form class="q-pa-sm q-mt-md column" style="width: 316px; heigth: 400px;">
        <q-input label="Cpf"/>
        <q-input label="Senha"/>

        <q-btn class="q-mt-md q-pa-md" outline style="color: #8b10ae;" label="CONTINUAR" />
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: 1px;
  }
</style>