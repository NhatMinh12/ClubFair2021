import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    club_data: {
      clubs: []
    },
    hasAuthenticated: false
  },
  plugins: [createPersistedState()],
  mutations: {
    initializeStore(state) {
      if(localStorage.getItem('club_data')) {
        state.club_data = JSON.parse(localStorage.getItem('club_data'))
      } else {
        localStorage.getItem('club_data', JSON.stringify(state.club_data))
      }

      // if (localStorage.getItem('hasAuthenticated')) {
      //   //state.token = localStorage.getItem('token')
      //   state.hasAuthenticated = true
      // } else {
      //   localStorage.getItem('hasAunthenticated', false)
      // }

      //localStorage.getItem('hasAunthenticated', false)
    },
    addToFavorite(state, item) {
      const exists = state.club_data.clubs.filter(i => i.id === item.id)
      if(!exists.length) {
        state.club_data.clubs.push(item)
        localStorage.setItem('club_data', JSON.stringify(state.club_data))
      }
    },
    setAuthentication(state, status) {
      state.hasAuthenticated = status
    }
  },
  actions: {
  },
  modules: {
  }
})
