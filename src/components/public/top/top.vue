<template>
  <header class="bar bar-nav bar-easy-vue">
    <a class="icon icon-refresh pull-left" v-if="showRefeshIcon" ></a>
    <a class="icon icon-left-nav pull-left" v-if="showReturnIcon" ></a>
    <a class="icon icon-compose pull-right" v-if="showWriteIcon"></a>
    <h1 class="title">{{title}}</h1>
  </header>
</template>
<script>
export default {
  name: "v-top",
  props: {
     title: {
        type: String
     },
    showRefeshIcon: {
      default: true
    },
    showReturnIcon: {
      default: false
    },
    showWriteIcon: {
      default: true
    },
  },
  methods: {
  }
}
</script>

<style>
.bar-easy-vue {
  background-color: #12BBD6;
}

.bar-easy-vue a,
h1 {
  color: #fff !important;
}
</style>