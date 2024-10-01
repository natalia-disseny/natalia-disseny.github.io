<script setup>
defineProps({
    link: String,
})
</script>

<template>
    <NuxtLink
        :to="link"
        class="focus-visible:outline-indigo-600 rounded-full border border-teal bg-teal px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105 hover:border hover:bg-white hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
        <slot />
    </NuxtLink>
</template>
