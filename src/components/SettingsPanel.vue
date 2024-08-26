<template>
  <div class="modal" tabindex="-1" role="dialog" v-if="isOpen">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ $t('settings') }}</h5>
        </div>
        <div class="modal-body">
          <dl class="row">
            <dt class="col-6">{{ $t('theme') }}</dt>
            <dd class="col-6">
              <button class="btn btn-sm" :class="[isDarkMode ? 'btn-success' : 'btn-info']" @click="toggleTheme">
                {{ isDarkMode ? $t('lightMode') : $t('darkMode') }}
              </button>
            </dd>
          </dl>
          <!-- Other settings can be added here -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="close">{{ $t('close') }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    currentDarkMode: Boolean
  },
  data() {
    return {
      isDarkMode: this.currentDarkMode
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode;
      this.$emit('updateTheme', this.isDarkMode);
      localStorage.setItem('darkMode', this.isDarkMode);
    }
  }
};
</script>

<style scoped>
.modal {
  display: block; /* Force the modal to be visible */
  background-color: rgba(0, 0, 0, 0.5); /* Darken the background */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1050;
  overflow: hidden;
  outline: 0;
}

.modal-dialog {
  margin: 10% auto;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close {
  background: none;
  border: none;
  font-size: 1.5rem;
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

dt {
  font-weight: bold;
}

dd {
  margin-left: 0; /* Remove default margin */
}
</style>