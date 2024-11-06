<script setup lang="ts">
defineProps({
    onDark: Boolean,
})
</script>

<template>
    <NuxtLink
        :class="[$attrs.class, { '--onDark': onDark }]"
        class="btn-primary">
        <slot />
    </NuxtLink>
</template>
