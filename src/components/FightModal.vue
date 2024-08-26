<template>
  <div class="modal" tabindex="-1" role="dialog" v-if="isOpen">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{$t('munchkinFight')}}</h5>
        </div>
        <div class="modal-body">
          <div class="row">
            <!-- Munchkin Card -->
            <div class="col-6">
              <div class="card text-center">
                <div class="card-header">
                  {{$t('currentStrength', {'strength': Math.max(munchkinStrength + munchkinBonus, 0)})}}
                </div>
                <div class="card-body">
                  <p>{{$t('originalStrength', {'strength': munchkinStrength})}}</p>

                </div>
                <div class="card-footer">

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <button class="btn btn-danger btn-sm" type="button" @click="decreaseMunchkinBonus(index)">-</button>
                    </div>
                    <input type="text" class="form-control text-center form-control-sm" :value="$t('fightModifier', { modifier: (munchkinBonus > 0 ? '+' : '') + munchkinBonus })" readonly>
                    <div class="input-group-append">
                      <button class="btn btn-success btn-sm" type="button" @click="increaseMunchkinBonus(index)">+</button>
                    </div>
                  </div>

                </div>
              </div>
              <div class="d-flex justify-content-between mt-2">
                <button class="btn btn-warning mr-3 btn-sm" @click="resetMunchkinBonus">{{$t('munchkinReset')}}</button>
                <button class="btn btn-success ml-4 btn-sm" @click="addHelper" v-if="!helper">{{$t('addHelper')}}</button>
              </div>
              <!-- Helper Card -->
              <div class="card text-center mt-2" v-if="helper">
                <div class="card-header">
                  {{$t('munchkinHelper')}}
                </div>
                <div class="card-body">
                  <label>{{$t('originalStrength')}}</label>
                  <input type="number" class="form-control" v-model.number="helper.originalStrength" min="1" />
                  <p>{{$t('currentStrength', {'strength': Math.max(helper.originalStrength + helper.bonus, 0)})}}</p>
                </div>
                <div class="card-footer">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <button class="btn btn-danger btn-sm" type="button" @click="decreaseHelperBonus">-</button>
                    </div>
                    <input type="text" class="form-control text-center form-control-sm" :value="$t('fightModifier', { modifier: helper.bonus })" readonly>
                    <div class="input-group-append">
                      <button class="btn btn-success btn-sm" type="button" @click="increaseHelperBonus">+</button>
                    </div>
                  </div>
                  <button class="btn btn-danger btn-sm ml-3 mt-2" @click="removeHelper">{{$t('removeHelper')}}</button>
                </div>
              </div>
            </div>

            <!-- Monster Cards -->
            <div class="col-6">
              <div v-for="(monster, index) in monsters" :key="index" class="card text-center mb-2">
                <div class="card-header">
                  <select v-model="monster.originalStrength" class="form-control">
                    <option v-for="n in 20" :key="n" :value="n">{{$t('monsterSelect', {level: n, index: index + 1})}}</option>
                  </select>
                </div>
                <div class="card-body">
                  <p>Current Strength: {{ Math.max(monster.originalStrength + monster.bonus, 0) }}</p>
                </div>
                <div class="card-footer">


                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <button class="btn btn-danger btn-sm" type="button" @click="decreaseMonsterBonus(index)">-</button>
                    </div>
                    <input type="text" class="form-control text-center form-control-sm" :value="$t('fightModifier', { modifier: (monster.bonus > 0 ? '+' : '') + monster.bonus })" readonly>
                    <div class="input-group-append">
                      <button class="btn btn-success btn-sm" type="button" @click="increaseMonsterBonus(index)">+</button>
                    </div>
                  </div>


                  <button class="btn btn-danger mt-2 btn-sm" v-if="index > 0" @click="removeMonster(index)">{{$t('removeMonster')}}</button>
                </div>
              </div>
              <button class="btn btn-success btn-sm mt-3" @click="addMonster">{{$t('addMonster')}}</button>
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <div>
            <!-- Winner Message -->
            <p>{{ winnerMessage }} ({{combinedMunchkinStrength}} : {{combinedMonsterStrength}})</p>
          </div>
          <div>
            <button type="button" class="btn btn-secondary" @click="close">{{ $t("hideModal") }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isOpen', 'munchkinStrength', 'closeModal'],
  data() {
    return {
      munchkinBonus: 0,
      helper: null,
      monsters: [
        { originalStrength: 10, bonus: 0 }
      ]
    };
  },
  computed: {
    combinedMonsterStrength() {
      return this.monsters.reduce(
          (total, monster) => total + monster.originalStrength + monster.bonus,
          0
      );
    },
    combinedMunchkinStrength() {
      const munchkinTotal = this.munchkinStrength + this.munchkinBonus;
      const helperTotal = this.helper ? this.helper.originalStrength + this.helper.bonus : 0;
      return munchkinTotal + helperTotal;
    },
    winnerMessage() {
      const munchkinTotal = this.combinedMunchkinStrength;
      const monsterTotal = this.combinedMonsterStrength;

      if (monsterTotal > munchkinTotal) {
        return this.$t('munchkinLose');
      } else if (munchkinTotal > monsterTotal) {
        return this.$t('munchkinWin');
      } else {
        return this.$t("fightTie");
      }
    }
  },
  methods: {
    increaseMunchkinBonus() {
      this.munchkinBonus++;
    },
    decreaseMunchkinBonus() {
      if (this.munchkinStrength + this.munchkinBonus > 0) this.munchkinBonus--;
    },
    resetMunchkinBonus() {
      this.munchkinBonus = 0;
    },
    addMonster() {
      this.monsters.push({ originalStrength: 1, bonus: 0 });
    },
    addHelper() {
      this.helper = { originalStrength: 1, bonus: 0 };
    },
    removeHelper() {
      this.helper = null;
    },
    removeMonster(index) {
      this.monsters.splice(index, 1);
    },
    increaseMonsterBonus(index) {
      this.monsters[index].bonus++;
    },
    increaseHelperBonus() {
      if (this.helper) this.helper.bonus++;
    },
    decreaseHelperBonus() {
      if (this.helper && this.helper.originalStrength + this.helper.bonus > 0) {
        this.helper.bonus--;
      }
    },
    decreaseMonsterBonus(index) {
      if (this.monsters[index].originalStrength + this.monsters[index].bonus > 0) {
        this.monsters[index].bonus--;
      }
    },
    close() {
      this.$emit('closeModal');
    }
  }
};
</script>

<style scoped>
.modal {
  display: block; /* Show the modal */
}
</style>
