<script setup>
defineProps({ image: String, title: String })
</script>

<template>
    <div class="relative overflow-hidden rounded-3xl bg-coral-900">
        <img
            :src="'/home/' + image"
            :alt="title"
            class="aspect-[2/3] w-full object-cover shadow-lg transition-all hover:opacity-90" />
    </div>
</template>
