<template>
<q-page class="bg-grey-1 fullscreen">

    <q-header class="bg-light-blue-6 q-py-sm" >
        <q-toolbar>
            <q-toolbar-title class="row items-center align-center justify-between">
                <div class="row items-center align-center" style="width: 50%">
                    <img class="q-pr-md" src="../assets/ecocentauro.png" style="width: 200px;" alt="logo">
                    <a class="q-px-sm text-body2 text-white" href="/">Inicio</a>
                    <a class="q-px-sm text-body2 text-white" href="/">Clientes</a>
                    <a class="q-px-sm text-body2 text-white" href="/">Versões</a>
                    <a class="q-px-sm text-body2 text-white" href="/">Agendamentos</a>
                </div>
                <div class="row items-center align-center justify-end" style="width: 50%">
                    <q-input style="width: 50%" rounded outlined v-model="textinput" placeholder="Pesquisar">
                        <template v-slot:append>
                            <q-avatar>
                                <q-icon class="cursor-pointer" @click="window.location.reload()" name="search" />
                            </q-avatar>
                        </template>
                    </q-input>
                    <q-icon name="notifications_none" />
                    <div class="row items-center justify-end" style="width: 40%">
                        <img style="width: 30px; heigth: 30px; border-radius: 50%" src="https://api.adorable.io/avatars/32/abott@adorable.png" alt="">
                        <p class="text-body2" >Representante</p>
                        <q-icon name="expand_more" />
                    </div>

                </div>
            </q-toolbar-title>
        </q-toolbar>
    </q-header>

</q-page>
</template>

<script>
export default {
    name: 'EcoDashboard',
    data () {
      return {
        textinput: ''
      }
    }
}
</script>

<style>
 a {
   text-decoration: none;
 }
</style>
