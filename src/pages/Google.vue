<template>
<q-page class="bg-white fullscreen">
    <a href="/" class="absolute-top-left q-ma-xl">
      <q-icon style="color: #000; font-size: 1.5rem" name="reply" />
    </a>
    <q-header class="bg-white">
        <q-toolbar>
            <q-toolbar-title class="row text-subtitle1 items-center justify-end text-right text-grey">
                <a href="https://mail.google.com/mail/u/0/?tab=wm&ogbl">Gmail</a>
                <a href="https://www.google.com.br/imghp?hl=pt-BR&tab=wi&ogbl">Imagens</a>
                <q-icon class="q-mr-md" name="view_list" style="font-size: 30px" />
                <img style="border-radius: 50%;" src="https://api.adorable.io/avatars/32/abott@adorable.png" alt="quasar">
            </q-toolbar-title>
        </q-toolbar>
    </q-header>

    <q-footer class="bg-grey-2">
        <q-toolbar style="border-bottom: 1px solid #ccc">
            <q-toolbar-title class='text-black'>Brasil</q-toolbar-title>
        </q-toolbar>
        <q-toolbar>
            <q-toolbar-title class='row justify-between text-grey-6'>
                <div>
                    <a href="">Publicidade</a>
                    <a href="">Negócios</a>
                    <a href="">Sobre</a>
                    <a href="">Como funciona a pesquisa</a>
                </div>

                <div>
                    <a href="">Privacidade</a>
                    <a href="">Termos</a>
                    <a href="">Configurações</a>
                </div>
            </q-toolbar-title>
        </q-toolbar>
    </q-footer>

    <div class="column items-center absolute-center">
        <img style="width: 50%" src="../assets/google1.png">

        <q-input class="q-mt-md" style="width: 100%" rounded outlined v-model="text">
            <template v-slot:prepend>
                <q-icon name="search" style="font-size: 30px" />
            </template>

            <template v-slot:append>
                <q-icon v-if="text" style="border-right: 1px solid #666; padding-right: 1px; font-size: 30px;" name="close" @click="text = ''" class="cursor-pointer" />
                <q-icon style="padding-left: 1px; font-size: 30px;" name="keyboard" class="cursor-pointer" />
                <q-icon name="mic" style="color: #00ddff; font-size: 30px;" class="cursor-pointer" />
            </template>
        </q-input>

        <div class="row q-pa-md">
            <q-btn @click="searchGoogle(text)" class="q-mr-sm" color="white" text-color="black" label="Pesquisa Google" />
            <q-btn @click="goToDoodle" class="q-ml-sm" color="white" text-color="black" label="Estou com sorte" />
        </div>

    </div>

</q-page>
</template>

<script>
export default {
    data() {
        return {
            text: ''
        }
    },
    methods: {
        goToDoodle() {
            return window.location.href = "https://www.google.com/doodles/";
        },
        searchGoogle(word) {
            let value = word.split(' ').join('+');
            console.log(value);
            return window.location.href = `https://www.google.com/search?source=hp&ei=m00XX9zUO6bA5OUPyvieSA&q=${value}`
        }
    }
}
</script>

<style>

a:nth-child(n + 1) {
    text-decoration: none;
    margin-right: 10px;
    color: rgba(0, 0, 0, 0.87);
}

a:hover {
    text-decoration: underline;
    color: rgba(133, 133, 133, 0.87);
}

.q-toolbar__title {
  font-size: 13px;
}
</style>
