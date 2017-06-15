<template>
    <div>
        <v-top :title="title" :show-refesh-icon="true" :show-return-icon="false" :show-write-icon="true"></v-top>
        <v-bottom></v-bottom>
    </div>
</template>
<<script>
   import VBottom from '../public/bottom/bottom.vue';
   import VTop from '../public/top/top.vue';
   export default {
      data(){
          return {
              title:"列表",
              infoData:"列表"
          }
      },
      components:{
        VTop,
        VBottom
      },
       methods:{

      }
   }
</script>

