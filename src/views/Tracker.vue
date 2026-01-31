<template>
  <div class="home">
    <h1>Current Pallets</h1>
    <div class="pallets">
      <div class="pallet">
        <table class="table">
          <tr class="row" v-for="order in orders" :key="order.id">
            <td class="column-main">{{ order.name }}</td>
            <td>{{ order.size }}</td>
            <td>{{ order.qty }}</td>
          </tr>
        </table>
        <div class="weight">Weight :</div>
      </div>
      <div class="pallet">
        <table class="table">
          <tr class="row" v-for="order in orders" :key="order.id">
            <td class="column-main">{{ order.name }}</td>
            <td>{{ order.size }}</td>
            <td>{{ order.qty }}</td>
          </tr>
        </table>
        <div class="weight">Weight :</div>
      </div>
      <div class="pallet">
        <table class="table">
          <tr class="row" v-for="order in orders" :key="order.id">
            <td class="column-main">{{ order.name }}</td>
            <td>{{ order.size }}</td>
            <td>{{ order.qty }}</td>
          </tr>
        </table>
        <div class="weight">Weight :</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
  data() {
    return {
      orders: [
        {
          id: 1,
          name: "Sabreshield",
          size: "20L",
          qty: "5",
          weight: 20,
        },
        {
          id: 2,
          name: "Sabreskim",
          size: "30kg",
          qty: "15",
          weight: 30,
        },
        {
          id: 3,
          name: "Poly Acrylic White",
          size: "20L",
          qty: "9",
          weight: 20,
        },
      ],
    };
  },
};
</script>

<style scoped>
table,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

.pallets {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1rem;
}

.pallet {
  width: 45%;
  margin-bottom: 2rem;
}

.table {
  width: 100%;
}

.row {
  border: 1px solid black;
}

.column-main {
  width: 80%;
}

.column {
  width: 10%;
}

.weight {
  justify-self: left;
  padding-top: 1rem;
}
</style>
