import * as VueRouter from 'vue-router'
import Home from '@/pages/Home.vue'
import SamplePage from '@/pages/SamplePage.vue'

const routes: VueRouter.RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/sample',
    component: SamplePage,
  },
]

const options: VueRouter.RouterOptions = {
  end: true,
  history: VueRouter.createWebHistory(),
  routes,
  sensitive: false,
  strict: false,
}
//
const router = VueRouter.createRouter(options)

export default router
