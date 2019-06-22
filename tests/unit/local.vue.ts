import { createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// Local Vue instance
Vue.config.ignoredElements = [
  'grade-picker-dialog', 'subject-card', 'set-picker-dialog',
]
const localVue = createLocalVue()
localVue.use({
  install(v) {
    // Event bus
    v.prototype.$bus = new Vue()
  },
})
localVue.use(Vuex)
localVue.use(VueRouter)
localVue.filter('asGrade', (value: number) => {
  return value.toFixed(2)
})
localVue.filter('asAverage', (value: number) => {
  return value.toFixed(6).substring(0, 5)
})

// Module exports
export default localVue