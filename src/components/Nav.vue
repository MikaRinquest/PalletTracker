<template>
  <div>
    <nav id="navi">
      <router-link class="navlink" to="/orders">Back Orders</router-link>
      <router-link class="navlink" to="/track">Track Pallets</router-link>
      <router-link class="navlink" to="/history">History</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
#navi {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1rem;
}

.navlink {
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
  color: black;
  text-decoration: none;
  font-weight: bold;
}
</style>
