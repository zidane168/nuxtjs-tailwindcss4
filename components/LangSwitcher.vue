<!-- 
Quá nhiều trang hướng dẫn i18n, chỉ có trang này mới chính thống 
https://next.i18n.nuxtjs.org/docs/getting-started/usage 
-->

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
                v-for="locale in locales"
                :key="typeof locale === 'object' ? locale.code: locale"
                :value="typeof locale === 'object' ? locale.code: locale"
            >
                {{ typeof locale === 'object' ? locale.name : locale }}
            </option>
        </select>
    </div>
</template>