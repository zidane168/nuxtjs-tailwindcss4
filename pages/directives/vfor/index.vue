<template>
    <div>
        <h1> This is vfor demo page </h1>
        <ul class="m-[10px] border rounded-md p-2 w-[300px] shadow-md">
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