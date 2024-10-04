<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value)
})
</script>

<template>
    <header>
        <div class="absolute left-0 right-0 top-2 z-30 pt-14">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl lg:max-w-none">
                    <div class="flex items-center justify-between">
                        <Logo />

                        <div class="flex items-center gap-x-8">
                            <NuxtLink
                                class="hover:text-teal bg-white text-gray-600"
                                v-for="locale in availableLocales"
                                :key="locale.code"
                                :to="switchLocalePath(locale.code)">
                                {{ locale.name }}
                            </NuxtLink>

                            <NuxtLink
                                to="/contact"
                                title="Contact"
                                class="btn-primary">
                                {{ $t('contact.eyebrow') }}
                            </NuxtLink>

                            <button
                                type="button"
                                aria-expanded="false"
                                class="group rounded-full p-1.5 leading-[10px] transition hover:bg-gray-50"
                                aria-label="Toggle navigation">
                                <span
                                    class="material-symbols-rounded bg-transparent text-[30px] text-gray-900">
                                    menu
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative z-50 overflow-hidden bg-gray-900 pt-2"></div>
    </header>
</template>
