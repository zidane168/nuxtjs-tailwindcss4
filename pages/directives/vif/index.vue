<template>
    <div>
      <button @click="toggle">Toggle Message</button>
      <p v-if="isVisible">Hello, this is a vif Demo page!</p>
    </div>
  </template>
  
  <script setup lang="js">
  import { ref } from 'vue';
  
  const isVisible = ref(false);
  
  function toggle() {
    isVisible.value = !isVisible.value;
  }
  </script>