<template>
<div>
<NavbarAdmin/>
    <p>Home</p>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavbarAdmin from '../components/navbaradmin.vue';
export default defineComponent({
  name: 'Home',
  components:{
    NavbarAdmin
  }
})
</script>