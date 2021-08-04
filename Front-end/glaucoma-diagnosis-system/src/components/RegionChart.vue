<template>
  <div>
    <canvas id="chart"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Chart, registerables } from 'chart.js';
import { chart_data } from '../chart-data'

export default defineComponent({
  name: 'RegionChart',
	data() {
		return {
			chart_data: chart_data
		}
	},
	mounted() {
    const ctx = document.getElementById('chart');
    Chart.register(...registerables);
    new Chart(ctx, this.chart_data);
  }
})
</script>