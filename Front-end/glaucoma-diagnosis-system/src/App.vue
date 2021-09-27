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
button:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
</style>
