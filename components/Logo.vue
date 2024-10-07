<script setup>
const appConfig = useAppConfig()
const localePath = useLocalePath()
</script>
<template>
    <NuxtLink :to="localePath('/')" title="Home">{{
        appConfig.contact.company
    }}</NuxtLink>
</template>
