<script setup lang="ts">
defineProps<{
    eyebrow: string
    heading: string
    subheading: string
    invertedColors?: boolean
}>()
</script>

<template>
    <div>
        <h1 :class="[invertedColors ? 'text-white' : '', 'text-gray-900']">
            <span class="`font-display block text-2xl font-semibold">{{
                eyebrow
            }}</span
            ><span class="sr-only"> - </span
            ><span
                class="font-display mt-2 block max-w-5xl text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-6xl"
                >{{ heading }}</span
            >
        </h1>
        <div
            :class="[invertedColors ? 'text-white' : 'text-gray-600']"
            class="mt-10 max-w-3xl text-xl">
            <p>{{ subheading }}</p>
        </div>
    </div>
</template>
