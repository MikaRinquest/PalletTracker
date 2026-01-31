<template>
  <div class="hold">
    <h1 class="area">Port Elizabeth Orders</h1>

    <table class="table">
      <tr class="row-head">
        <th class="column-main">Product</th>
        <th class="column">Size</th>
        <th class="column">Qty</th>
      </tr>
      <tr class="row" v-for="order in orders" :key="order.id">
        <td class="column-main">{{ order.name }}</td>
        <td class="column">{{ order.size }}</td>
        <td class="column">{{ order.qty }}</td>
      </tr>
    </table>
    <div class="button-holder">
      <BackButton />
      <div class="button">Build</div>
    </div>
  </div>
</template>

<script>
import BackButton from "../BackButton.vue";
export default {
  components: {
    BackButton,
  },
  data() {
    return {
      orders: [
        {
          id: 1,
          name: "Sabreshield",
          size: "20L",
          qty: "5",
        },
        {
          id: 2,
          name: "Sabreskim",
          size: "30kg",
          qty: "15",
        },
        {
          id: 3,
          name: "Poly Acrylic White",
          size: "20L",
          qty: "9",
        },
      ],
    };
  },
};
</script>

<style scoped>
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

.hold {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.table {
  width: 80%;
}

.row {
  border: 1px solid black;
}

.row-head {
  height: 2rem;
  font: bold;
  font-size: 1.3rem;
}

.column-main {
  width: 80%;
}

.column {
  width: 10%;
}

.button-holder {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 3rem;
}
</style>
