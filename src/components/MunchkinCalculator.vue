<template>
  <div class="container">
    <div class="row">
      <!-- Level Counter -->
      <div class="col-6">
        <div class="card text-center">
          <div class="card-header">
            <button class="btn btn-primary" @click="increaseLevel">{{$t('addLevel')}}</button>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{$t('currentLevel')}}</h5>
            <p class="card-text bigtext">{{ level }}</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-danger" @click="decreaseLevel">{{$t('removeLevel')}}</button>
          </div>
        </div>
      </div>

      <!-- Gear Counter -->
      <div class="col-6">
        <div class="card text-center">
          <div class="card-header">
            <button class="btn btn-primary" @click="increaseGear">{{$t('addGear')}}</button>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{$t('currentGear')}}</h5>
            <p class="card-text bigtext">{{ gear }}</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-danger" @click="decreaseGear">{{$t('removeGear')}}</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Sum of Levels and Gear -->
    <div class="row mt-4">
      <div class="col-12 text-center">
        <h3>{{ $t('totalPower') }}: {{ totalPower }}</h3>
      </div>
    </div>
    <div>
      <button class="btn btn-primary" @click="openFightModal">{{ $t('munchkinFight') }}</button>
      <FightModal :isOpen="isFightModalOpen" :munchkinStrength="totalPower" @closeModal="closeFightModal" />
    </div>
  </div>
</template>

<script>
import FightModal from "./FightModal.vue";
export default {
  components: {FightModal},
  data() {
    return {
      level: 1,
      gear: 0,
      isFightModalOpen: false
    };
  },
  computed: {
    totalPower() {
      return this.level + this.gear;
    },
  },
  methods: {
    increaseLevel() {
      this.level++;
    },
    decreaseLevel() {
      if (this.level > 1) {
        this.level--;
      }
    },
    increaseGear() {
      this.gear++;
    },
    decreaseGear() {
      if (this.gear > 0) {
        this.gear--;
      }
    },
    openFightModal() {
      this.isFightModalOpen = true;
    },
    closeFightModal() {
      this.isFightModalOpen = false;
    }
  },
};
</script>

<style scoped>
.card {
  margin-top: 20px;
}
.bigtext{
  font-size: 3em;
  font-weight: 500 ;
}
</style>
