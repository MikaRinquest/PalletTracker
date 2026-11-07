<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="area-holder">
      <router-link to="/george"><h1>George</h1></router-link>
    </div>
    <div class="area-holder">
      <router-link to="/pe"> <h1>Port Elizabeth</h1></router-link>
    </div>
    <div class="area-holder">
      <router-link to="/stfrancis"> <h1>St Francis</h1></router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
  align-items: center;
}

.area-holder {
  border: 1px solid black;
  padding: 10%;
}
</style>
