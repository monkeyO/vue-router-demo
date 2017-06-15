<template>
	<nav class="bar bar-tab easy-bottom-bar">
	  <router-link class="tab-item" to="/">
	    <span class="icon fa fa-comment-o" :class="{'easy-fa-color': isHome}"></span>
	    <span class="tab-label" :class="{'easy-fa-color': isHome}">信息</span>
	  </router-link>
	  <router-link class="tab-item" to="/list">
	    <span class="icon fa fa-list-alt" :class="{'easy-fa-color': isList}"></span>
	    <span class="tab-label" :class="{'easy-fa-color': isList}">列表</span>
	  </router-link>
	  <router-link class="tab-item" to="/user">
	    <span class="icon fa fa-user-circle" :class="{'easy-fa-color': isUser}"></span>
	    <span class="tab-label" :class="{'easy-fa-color': isUser}">用户</span>
	  </router-link>
	</nav>
</template>
<script>
  export default {
		  name:"v-bottom",
      data(){
        return{
  				isHome: true,
  				isList: false,
  				isUser: false
  			}
      },
      mounted() {
			   this.$nextTick(function () {
					var uri = this.$route.path;
					console.log("链接"+uri);
		    	if (uri === '/') {
					this.isHome   = true;
					this.isList   = false;
					this.isUser = false;
		    	}
		    	if (uri === '/list') {
					this.isHome   = false;
					this.isList   = true;
					this.isUser = false;
		    	}
		    	if (uri === '/user') {
					this.isHome   = false;
					this.isList   = false;
					this.isUser  = true;
		    	}
				})  
	    },
	    methods: {
	    }
   }
</script>
<style>
.easy-bottom-bar{
	background-color: #12BBD6;
	color: #fff;
	border:none;
}
.easy-bottom-bar a{
	color: #cdd !important;
}
.easy-fa-color{
	color: #fff !important;
}
</style>
