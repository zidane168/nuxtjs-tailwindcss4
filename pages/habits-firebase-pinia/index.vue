<template>
    <div class="mt-[100px] justify-center flex flex-col items-center">
        <div> 
            This is example using Pinia Firebase NuxtJS 
        </div>

        <div class="flex gap-2 mt-2">
            <UInput v-model="name" />
            <UButton class="hover:cursor-pointer" label="Add Habit" />
        </div>

        <div class="bg-white mt-[20px] h-[300px] w-[500px] border shadow-2xl rounded-md p-2">

        </div>
    </div>    
</template>

<script lang="js">
import { UButton, UInput } from '#components';

</script>