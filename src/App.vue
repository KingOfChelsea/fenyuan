<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import SignUp from "@/components/acount/SignUp.vue";
import Member from '@/components/membership/Member.vue';
</script>

<template>
  <!-- <SignUp></SignUp> -->
   <Member></Member>
  <RouterView />
</template>

<style scoped>


</style>
