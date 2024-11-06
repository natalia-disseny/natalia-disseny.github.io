<script setup lang="ts">
defineProps<{
    eyebrow: string
    heading: string
    subheading: string
    onDark?: boolean
}>()
</script>

<template>
    <div>
        <h1 :class="[onDark ? 'text-white' : '', 'text-gray-900']">
            <span class="block font-display text-2xl font-semibold">{{
                eyebrow
            }}</span
            ><span class="sr-only"> - </span
            ><span
                class="mb-6 mt-4 block max-w-5xl font-display text-4xl font-bold [text-wrap:balance] sm:text-6xl sm:leading-[4.4rem]"
                v-html="heading" />
        </h1>
        <div class="mb-16 max-w-3xl text-xl">
            <p
                class="font-display"
                :class="[
                    onDark ? 'text-white' : 'font-semibold text-teal-900',
                ]">
                {{ subheading }}
            </p>
        </div>
    </div>
</template>
