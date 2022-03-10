import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/ja'
import quasarIconSet from 'quasar/icon-set/mdi-v6'
import '@quasar/extras/mdi-v6/mdi-v6.css'
import 'quasar/src/css/index.sass'
import router from '@/router'
import App from '@/App.vue'

const app = createApp(App)
app.use(Quasar, {
  plugins: {},
  lang: quasarLang,
  iconSet: quasarIconSet,
})
app.use(router)

app.mount('#app')
