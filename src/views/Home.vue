<template>
  <div class="home">
    <h1 class="mb-4">Select a Game</h1>
    <ul class="list-group">
      <li
          class="list-group-item"
          v-for="game in games"
          :key="game"
          @click="selectGame(game)"
      >
        {{ game }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: ['TicketToRide', 'Agricola', 'Munchkin'],
    }
  },
  methods: {
    selectGame(game) {
      this.$router.push({ name: 'GameCounter', params: { name: game } })
    },
  },
}
</script>