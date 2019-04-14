<template>	
	<div>
		<div class="mask"></div>
		<div class="searchTemp">
			<div class="title">{{title}}
				<span class="right close" @click="closeTemp">X</span>
			</div>
			<div class="input">
				<input type="text" v-model="searchInput">
			</div>
			<div class="list">
				<ul>
					<li v-for="item in lists" :key="item.id" v-show="item.isShow" @click="setVal(item.id)">
						<div v-if="true" class="one">
							<div>{{item.name}}</div>
						</div>
						<div v-else class="two">
							<div>{{item.name}}</div>
							<p>{{item.desc}}</p>
						</div>
					</li>
					<li v-show="isEmpty" class="empty">无数据</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'searchTemp',
	props:{
		title:String,
		lists:Array||[],
	},
	data () {
		return {
			searchInput:'',
			isEmpty:false,
		}
	},
	methods:{
		init(){
			if(this.lists.length==0){
				return this.isEmpty = true
			}
		},
		closeTemp(){
			this.isEmpty = false
			this.searchInput = ''
			this.$emit('closeTemp')
		},
		setVal(val){
			this.$store.commit('init',val)
			this.closeTemp()
		}
	},
	computed:{

	},
	mounted(){
		this.init()
	},
	watch:{
		searchInput:function(val,oldval){
			let that = this
			let empty = 0 
			for(let i in that.lists){
				if(that.lists[i].name.indexOf(val)!==-1){
					that.lists[i].isShow=true
					empty++
				}else{
					that.lists[i].isShow=false
				}
			}
			if(empty>0)that.isEmpty = false
			else that.isEmpty = true
		}
	}
}
</script>

<style scoped>
ul{
	list-style: none;
	margin: 0;
	padding: 0;
}
.right{
	position: absolute;
	right: 0%;
	top: 0%;
}
.close{
	padding: 1rem;
}
.searchTemp .title{
	padding-top: 1vh
}
.searchTemp .list li.empty{
	padding-top: 2vh;
	color: #ccc;
	text-align: center;
	border-bottom: none;
}
.mask{
	position:absolute;
	top:0;
	bottom:0;
	right:0;
	left:0;
	background:rgba(0,0,0,0.5);
	z-index:5999;
}
.searchTemp{
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 6000;
	background:#fff;
	width: 100%;
	height: 50vh;
}
.searchTemp .title{
	background: #eee;
	color: #000;
	font-size: 1.15rem;
	padding: 2vh 0;
}
.searchTemp .input{
	border-bottom: 1px solid #eee;
}
.searchTemp input{
	width: 85vw;
	margin: 2vh auto;
	padding: .5rem;
	border-radius: 6px;
	border-style: groove;
}
.searchTemp .list{
	text-align: left;
	overflow-x: hidden;
	overflow-y: scroll;
	width: 100%;
	height: 34.2vh;
}
.searchTemp .list::-webkit-scrollbar{
	display: none;
}
.searchTemp .list li{
	padding:0 8vw;
	border-bottom: 1px solid #eee;
}
.searchTemp .list li p{
	margin: 0;
	font-size: .75rem;
	color: #888;
	white-space: nowrap;
	text-overflow:ellipsis;
	overflow:hidden;
}
.list .one{
	padding: .8rem 0;
}
.list .two{
	padding: .2rem 0;
}
</style>
