<template>
    <div class="bg-white mt-[20px] h-[300px] w-[500px] border shadow-2xl rounded-md p-2">
        <ul>
            <li class="" v-for="habit in habits" :key="habit.id">   
                <div class="flex items-center justify-between mb-4">
                    <p class="text-purple-500 font-bold">
                        <span :class="{ 'line-through': habit.completions.includes(today) }">
                        {{ habit.name }}
                        </span>
                    </p>
                    <button class="text-gray-800" @click="deleteHabit(habit.id)">Delete</button>
                </div>

                <div class="flex items-center">
                    <input 
                        type="checkbox" 
                        class="mr-2 accent-purple-500"
                        @change="toggleCompletion(habit)"
                        :checked="habit.completions.includes(today)"
                    />
                    <p class="text-sm text-gray-500">I did this today.</p>
                </div>

                <p class="text-sm text-gray-500 mt-2">Current Streak: {{ habit.streak }} days.</p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useHabitStore } from '~/stores/habits';
import { format } from 'date-fns'

const habitStore = useHabitStore()
await habitStore.fetchHabits();

const habits = habitStore.habits
console.log (habits) 

const deleteHabit = async(id) => {
    await habitStore.deleteHabit(id)
}

const toggleCompletion = async(habit) => {
    await habitStore.toggleCompletion(habit)
}

const today = format(new Date(), 'yyyy-MM-dd')

</script>