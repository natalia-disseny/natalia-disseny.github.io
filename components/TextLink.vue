<script setup>
defineProps({
    link: String,
})
</script>

<template>
    <NuxtLink :to="link" class="hover:text-coral-500">
        <slot />
    </NuxtLink>
</template>
