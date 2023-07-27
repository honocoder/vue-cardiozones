import { createWebHistory, createRouter } from 'vue-router'
import HomePageContainerVue from '@/components/HomePageContainer.vue'
import InfosFormVue from '@/components/InfosForm.vue'
import ResultsComponent from '@/components/ResultsComponent.vue'
import InformationsComponent from '@/components/InformationsComponent.vue'

const routes = [
  {
    path: '/',
    component: HomePageContainerVue
  },
  {
    path: '/form',
    component: InfosFormVue
  },
  {
    path: '/results',
    name: 'results',
    component: ResultsComponent,
    alias: '/results'
  },
  {
    path: '/infos',
    component: InformationsComponent,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
