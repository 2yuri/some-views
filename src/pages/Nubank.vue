<template>
<q-page class="bg-purple-8  fullscreen">
    <a href="/" class="absolute-top-right q-pa-md">
      <q-icon style="color: #fff; font-size: 1.5rem" name="reply" />
    </a>
    <img class="img-nubank q-pa-lg" style="width: 30%; max-width: 120px;" src="../assets/Nubank.png">
    <div class="main-div absolute-center rounded-borders column q-mt-md bg-white items-center justify-center" style="height: 90%; width: 90%; max-width: 450px;">
        <div class="col-2 column bg-white q-pa-xl items-center">
            <p class="text-h6 text-center">Faça seu login</p>
        </div>
        <div class="col-8 column q-pa-xl items-center" style="width: 100%;">
            <form style="width: 100%;" class="">
                <q-input :rules="[val => val.length > 13 || 'Informe o valor correto']"  mask="###.###.###-##" v-model="input1" label="Cpf" />
                <q-input v-model="input2" :type="isPwd ? 'text' : 'password'"  label="Senha">
                    <template v-slot:append>
                        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
                    </template>
                </q-input>
            </form>
            <q-btn
              class="q-mt-xl q-pa-md"
              outline
              :style="input1 !== '' && input2 !== ''  ? 'color: #8b10ae; width: 100%;' : 'color: #333; width: 100%;'"
              :disable="input1 !== '' && input2 !== ''  ? false : true"
              label="CONTINUAR" />
        </div>
        <div class="col-2 column q-pb-sm justify-evently text-center" style="width: 100%;">
            <a
            @mouseover="hoverAone = true"
            @mouseleave="hoverAone = false"
            :style="hoverAone == true ? 'text-decoration: none; color: #333;' : 'text-decoration: none; color: #8b10ae;'"
            class="text-bold text-subtitle2"
            href=""
            >
                Esqueci minha senha >
            </a>
            <a
            @mouseover="hoverAtwo = true"
            @mouseleave="hoverAtwo = false"
            :style="hoverAtwo == true ? 'text-decoration: none; color: #333;' : 'text-decoration: none; color: #8b10ae;'"
            class="text-bold text-subtitle2"
            href="">
                Ainda não sou cliente >
            </a>
        </div>
    </div>
</q-page>
</template>

<script>
export default {
    data() {
        return {
            input1: '',
            input2: '',
            value: '',
            hoverAone: false,
            hoverAtwo: false,
            isPwd: false
        }
    },
    methods: {
      inputFormat (input1) {
        this.input1.mask('000.000.000-00');

        return this.input1;
      }
    }
}
</script>

<style lang="scss">
a {
  text-decoration: none;
}
@media screen and (max-width: 475px) {
    .img-nubank {
        width: 40%;
    }

    .main-div {
        div:nth-child(2) {
            padding: 15px;
            height: auto;
        }

        div:nth-child(3) {
            padding: 15px;
        }

    }
}
</style>
