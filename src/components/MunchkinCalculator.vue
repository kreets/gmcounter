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
            <p class="card-text">{{ level }}</p>
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
            <p class="card-text">{{ gear }}</p>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      level: 1,
      gear: 0,
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
  },
};
</script>

<style scoped>
.card {
  margin-top: 20px;
}
</style>
