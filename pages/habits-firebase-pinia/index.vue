<template>
    <div class="mt-[100px] justify-center flex flex-col items-center">
        <div> 
            This is example using Pinia Firebase NuxtJS 
        </div>
        <HabitForm />
        <HabitList />
 
    </div>    
</template>
 

<script setup>
    import HabitForm from '~/components/habits/HabitForm.vue';
    import HabitList from '~/components/habits/HabitList.vue';

</script>