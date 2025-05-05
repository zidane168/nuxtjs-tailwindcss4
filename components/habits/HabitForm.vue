
<script lang="js" setup>
import { UButton, UInput } from '#components';
import { ref } from 'vue'
import { useHabitStore } from '~/stores/habits';

const name = ref('')        
const habitStore = useHabitStore()

const handleSubmit = async() => { 
    console.log(name.value)

    if (name.value.trim()) {
        console.log(name.value) 
        await habitStore.addHabit(name.value)  
        const toast = useToast() 
        toast.add({
            title: 'Add Habit: ' + name.value + ' Successfully!!!'
        }) 
        name.value = '';
    }
}

</script> 

<template>
    <div class="flex flex-col items-center justify-center ">
      
        <form @submit.prevent="handleSubmit">
            <div class="flex gap-2 mt-2">
                <UInput v-model="name" placeholder="Enter a new habit" />
                <UButton type="submit" class="hover:cursor-pointer" label="Add Habit" />
            </div>
        </form> 
    </div>    
</template>
