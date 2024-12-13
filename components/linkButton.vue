<script setup>
    const props = defineProps({
        link: {type: String, required: true}
    })
</script>

<template>
    <NuxtLink class="text-white border border-black bg-black py-3 px-4 w-fit rounded hover:bg-white hover:text-black" :to="link" >
        <slot />
    </NuxtLink>
</template>