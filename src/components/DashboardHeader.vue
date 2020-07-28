<template>
<q-header class="bg-light-blue-6 q-py-sm">
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
              <q-icon class="cursor-pointer" @click="textinput = ''" name="search" />
            </q-avatar>
          </template>
        </q-input>
        <a href="#" class="notification">
          <q-icon class="cursor-pointer" style="font-size: 25px;" name="notifications_none" />
          <span class="badge">3</span>
        </a>
        <div class="row items-center justify-end" style="width: 40%">
          <img style="width: 40px; heigth: 40px; border-radius: 50%" src="https://api.adorable.io/avatars/32/abott@adorable.png" alt="">
          <p class="q-px-sm" style="margin: 0; font-size: 15px;">Representante</p>
          <q-icon class="cursor-pointer" name="expand_more" />
        </div>

      </div>
    </q-toolbar-title>
  </q-toolbar>
</q-header>
</template>

<script>
export default {
  data() {
    return {
      textinput: ''
    }
  }
}
</script>

<style>
a:not(.notification) {
  text-decoration: none;
}

a:not(.notification):hover {
  border-bottom: 1px solid white;
}

a.notification {
  color: white;
  margin-left: 8px;
  text-decoration: none;
  position: relative;
  display: inline-block;
}


a.notification .badge {
  position: absolute;
  top: -5px;
  width: 20px;
  height: 20px;
  font-size: 15px;
  right: -8px;
  padding: 0.5px 6px;
  border-radius: 50%;
  background: red;
  color: white;
}
</style>
