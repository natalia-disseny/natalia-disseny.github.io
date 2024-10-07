<script setup>
const localePath = useLocalePath()

defineProps({
    link: String,
})
</script>

<template>
    <NuxtLink :to="localePath(link)" class="hover:text-coral-500">
        <slot />
    </NuxtLink>
</template>
