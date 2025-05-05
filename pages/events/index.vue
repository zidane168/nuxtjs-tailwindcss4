
<script setup lang="ts">

    import type { Alert } from '@/components/ui/alert-dialog'
    let loading = true
    // const props = defineProps<{
    //     title: string
    // }>()

    const toast = useToast()

    function showToast() {
        toast.add({
            title: "Display a message here!",
            icon: 'i-lucide-wifi',
        })
    }
</script>

<template>
    <h1 class="font-display"> Here is events index pages </h1>  

    <UAlert
        title="Heads up!"
        description="You can change the primary color in your app config."
        :avatar="{
            src: 'https://github.com/nuxt.png'
        }"
    /> 

    <UAvatar src="https://github.com/benjamincanac.png" />
    
    <UButton  >Button</UButton>
    <UButton label="Show toast" color="neutral" variant="outline" @click="showToast" />
</template>
