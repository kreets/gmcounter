<template>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Quantity</th>
          <th scope="col">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in scoreItems" :key="index">
          <td>{{ item.name }}</td>
          <td>
            <div class="input-group">
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="decreaseQuantity(index)"
              >
                -
              </button>
              <input
                type="number"
                class="form-control"
                v-model.number="item.quantity"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="increaseQuantity(index)"
              >
                +
              </button>
            </div>
          </td>
          <td>{{ item.calculateScore(item.quantity) }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Total Score</th>
          <th colspan="2">{{ totalScore }}</th>
        </tr>
      </tfoot>
    </table>
</template>

<script>
export default {
  data() {
    return {
      scoreItems: [
	    {
          name: 'Fields',
          quantity: 0,
          calculateScore: (quantity) => {
            if (quantity <= 1) return -1
            if (quantity <= 5 ) return quantity-1
            return 4
          },
        },
		{
          name: 'Pastures',
          quantity: 0,
          calculateScore: (quantity) => {
            if (quantity === 0) return -1
            if (quantity <= 4) return quantity
            return 4
          },
        },
        {
          name: 'Sheep',
          quantity: 0,
          calculateScore: (quantity) => {
            if (quantity <= 0) return -1
            if (quantity > 0 && quantity < 4) return 1
            if (quantity >=4 && quantity < 6 ) return 2
            if (quantity >= 6 && quantity < 8) return 3
            return 4
          },
        },
        {
          name: 'Cattle',
          quantity: 0,
          calculateScore: (quantity) => {
            if (quantity === 0) return -1
            if (quantity === 1) return 1
            if (quantity >= 2 && quantity < 4) return 2
            if (quantity >= 4 && quantity < 6) return 3
            return 4
          },
        },
		{
          name: 'Boar',
          quantity: 0,
          calculateScore: (quantity) => {
            if (quantity <= 0) return -1
            if (quantity < 3) return 1
            if (quantity >= 3 && quantity < 5) return 2
            if (quantity >= 5 && quantity < 7) return 3
            return 4
          },
        },
		{
          name: 'Horse',
          quantity: 0,
          calculateScore: (quantity) => {
            if (quantity === 0) return 0
            return quantity
          },
        },
		
        {
          name: 'Grain',
          quantity: 0,
          calculateScore: (quantity) => {
            if (quantity === 0) return -1
            if (quantity <= 3) return 1
            if (quantity <= 5) return 2
            if (quantity <= 7) return 3
            return 4
          },
        },
        {
          name: 'Vegetables',
          quantity: 0,
          calculateScore: (quantity) => {
            if (quantity === 0) return -1
            if (quantity < 5) return quantity
            return 4
          },
        },
        {
          name: 'Fences',
          quantity: 0,
          calculateScore: (quantity) => {
            if (quantity === 0) return -1
            if (quantity === 1) return 1
            return 2
          },
        },
		{
          name: 'Unused fields',
          quantity: 0,
          calculateScore: (quantity) => {
            return 0-quantity;
          },
        },
		{
          name: 'Fenced Stable',
          quantity: 0,
          calculateScore: (quantity) => {
            return quantity;
          },
        },
		{
          name: 'Clay Rooms',
          quantity: 0,
          calculateScore: (quantity) => {
            return quantity;
          },
        },
		{
          name: 'Stone Rooms',
          quantity: 0,
          calculateScore: (quantity) => {
            return quantity*2;
          },
        },
		{
          name: 'Card value points',
          quantity: 0,
          calculateScore: (quantity) => {
            return quantity;
          },
        },
		{
          name: 'Bonus points',
          quantity: 0,
          calculateScore: (quantity) => {
            return quantity;
          },
        },
		{
          name: 'Begging cards',
          quantity: 0,
          calculateScore: (quantity) => {
            return 0-(quantity*3);
          },
        },
      ],
    }
  },
  computed: {
    totalScore() {
      return this.scoreItems.reduce(
        (total, item) => total + item.calculateScore(item.quantity),
        0
      )
    },
  },
  methods: {
    increaseQuantity(index) {
      this.scoreItems[index].quantity++
    },
    decreaseQuantity(index) {
      if (this.scoreItems[index].quantity > 0) {
        this.scoreItems[index].quantity--
      }
    },
  },
}
</script>

<style scoped>
/* Add any specific styles for this calculator here */
</style>
