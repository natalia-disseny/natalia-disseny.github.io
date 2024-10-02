<script setup>
const appConfig = useAppConfig()
</script>
<template>
    <NuxtLink to="/" title="Home">{{ appConfig.contact.company }}</NuxtLink>
</template>
