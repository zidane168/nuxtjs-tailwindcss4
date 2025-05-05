<template>
  <UApp :locale="currentLocale">
    <LangSwitcher />
    <NuxtPage />
  </UApp>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { locale } = useI18n();
const currentLocale = computed(() => locale.value);
</script>