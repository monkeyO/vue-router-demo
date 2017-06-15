<template>
    <div>
       <v-top :title="title" :show-refesh-icon="true" :show-return-icon="false" :show-write-icon="true"></v-top>
       <v-wecome></v-wecome>
       <v-bottom></v-bottom>
    </div>  
</template>
<<script>
   import VBottom from '../public/bottom/bottom.vue';
   import VTop from '../public/top/top.vue';
   import VWecome from '../public/wecome/wecome.vue';
   export default {
      data(){
         return{
             title:"信息",
             infoData:"信息"
         } 
      },
      components:{
        VTop,
        VBottom,
        VWecome 
      },
      methods:{

      }
   }
</script>

