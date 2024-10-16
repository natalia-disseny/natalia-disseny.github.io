<script setup>
import { inject } from 'vue'

defineProps({
    onDark: Boolean,
})

const menuIsVisible = inject('menuIsVisible')

const Nfill = '#005252'
const Dfill = '#008080'
const logoSize = 50
</script>
<template>
    <NuxtLink
        @click="menuIsVisible = false"
        :to="localePath('/')"
        title="Home"
        class="flex items-center gap-10">
        <svg
            class="overflow-visible"
            :width="logoSize"
            viewBox="0 0 496 496"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                :class="[onDark ? 'fill-white' : 'fill-teal-900']"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 372H248L0 124V372Z" />
            <path
                :class="[onDark ? 'fill-white' : 'fill-teal-400']"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M248 496C384.967 496 496 384.967 496 248C496 111.033 384.967 0 248 0V496Z" />
        </svg>

        <span
            class="hidden text-2xl sm:block"
            :class="[onDark ? 'text-white' : 'text-gray-900']"
            >{{ useAppConfig().contact.company }}</span
        >
    </NuxtLink>
</template>
