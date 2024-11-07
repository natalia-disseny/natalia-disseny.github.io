<script setup lang="ts">
defineProps<{
    eyebrow: string
    heading: string
    onDark?: boolean
}>()
</script>

<template>
    <div class="mb-20">
        <h1 :class="[onDark ? 'text-white' : '', 'text-black']">
            <span class="block font-display text-2xl font-semibold">{{
                eyebrow
            }}</span
            ><span class="sr-only"> - </span
            ><span
                class="-ml-[0.2rem] mb-6 mt-4 block max-w-5xl font-display text-4xl font-bold [text-wrap:balance] sm:text-6xl sm:leading-[4.4rem]"
                v-html="heading" />
        </h1>
    </div>
</template>
