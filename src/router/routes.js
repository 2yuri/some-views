
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/Nubank', component: () => import('pages/Nubank.vue') },
      { path: '/Google', component: () => import('pages/Google.vue') },
      { path: '/Dashboard', component: () => import('pages/EcoDashboard.vue') },

    ]
  },





  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
