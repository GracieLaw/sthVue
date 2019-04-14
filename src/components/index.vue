<template>
	<div class="hello">
		<h1>index</h1>
		<button type="button" @click="clickHandler">update</button>
		<span>{{msg}}</span>
		<Login></Login>
	</div>
</template>

<script>
import login from './login'
export default {
	name: 'index',
	components: {
    'Login': login,
  },
	data () {
		return {
		}
	},
	methods:{
		clickHandler(){
			this.$store.dispatch('update')
			// this.$store.commit('init')
		}
	},
	computed:{
		msg(){
			return this.$store.state.msg
		}
	}
}
</script>

<style scoped>
</style>
