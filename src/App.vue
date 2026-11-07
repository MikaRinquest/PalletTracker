<script setup lang="ts"></script>

<template>
  <main>
    <nav>
      <div class="nav">
        <router-link to="/"><p class="home">Home</p></router-link>
      </div>
    </nav>
    <RouterView />
  </main>
</template>

<style>
.home {
  font: bold;
  font-size: 5vh;
}

.nav {
  height: 5vh;
}
</style>
