import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  stages: [{title:'to-do', color: '#FB7D44', isDone: false }, {title:'in-process', color: '#2A92BF', isDone: false }, {title:'in-reveiw', color: '#F4CE46', isDone: false}, {title:'done', color: '#00B961', isDone: true }],
  blocks: []
}

const mutations = {
  changeBlockStage (state, payload ) {
    payload.block.status = payload.status
  }

}

const actions = {
  updateBlock (context, payload) {
    context.commit('changeBlockStage',payload)
  }
}

export default new Vuex.Store({
  state,

  actions,
  mutations
})
