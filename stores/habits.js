
import { addDoc, collection, getDocs, updateDoc } from 'firebase/firestore';
import { defineStore } from 'pinia'

export const useHabitStore = defineStore('habitStore', {
    state: () => ({
        habits: []
    }),
    actions: {  // actions có s, ko có s là bi sai luôn nha
        // fetching all habits
        async fetchHabits() {
            const { $db } = useNuxtApp()

            const list = await getDocs(collection($db, 'habits'))
            this.habits = list.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
        },

        // adding new habits
        async addHabit(name) {

            console.log ('name = ' + name)

            const { $db } = useNuxtApp();
            const habit = {
                name: name, 
                completions: [],
                streak: 0,
            }

            const docRef = await addDoc(collection($db, 'habits'), habit)
            this.habits.push({ id: docRef.id, ...habit })
        },


        // updating habits
        async updateHabits(id, updates) {
            const { $db } = useNuxtApp()

            const habit = doc($db, 'habits', id)
            await updateDoc(habit, updates)

            const index = this.habits.findIndex((habit) => habit.id === id)

            if (index !== -1) {
                this.habits[index] = { ...this.habits[index], ...updates }
            }
        },

        // deleting habits
        async deleteHabit(id) {
            const { $db } = useNuxtApp()

            const doc = doc($db, 'habits', id)
            await this.deleteHabit(doc)

            this.habits = this.habits.filter(habit => habit.id !== id)
        },

        // completing a daily habits
        toggleCompletion(habit) {
            const today = format(new Date(), 'yyyy-MM-dd')

            if (habit.completions.includes(today)) {
                habit.completions = habit.completions.filter(date => date !== today)
            }
            else {
                habit.completions.push(today)
            }

            habit.streak = this.calculateStreak(habit.completions)

            this.updateHabits(habit.id, {
                completions: habit.completions,
                streak: habit.streak
            })
        },

        calculateStreak(completions) {
            const sortedDates = completions.sort((a, b) => new Date(b) - new Date(a))

            let streak = 0
            let today = new Date()

            for (const date of sortedDates) {
                const diff = differenceInDays(today, new Date(date))

                if (diff > 1) {
                    break
                }
                streak += 1
                currentDate = new Date(date)
            }

            return streak;
        }


    }
})