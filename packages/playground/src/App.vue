<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello from Vue Libraryss!')
</script>

<template>
  <div class="app">
    <HelloWorld :msg="message" />
  </div>
</template>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
