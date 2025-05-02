<template> 
    <div> Here is route.param.id content Event id: {{ $route.params.id }} </div> 
    <UTabs color="secondary" :items="items" class="w-full " /> 
</template>
 

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'

const items = ref<TabsItem[]>([
  {
    label: 'Account',
    icon: 'i-lucide-user',
    content: 'This is the account content.'
  },
  {
    label: 'Password',
    icon: 'i-lucide-lock',
    content: 'This is the password content.'
  }
])
</script>