<template>
<q-btn-dropdown class="button-drop-widgets row" label="">
    <q-item class="row items-center justify-center">
        <q-item
        class="column items-center justify-center"
        style="width: 80px"
        clickable
        v-close-popup>
        <img style="border-radius: 50%" src="https://api.adorable.io/avatars/50/abott@adorable" alt="">
            <p>Conta</p>
        </q-item>
        <q-item
        class="column items-center justify-center"
        style="width: 80px"
        clickable
        v-close-popup>
        <img style="border-radius: 50%" src="https://api.adorable.io/avatars/50/abott@adorable" alt="">
            <p>Conta</p>
        </q-item>
        <q-item
        class="column items-center justify-center"
        style="width: 80px"
        clickable
        v-close-popup>
        <img style="border-radius: 50%" src="https://api.adorable.io/avatars/50/abott@adorable" alt="">
            <p>Conta</p>
        </q-item>
      </q-item>

</q-btn-dropdown>
</template>

<script>
export default {

}
</script>

<style>
.button-drop-widgets {
    background: url('../assets/apps.svg');
    background-size: contain;
    width: 30px;
    opacity: 1;
    height: 30px;
    margin-right: 10px;
}
.button-drop-widgets  .q-btn--actionable.q-btn--standard:active .q-btn__wrapper:before, .q-btn--actionable.q-btn--standard.q-btn--active .q-btn__wrapper:before {
  box-shadow: 0 0 0;
}
.button-drop-widgets .q-btn__wrapper:before {
  box-shadow: 0 0 0;
}
</style>
