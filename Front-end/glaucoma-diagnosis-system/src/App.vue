<template>
<div>

  <router-view/>
  <zefooter/>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import zefooter from './components/footer.vue';
export default defineComponent({
  name: 'App',
  components: {
    zefooter,
  }
})
</script>

<style>

</style>
