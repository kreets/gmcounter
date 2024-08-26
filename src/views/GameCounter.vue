<template>
  <div class="game-counter">
    <h2>{{ gameName }} Counter</h2>
    <AgricolaCalculator v-if="gameName === 'Agricola'" />
    <TicketToRideCalculator v-if="gameName === 'TicketToRide'" />
    <MunchkinCalculator v-if="gameName === 'Munchkin'" />
    <TwilightImperiumCalculator v-if="gameName === 'Twilight'" />

  </div>
</template>

<script>
import AgricolaCalculator from '../components/AgricolaCalculator.vue'
import TicketToRideCalculator from '../components/TicketToRideCalculator.vue'
import MunchkinCalculator from '../components/MunchkinCalculator.vue'
import TwilightImperiumCalculator from '../components/TwilightImperiumCalculator.vue'
export default {
  components: {
    AgricolaCalculator, TicketToRideCalculator, MunchkinCalculator,TwilightImperiumCalculator
  },
  computed: {
    gameName() {
      return this.$route.params.name
    },
  },
}
</script>