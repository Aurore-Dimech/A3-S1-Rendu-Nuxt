<script setup>
    const props = defineProps({
        link: {type: String, required: true}
    })
</script>

<template>
    <NuxtLink class="text-white bg-black py-3 px-4 w-fit rounded" :to="link" >
        <slot />
    </NuxtLink>
</template>