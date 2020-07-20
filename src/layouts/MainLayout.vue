<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Views
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
      <q-route-tab
        :key="nav.label"
        v-for="nav in navs"
        :to="nav.to"
        exact
        :icon="nav.icon"
        :label="nav.label"
      />
      </q-tabs>
      </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      show-if-above
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Selecione a view</q-item-label>
        <q-item
         :key="nav.label"
         v-for="nav in navs"
         :to="nav.to"
         exact
         clickable
         class="text-grey-4"
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{nav.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: 'Nubank view',
          icon: 'payment',
          to: '/nubank'
        },
        {
          label: 'Google view',
          icon: 'search',
          to: '/google'
        },
        {
          label: 'Eco Dashboard',
          icon: 'dashboard',
          to: '/dashboard'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
  .q-drawer {
    .q-router-link--exact-active {
    color: rgb(201, 201, 201) !important;
    }
  }
</style>
