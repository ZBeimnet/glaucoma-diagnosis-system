<template>
	<div class="container mx-auto mt-16">
		<!-- Highlevel stats -->
		<div class="h-48 grid grid-rows-1 grid-flow-col gap-10 border-4 p-8">
			<div class="border-4"></div>
			<div class="border-4"></div>
			<div class="border-4"></div>
		</div>
		<!-- Detail stat and graph -->
		<div class="mt-16 h-64 grid grid-rows-1 grid-flow-col gap-10">
			<div class="border-4"></div>
			<div class="border-4"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AdminDashboard",
  components: {},
});
</script>

<style scoped>
</style>
