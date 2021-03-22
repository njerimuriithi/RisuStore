<template>
  <div class="bg-blue-200 transform hover:skew-x-2 hover:skew-y-2 transition duration-500 ease-in-out rounded-lg ">
 <h1 class="text-center text-6xl font-bold text-black-600 py-20">RISU DIGITAL ENTERPRISE</h1>
     
   

  </div>
  <MainPage></MainPage>
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

</script>
