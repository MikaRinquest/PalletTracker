<template>
  <div class="page">
    <div class="options">
      <div><h2>On order</h2></div>
      <div><h2>Pallets</h2></div>
    </div>
    <div class="display">
      <table class="table">
        <tr class="tableRow">
          <th class="header main">Product</th>
          <th class="header sub">Size</th>
          <th class="header sub">Quantity</th>
        </tr>
        <tr v-for="order in orders" :key="order.id" class="tableRow">
          <td class="data main">{{ order.name }}</td>
          <td class="data sub">{{ order.weight }}</td>
          <td class="data sub">{{ order.qty }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const orders = ref([
  {
    id: 1,
    name: 'Sabreskim',
    weight: 30,
    qty: 2,
  },
  {
    id: 2,
    name: 'Sabreskim',
    weight: 30,
    qty: 2,
  },
  {
    id: 3,
    name: 'Sabreskim',
    weight: 30,
    qty: 2,
  },
  {
    id: 4,
    name: 'Sabreskim',
    weight: 30,
    qty: 2,
  },
])
</script>

<style scoped>
.page {
  width: 90vw;
  height: 90vh;
  display: flex;
  padding: 20px;
}

.options,
.display {
  width: 50%;
}

.options {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.table {
  width: 100%;
  padding: 10px;
  border-collapse: collapse;
  border: 1px solid black;
}

.tableRow {
  width: 100%;
}

.main {
  width: 60%;
}

.sub {
  width: 20%;
}

.header {
  font: bold;
  border-bottom: 2px solid black;
}

th,
td {
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  text-align: center;
  padding: 5px;
}
</style>
