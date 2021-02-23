import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arrPackages: [],
    selectPackage: null,
  },
  mutations: {
    SAVE_PACKAGES: (state, packs) => {
      const tempArr = packs.objects.map( p => {
        const date = new Date(p.package.date)
        p.package.date = date.toLocaleString()
        return p.package
      })
      state.arrPackages = tempArr
    },
    CLEAR_PACKAGES_ARRAY: (state) => {
      state.arrPackages = []
    }
  },
  actions: {
    GET_ARRAY_PACKAGES: async ({ commit }, name) => {
      const res = await api.getPackages(name)
      if (res.isAxiosError) {
        console.log(res.message)
      }else {
        commit('SAVE_PACKAGES', res)
      }
    }
  }
})
