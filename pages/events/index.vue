<template>
    <h1 class="font-display"> Here is events index pages </h1>

    <UButton loading>Button</UButton>
    <UButton label="Show toast" color="neutral" variant="outline" @click="showToast" />
</template>

<script setup lang="ts">
    const props = defineProps<{
        title: string
    }>()

    const toast = useToast()

    function showToast() {
        toast.add({
            title: "Display a message here!",
            icon: 'i-lucide-wifi',
        })
    }
</script>