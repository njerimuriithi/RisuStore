<template>
  
   <div class="border-b md:flex 
   md:items-center 
   md:justify-between p-4 pb-0 shadow-lg md:pb-4
    bg-gradient-to-r from-blue-300 ">
    <router-link to="/">Home</router-link>
    <div class="list-reset md:flex md:items-center ">
      <div class="md:ml-4">
         <router-link 
          class="block no-underline  py-2 text-grey-darkest  md:border-none md:p-0" to="extensions">
          Extensions</router-link> 
      </div>
         <div class="md:ml-4">
         <router-link 
          class="block no-underline  py-2 text-grey-darkest  md:border-none md:p-0" to="solar">
          Solar</router-link> 
      </div>
       <div class="md:ml-4">
         <router-link 
          class="block no-underline  py-2 text-grey-darkest  md:border-none md:p-0" to="bulbs">
          Bulbs</router-link> 
      </div>


    </div>
  </div>

    
    
   <router-view/>
 

</template>

<script>
export default {
  
  }


</script>

<style>

</style>
