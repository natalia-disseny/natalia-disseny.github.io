<script setup>
const localePath = useLocalePath()
</script>
<template>
    <NuxtLink :to="localePath('/')" title="Home" class="flex items-end gap-4">
        <img src="/public/logo.svg" width="70" alt="Logo" />
        <span class="mb-2 text-3xl">{{ useAppConfig().contact.company }}</span>
    </NuxtLink>
</template>
