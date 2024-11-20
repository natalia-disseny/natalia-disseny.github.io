<script setup>
import { inject } from 'vue'
const localePath = useLocalePath()

defineProps({
    onDark: Boolean,
})

const menuIsVisible = inject('menuIsVisible')
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
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 352H208L0 144V352Z"
                fill="#FF6F61" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M248 496C384.967 496 496 384.967 496 248C496 111.033 384.967 0 248 0V496Z"
                fill="#008080" />
            <path d="M0 392H208V496H0V392Z" fill="#FFEA80" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M208 0L0 0V92.7157L208 300.716V0Z"
                fill="#FFEA80" />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M496 394.513C471.269 436.285 436.285 471.269 394.513 496H496V394.513ZM496 101.487V0L394.513 0C436.285 24.7311 471.269 59.7152 496 101.487Z"
                fill="#FF6F61" />
        </svg>

        <span
            class="hidden text-2xl sm:block"
            :class="[onDark ? 'text-white' : 'text-black']"
            >{{ useAppConfig().contact.company }}</span
        >
    </NuxtLink>
</template>
