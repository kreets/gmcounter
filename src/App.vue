<template>
  <div id="app" class="container-fluid">
    <header class="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
      <h1 class="h3">{{ gameName }}</h1>
      <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#gameModal"
      >
        Select Game
      </button>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <!-- Game Selection Modal -->
    <div
        class="modal fade"
        id="gameModal"
        tabindex="-1"
        aria-labelledby="gameModalLabel"
        aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="gameModalLabel">Select a Game</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
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
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const gameName = route.params?.name || 'Score Counter'

    const games = ['TicketToRide', 'Agricola']

    const selectGame = (game) => {
      router.push({ name: 'GameCounter', params: { name: game } })
    }

    return {
      gameName,
      games,
      selectGame,
    }
  },
}
</script>

<style>
/* Add any custom styles here */
</style>