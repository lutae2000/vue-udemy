<template>
<the-header-vue></the-header-vue>
  <router-view></router-view>
</template>

<script>
import TheHeaderVue from './components/layout/TheHeader.vue';

export default{
  components:{
    TheHeaderVue
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
