import Vue from "vue";
import Vuex from 'Vuex'

Vue.use(Vuex)
const state = {
	stfNo:'',
	name:'',
	id:'',
	brday:'',
	
}
const getters = {
	changeMsg(state){
		return state.msg
	}
}
const mutations = {
	init(state,val){
		state.msg = val
	}
}
const actions = {
	update(con){
		setTimeout(() => {
			con.commit('init','res')
    }, 1000)
	}
}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});

export default store;