<template>
  <div class="game-counter">
    <h2>{{ gameName }} Counter</h2>
    <AgricolaCalculator v-if="gameName === 'Agricola'" />
    <TicketToRideCalculator v-if="gameName === 'TicketToRide'" />

  </div>
</template>

<script>
import AgricolaCalculator from '../components/AgricolaCalculator.vue'
import TicketToRideCalculator from '../components/TicketToRideCalculator.vue'
export default {
  components: {
    AgricolaCalculator, TicketToRideCalculator
  },
  computed: {
    gameName() {
      return this.$route.params.name
    },
  },
}
</script>