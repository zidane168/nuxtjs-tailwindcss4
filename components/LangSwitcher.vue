<script lang="ts" setup>
    const { locales, locale, setLocale } = useI18n()

    const language = computed({
        get: () => locale.value,
        set: (value) => {
            setLocale(value);
        }
    })
</script>

<template>

    <div class="p-4">
        <div class="text-blue-500"> Switch Language </div>
        <select v-model="language">
            <option
                v-for="item in locales"
                :key="typeof item === 'object' ? item.code: item"
                :value="typeof item === 'object' ? item.code: item"
            >
                {{ typeof item === 'object' ? item.name : item }}
            </option>
        </select>
    </div>
</template>