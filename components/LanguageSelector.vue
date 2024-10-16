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
        <div
            class="mx-auto mt-4 flex max-w-2xl justify-end gap-x-6 lg:max-w-none">
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
