<template>
    <div>
        <h1> My favorite Fruits </h1>
        <ul>
            <li v-for="(fruit, index) in fruits" :key="index" >
                {{ fruit }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">  
    import { ref } from "vue";
    const fruits = ref(["Apple", "Banana", "Cherry", "Date"])
</script>