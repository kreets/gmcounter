<template>
  <header>
    <h1>{{ gameName ? gameName : 'Score Counter' }}</h1>
    <button @click="openSettings">Settings</button>
  </header>
</template>

<script>
export default {
  computed: {
    gameName() {
      return this.$route.params?.name || 'Score Counter';
    },
  },
  methods: {
    openSettings() {
      // Future settings handler
    },
  },
}
</script>