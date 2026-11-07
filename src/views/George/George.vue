<template>
  <div class="page">
    <div class="options">
      <div><h2>Orders</h2></div>
      <div><h2>Pallets</h2></div>
      <div><h2>Back orders</h2></div>
      <div><h2>History</h2></div>
    </div>
    <div class="display"></div>
  </div>
</template>

<script lang="ts" setup></script>

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

.display {
  background-color: aqua;
}
</style>
