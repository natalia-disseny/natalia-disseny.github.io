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
            <SwitchLocalePathLink
                v-for="locale in availableLocales"
                :key="locale.code"
                :class="[
                    'languageSelector btn-round font-medium disabled:opacity-0',
                    { '--onDark': onDark },
                ]"
                :locale="locale.code"
                >{{ locale.name }}</SwitchLocalePathLink
            >
        </div>
    </div>
</template>

<style>
.languageSelector:not([href]) {
    @apply invisible;
}
</style>
