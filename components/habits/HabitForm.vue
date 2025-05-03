<template>
    <div class="mt-[100px] justify-center flex flex-col items-center">
      
        <form @submit.prevent="handleSubmit">
            <div class="flex gap-2 mt-2">
                <UInput v-model="name" placeholder="Enter a new habit" />
                <UButton type="submit" class="hover:cursor-pointer" label="Add Habit" />
            </div>
        </form> 
    </div>    
</template>

<script lang="js" setup>
import { UButton, UInput } from '#components';
import { ref } from 'vue'
import { useHabitStore } from '~/stores/habits';

const name = ref('')
// const habitStore = useHabitStore()

const handleSubmit = async() => { 
    if (name.value.trim()) {
        console.log(name.value)
        name.value = '';
    }
}

</script>