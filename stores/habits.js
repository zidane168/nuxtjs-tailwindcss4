
import { addDoc, collection } from 'firebase/firestore';
import { defineStore } from 'pinia'

export const useHabitStore = defineStore('habitStore', {
    state: () => ({
        habits: []
    }),
    action: {
        //fetching all habits

        // adding new habits
        async addHabit(name) {

            const { $db } = useNuxtApp();
            const habit = {
                name, 
                completions: [],
                streak: 0,
            }

            await addDoc(collection($db, 'habits'), habit)
            this.habits.push({ id: addDoc.id, ...habit })
        }


        // updating habits


        // deleting habits

        // cmpleting a daily habits


    }
})