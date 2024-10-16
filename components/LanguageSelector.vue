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
        <div class="mr-2 mt-4 flex justify-end gap-x-6">
            <NuxtLink
                :class="
                    onDark
                        ? 'text-white hover:bg-gray-800'
                        : 'hover:bg-coral-50'
                "
                class="h-10 w-10 rounded-full text-center align-middle uppercase leading-10"
                v-for="locale in availableLocales"
                :key="locale.code"
                :to="switchLocalePath(locale.code)">
                {{ locale.name }}
            </NuxtLink>
        </div>
    </div>
</template>
