<template>
  <h1>Kleurspace</h1>
  <div class="area-holder">
    <div class="location" v-for="location in locations" :key="location.id">
      <h2 class="heading">{{ location.name }}</h2>
      <Nav />
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue"; //Imports files from different folder
export default {
  components: {
    Nav,
  },
  data() {
    return {
      locations: [
        {
          id: 1,
          name: "George",
        },
        {
          id: 2,
          name: "Port Elizabeth",
        },
        {
          id: 3,
          name: "St Francis",
        },
      ],
    };
  },
};
</script>

<style scoped>
.area-holder {
  display: flex;
  margin-top: 2rem;
}

.location {
  width: 30%;
  border: 2px solid black;
  margin-left: 1rem;
}
.heading {
  text-align: center;
}
</style>
