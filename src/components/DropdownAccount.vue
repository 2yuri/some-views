<template>
 <q-btn-dropdown
      class="button-drop"
      label=""
    >

        <q-item class="column items-center text-center" style="width: 400px" clickable v-close-popup >
          <img style="width: 60px; heigth: 60px; border-radius: 50%" src="https://api.adorable.io/avatars/32/abott@adorable.png" alt=""> 
          <q-item-section>
            <br />
            <q-item-label>User: name</q-item-label>
            <q-item-label caption>email@email.com</q-item-label>
          </q-item-section>
          <q-item-section class="q-py-md">
              <q-btn outline rounded color="primary" label="Gerencie sua conta" />
          </q-item-section>
        </q-item>
    </q-btn-dropdown>
</template>

<script>
export default {

}
</script>

<style>
.button-drop {
    background: url('https://api.adorable.io/avatars/32/abott@adorable.png');
    width: 38px;
    opacity: 1;
    border-radius: 50%;
    height: 38px;
}
.q-btn-dropdown--simple .q-btn-dropdown__arrow {
    display: none;
}
.button-drop  .q-btn--actionable.q-btn--standard:active .q-btn__wrapper:before, .q-btn--actionable.q-btn--standard.q-btn--active .q-btn__wrapper:before {
  box-shadow: 0 0 0;
}
.button-drop .q-btn__wrapper:before {
  box-shadow: 0 0 0;
}
</style>