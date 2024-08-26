<template>
  <div class="container">
    <!-- Combat Type Toggle -->
    <div class="row mb-3">
      <div class="col-12 text-center">
        <button
            class="btn mr-2"
            type="button"
            :class="[isSpaceCombat ? 'btn-success' : 'btn-light']"
            @click="setCombatType('spaceCombat')"
        >
          {{ $t('spaceCombat') }}
        </button>
        <button
            class="btn"
            type="button"
            :class="[isInvasion ? 'btn-success' : 'btn-light']"
            @click="setCombatType('invasion')"
        >
          {{ $t('invasion') }}
        </button>
      </div>
    </div>

    <div class="row">
      <!-- My Fleet Card -->
      <div class="col-12 col-md-6 mb-2">
        <div class="card">
          <div class="card-header">
            {{ $t('myFleet') }}
          </div>
          <div class="card-body">
            <table class="table table-bordered" :class="{ 'table-dark': themeState.isDarkMode }">
              <thead>
              <tr>
                <th>{{ $t('unitType') }}</th>
                <th>{{ $t('numberOfUnits') }}</th>
                <th>{{ $t('hitsInflicted') }}</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(unit, index) in filteredFleet(myFleet)" :key="index">
                <td>{{ unit.name }}</td>
                <td>
                  <div class="input-group">
                    <button class="btn btn-outline-secondary btn-sm" type="button" @click="decreaseUnit('myFleet', index, 'count')">-</button>
                    <input type="number" class="form-control form-control-sm text-center" v-model.number="unit.count" readonly />
                    <button class="btn btn-outline-secondary btn-sm" type="button" @click="increaseUnit('myFleet', index, 'count')">+</button>
                  </div>
                </td>
                <td>
                  <div class="input-group">
                    <button class="btn btn-outline-secondary btn-sm" type="button" @click="decreaseUnit('myFleet', index, 'hits')">-</button>
                    <input type="number" class="form-control form-control-sm text-center" v-model.number="unit.hits" readonly />
                    <button class="btn btn-outline-secondary btn-sm" type="button" @click="increaseUnit('myFleet', index, 'hits')">+</button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer">
            <strong>{{ $t('totalHits') }}: {{ totalHits('myFleet') }}</strong>
          </div>
        </div>
      </div>

      <!-- Enemy Fleet Card -->
      <div class="col-12 col-md-6">
        <div class="card">
          <div class="card-header">
            {{ $t('enemyFleet') }}
          </div>
          <div class="card-body">
            <table class="table table-bordered" :class="{ 'table-dark': themeState.isDarkMode }">
              <thead>
              <tr>
                <th>{{ $t('unitType') }}</th>
                <th>{{ $t('numberOfUnits') }}</th>
                <th>{{ $t('hitsInflicted') }}</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(unit, index) in filteredFleet(enemyFleet)" :key="index">
                <td>{{ unit.name }}</td>
                <td>
                  <div class="input-group">
                    <button class="btn btn-sm btn-outline-secondary" type="button" @click="decreaseUnit('enemyFleet', index, 'count')">-</button>
                    <input type="number" class="form-control form-control-sm text-center" v-model.number="unit.count" readonly />
                    <button class="btn btn-outline-secondary btn-sm" type="button" @click="increaseUnit('enemyFleet', index, 'count')">+</button>
                  </div>
                </td>
                <td>
                  <div class="input-group">
                    <button class="btn btn-outline-secondary btn-sm" type="button" @click="decreaseUnit('enemyFleet', index, 'hits')">-</button>
                    <input type="number" class="form-control text-center form-control-sm" v-model.number="unit.hits" readonly />
                    <button class="btn btn-outline-secondary btn-sm" type="button" @click="increaseUnit('enemyFleet', index, 'hits')">+</button>
                  </div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="card-footer">
            <strong>{{ $t('totalHits') }}: {{ totalHits('enemyFleet') }}</strong>
          </div>
        </div>
      </div>
    </div>

    <!-- Next Round Button -->
    <div class="row mt-3 mb-3">
      <div class="col-12 text-center">
        <button class="btn btn-primary" @click="nextRound">{{ $t('nextRound') }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { themeState } from '../theme';
export default {
  data() {
    return {
      combatType: 'spaceCombat', // or 'invasion'
      myFleet: [
        { name: 'PDS', count: 0, hits: 0, type: 'both' },
        { name: 'Fighters', count: 0, hits: 0, type: 'spaceCombat' },
        { name: 'Cruiser', count: 0, hits: 0, type: 'spaceCombat' },
        { name: 'Dreadnaught', count: 0, hits: 0, type: 'both' },
        { name: 'Carrier', count: 0, hits: 0, type: 'spaceCombat' },
        { name: 'War sun', count: 0, hits: 0, type: 'both' },
        { name: 'Flagship', count: 0, hits: 0, type: 'both' },
        { name: 'Destroyer', count: 0, hits: 0, type: 'spaceCombat' },
        { name: 'Infantry', count: 0, hits: 0, type: 'invasion' },
        { name: 'Mech', count: 0, hits: 0, type: 'both' },
        { name: 'Other', count: 0, hits: 0, type: 'both' }
      ],
      enemyFleet: [
        { name: 'PDS', count: 0, hits: 0, type: 'both' },
        { name: 'Fighters', count: 0, hits: 0, type: 'spaceCombat' },
        { name: 'Cruiser', count: 0, hits: 0, type: 'spaceCombat' },
        { name: 'Dreadnaught', count: 0, hits: 0, type: 'both' },
        { name: 'Carrier', count: 0, hits: 0, type: 'spaceCombat' },
        { name: 'War sun', count: 0, hits: 0, type: 'both' },
        { name: 'Flagship', count: 0, hits: 0, type: 'both' },
        { name: 'Destroyer', count: 0, hits: 0, type: 'spaceCombat' },
        { name: 'Infantry', count: 0, hits: 0, type: 'invasion' },
        { name: 'Mech', count: 0, hits: 0, type: 'both' },
        { name: 'Other', count: 0, hits: 0, type: 'both' }
      ]
    };
  },
  computed: {
    isSpaceCombat() {
      return this.combatType === 'spaceCombat';
    },
    isInvasion() {
      return this.combatType === 'invasion';
    }
  },
  setup() {
    return { themeState };
  },
  methods: {
    setCombatType(type) {
      this.combatType = type;
    },
    filteredFleet(fleet) {
      return fleet.filter(unit => unit.type === 'both' || unit.type === this.combatType);
    },
    increaseUnit(fleet, index, type) {
      this[fleet][index][type]++;
    },
    decreaseUnit(fleet, index, type) {
      if (this[fleet][index][type] > 0) {
        this[fleet][index][type]--;
      }
    },
    totalHits(fleet) {
      return this[fleet].reduce((total, unit) => total + unit.hits, 0);
    },
    nextRound() {
      this.myFleet.forEach(unit => (unit.hits = 0));
      this.enemyFleet.forEach(unit => (unit.hits = 0));
    }
  }
};
</script>

