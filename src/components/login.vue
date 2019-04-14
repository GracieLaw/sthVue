<template>
	<div class="hello">
		<h1>login</h1>
		<button type="button" @click="clickHandler">init</button><span>{{msg}}</span><br>
		A<input type="text" disabled value=""><button type="button" @click="openSearch1">查询A</button><br>
		B<input type="text" disabled value=""><button type="button" @click="openSearch2">查询B</button><br>
		C<input type="text" disabled value=""><button type="button" @click="openSearch3">查询C</button><br>
		<SearchTemp v-if="isSearchTempShow" @closeTemp="closeSearch" :title="titleName" :lists='items' :isDesc="desc"></SearchTemp>
	</div>
</template>

<script>
import searchTemp from './searchTemp'

export default {
	name: 'login',
	components: {
	'SearchTemp': searchTemp,
	},
	data () {
		return {
			titleName:''||"查询",
			isSearchTempShow:false,
			items:[],
			desc:false
		}
	},
	methods:{
		closeSearch(){
			return this.isSearchTempShow=false
		},
		openSearch(){			
			for(let i in this.items){
				this.items[i].isShow = true
			}
			return this.isSearchTempShow=true
		},
		openSearch1(){
			this.titleName = '查询A'
			this.items = [
				{name:'A???萨德1',id:0},
				{name:'A萨德1',id:1},
				{name:'A1',id:2},
				{name:'A萨德2',id:3},
				{name:'A2',id:4},
				{name:'A萨德3',id:5},
				{name:'A3',id:6},
				{name:'A萨德4',id:7},
				{name:'A4',id:8},
			]
			this.openSearch()
		},
		openSearch2(){
			this.titleName = '查询B'
			this.items = [
				{name:'B???萨德1',id:0},
				{name:'B萨德1',id:1},
				{name:'B1',id:2},
				{name:'B萨德2',id:3}
			]
			this.openSearch()
		},
		openSearch3(){
			this.titleName = '查询C'
			this.items = [
				// {name:'C???萨德1',id:0},
				// {name:'C萨德1',id:1}
			]
			this.openSearch()
		},
		clickHandler(){
			// this.$store.dispatch('update')
			this.$store.commit('init')
		},
		searchSth(){
			
		}
	},
	computed:{
		msg(){
			return this.$store.state.msg
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
