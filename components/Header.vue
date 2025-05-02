<script>
</script>

<template> 
    <div class="flex flex-row justify-between border p-[10px] mt-[10px] font-bold bg-alert-yellow">
        
        <NuxtLink to="/"> Home </NuxtLink>
        <NuxtLink to="/events"> Events</NuxtLink>
        <NuxtLink to="/events/123-abc-456"> Events with param </NuxtLink> 
    </div> 

    <div class="rounded-[10px] w-[100px] bg-browse p-[5px] text-white mt-[10px]"> 
        Directive
    </div>
    <div class="flex flex-row gap-[10px] border p-[10px] mt-[10px] font-bold bg-alert-yellow">
        
        <NuxtLink to="/directives/vif"> v-if demo </NuxtLink>
        <NuxtLink to="/"> | </NuxtLink>
        <NuxtLink to="/directives/vfor"> v-for demo </NuxtLink>
    </div> 

    <div class="rounded-[10px] w-[100px] bg-browse p-[5px] text-white  mt-[10px]"> 
        Properties
    </div>
    <div class="flex flex-row gap-[10px] border p-[10px] mt-[10px] font-bold bg-alert-yellow">
        
        <NuxtLink to="/properties/computed"> computed demo </NuxtLink> 
    </div> 
</template>

<style lang="scss">

</style>