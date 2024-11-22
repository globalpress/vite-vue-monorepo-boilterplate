<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="hello-world">
    <h1>{{ msg }}</h1>
  </div>
</template>

<style scoped>
.hello-world {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
