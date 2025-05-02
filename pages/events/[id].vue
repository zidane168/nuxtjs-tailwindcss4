<template> 
    <div> Here is route.param.id content Event id: {{ $route.params.id }} </div> 
    
    
    <UTabs :items="items" variant="link" class="w-full gap-4" :ui="{ trigger: 'flex-1' }">
    <template #account="{ item }">
      <p class="mb-4 text-muted">
        {{ item.description }}
      </p>

      <UForm :state="state" class="flex flex-col gap-4">
        <UFormField label="Name" name="name">
          <UInput v-model="state.name" class="w-full" />
        </UFormField>
        <UFormField label="Username" name="username">
          <UInput v-model="state.username" class="w-full" />
        </UFormField>

        <UButton label="Save changes" type="submit" variant="soft" class="self-end" />
      </UForm>
    </template>

    <template #password="{ item }">
      <p class="mb-4 text-muted">
        {{ item.description }}
      </p>

      <UForm :state="state" class="flex flex-col gap-4">
        <UFormField label="Current Password" name="current" required>
          <UInput v-model="state.currentPassword" type="password" required class="w-full" />
        </UFormField>
        <UFormField label="New Password" name="new" required>
          <UInput v-model="state.newPassword" type="password" required class="w-full" />
        </UFormField>
        <UFormField label="Confirm Password" name="confirm" required>
          <UInput v-model="state.confirmPassword" type="password" required class="w-full" />
        </UFormField>

        <UButton label="Change password" type="submit" variant="soft" class="self-end" />
      </UForm>
    </template>
  </UTabs>
</template>
 

<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'


const items = [
  {
    label: 'Account',
    description: 'Make changes to your account here. Click save when you\'re done.',
    icon: 'i-lucide-user',
    slot: 'account' as const
  },
  {
    label: 'Password',
    description: 'Change your password here. After saving, you\'ll be logged out.',
    icon: 'i-lucide-lock',
    slot: 'password' as const
  }
] satisfies TabsItem[]

const state = reactive({
  name: 'Benjamin Canac',
  username: 'benjamincanac',
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})
</script>