<template>
  <div class="home">
    <img class="w-100" src="../assets/background3.jpg">
   
<MainPage></MainPage>
  </div>
</template>

<script>
// @ is an alias to /src
import MainPage from '@/components/MainPage.vue';

export default {
  name:"mainpage",
  components:{
    MainPage
  }
 
  }
;
</script>
