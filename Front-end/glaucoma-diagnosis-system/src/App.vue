<template>
<div class="bg-cover min-h-screen" style="background-image: url('https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100');'">
<Navbar/>
  <router-view/>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import  Navbar from './components/navbar.vue';
export default defineComponent({
  name: 'App',
  components: {
    Navbar
  }
})
</script>

<style>

</style>
