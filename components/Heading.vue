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
            <span class="font-display block text-2xl font-semibold">{{
                eyebrow
            }}</span
            ><span class="sr-only"> - </span
            ><span
                class="font-display mb-6 mt-4 block max-w-5xl text-5xl font-bold tracking-tight [text-wrap:balance] sm:text-6xl"
                v-html="heading" />
        </h1>
        <div class="mb-16 max-w-3xl text-xl">
            <p
                class="font-display"
                :class="[
                    invertedColors
                        ? 'text-blue-100'
                        : 'font-semibold text-blue-700',
                ]">
                {{ subheading }}
            </p>
        </div>
    </div>
</template>
