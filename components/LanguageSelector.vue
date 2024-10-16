<script setup>
defineProps({
    onDark: Boolean,
})
const { locale, locales } = useI18n()
const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value)
})
</script>

<template>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mt-4 flex justify-end gap-x-6">
            <NuxtLink
                :class="{ '--onDark': onDark }"
                class="btn-round"
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)">
                {{ locale.name }}
            </NuxtLink>
        </div>
    </div>
</template>
