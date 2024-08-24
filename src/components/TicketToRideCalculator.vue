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
        <tr v-for="(route, index) in completedRoutes" :key="'route-' + index">
          <td>Completed Route {{ index + 1 }}</td>
          <td>
            {{ route.name }}
          </td>
          <td>{{ route.points }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Total Score</th>
          <th colspan="2">{{ totalScore }}</th>
        </tr>
      </tfoot>
    </table>
  <div class="input-group mb-3">
    <select class="form-select" v-model="selectedRoute">
      <option disabled value="">Select completed route</option>
      <option v-for="route in availableRoutes" :key="route.name" :value="route">
        {{ route.name }} ({{ route.points }} points)
      </option>
    </select>
    <button class="btn btn-outline-secondary" type="button" @click="addCompletedRoute">
      Add Completed Route
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scoreItems: [
	    {
          name: 'Route length 1',
          quantity: 0,
          calculateScore: (quantity) => {
            if (quantity === 0) return 0
            return quantity
          },
        },
		    {
          name: 'Route length 2',
          quantity: 0,
          calculateScore: (quantity) => {
            if (quantity === 0) return 0
            return quantity*2
          },
        },
        {
          name: 'Route length 3',
          quantity: 0,
          calculateScore: (quantity) => {
            if (quantity === 0) return 0
            return quantity*4
          },
        },
        {
          name: 'Route length 4',
          quantity: 0,
          calculateScore: (quantity) => {
            if (quantity === 0) return 0
            return quantity*7
          },
        },
        {
          name: 'Route length 5',
          quantity: 0,
          calculateScore: (quantity) => {
            if (quantity === 0) return 0
            return quantity*10
          },
        },
        {
          name: 'Route length 6',
          quantity: 0,
          calculateScore: (quantity) => {
            if (quantity === 0) return 0
            return quantity*15
          },
        },
        {
          name: 'Kept Station',
          quantity: 0,
          calculateScore: (quantity) => {
            if (quantity === 0) return 0
            return quantity*4
          },
        },
      ],
      availableRoutes: [
        { name: '20-point route', points: 20 },
        { name: '10-point route', points: 10 },
        { name: '7-point route', points: 7 },
        { name: '5-point route', points: 5 },
      ],
      completedRoutes: [],
      selectedRoute: '',
    }
  },
  computed: {
    totalScore() {
      const baseScore = this.scoreItems.reduce(
          (total, item) => total + item.calculateScore(item.quantity),
          0
      )
      const routeScore = this.completedRoutes.reduce(
          (total, route) => total + route.points,
          0
      )
      return baseScore + routeScore
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
    addCompletedRoute() {
      if (this.selectedRoute) {
        this.completedRoutes.push(this.selectedRoute)
        this.selectedRoute = '' // Reset the dropdown
      }
    },
  },
}
</script>

<style scoped>
/* Add any specific styles for this calculator here */
</style>
