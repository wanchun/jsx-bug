<script setup>
import { ref  } from 'vue'
import Test from './components/test.jsx'

const title = ref({a: 1})

setTimeout(() => {
  title.value = 1;
}, 1000);


</script>

<template>
  <Test :title="title" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
