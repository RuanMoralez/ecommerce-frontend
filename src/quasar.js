import Vue from 'vue'

import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar, Notify } from 'quasar'
import Vuelidate from 'vuelidate'

Vue.use(Quasar, {
  config: {},
  plugins: {
    Notify
  }
 })

 Vue.use(Vuelidate)