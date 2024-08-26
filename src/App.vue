<template>
  <div id="app" class="container-fluid" :class="{ 'dark-mode': themeState.isDarkMode }">
    <header class="d-flex justify-content-between align-items-center py-3 mb-4 border-bottom">
      <h1 class="h3">{{ gameName }}</h1>
      <div>
        <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#gameModal"
        >
          Select Game
        </button>
        <button
            type="button"
            class="btn btn-link"
            @click="openSettings"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path d="M9.405 1.05a1.12 1.12 0 0 0-2.81 0l-.094.433a1.12 1.12 0 0 1-1.26.878l-.451-.071a1.12 1.12 0 0 0-1.217 1.217l.071.451c.078.497-.185 1.018-.878 1.26l-.433.094a1.12 1.12 0 0 0 0 2.81l.433.094c.693.242.956.763.878 1.26l-.071.451a1.12 1.12 0 0 0 1.217 1.217l.451-.071a1.12 1.12 0 0 1 1.26.878l.094.433a1.12 1.12 0 0 0 2.81 0l.094-.433c.242-.693.763-.956 1.26-.878l.451.071a1.12 1.12 0 0 0 1.217-1.217l-.071-.451a1.12 1.12 0 0 1 .878-1.26l.433-.094a1.12 1.12 0 0 0 0-2.81l-.433-.094a1.12 1.12 0 0 1-.878-1.26l.071-.451a1.12 1.12 0 0 0-1.217-1.217l-.451.071a1.12 1.12 0 0 1-1.26-.878l-.094-.433zM8 5.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5z"/>
          </svg>
        </button>
      </div>
    </header>

    <SettingsPanel :isOpen="isSettingsOpen" :currentDarkMode="themeState.isDarkMode" @close="closeSettings" @updateTheme="applyDarkMode" />
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
import { themeState, toggleTheme } from './theme';
import SettingsPanel from './components/SettingsPanel.vue';
export default {
  components: {
    SettingsPanel
  },
  data() {
    return {
      isSettingsOpen: false,
    };
  },
  methods: {
    openSettings() {
      this.isSettingsOpen = true;
    },
    closeSettings() {
      this.isSettingsOpen = false;
    },
    applyDarkMode(isDark) {
      themeState.isDarkMode = isDark;
      document.body.classList.toggle('dark-mode', isDark);
      localStorage.setItem('darkMode', isDark);
    }
  },
  created() {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'true';
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    }
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const gameName = route.params?.name || 'Score Counter'

    const games = ['Munchkin', 'TicketToRide', 'Agricola','Twilight']

    const selectGame = (game) => {
      router.push({ name: 'GameCounter', params: { name: game } })
    }

    return {
      gameName,
      games,
      selectGame,
      themeState,
      toggleTheme
    }
  },
}
</script>

<style>
.dark-mode{
  background-color: #444;
  color: #fff;
}
.dark-mode .modal-content {
  background-color: #333;
  color: #fff;
}

.dark-mode .btn {
  background-color: #444;
  color: #fff;
}

.dark-mode .btn:hover {
  background-color: #555;
}

.dark-mode .form-control {
  background-color: rgb(65, 65, 65);
  color: #979797;
}

.dark-mode .form-control:focus {
  background-color: rgb(45, 52, 61);
}
</style>