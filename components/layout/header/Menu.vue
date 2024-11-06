<script setup>
import { inject } from 'vue'

defineProps({
    onDark: Boolean,
})

const menuIsVisible = inject('menuIsVisible')
</script>

<template>
    <div
        class="mx-auto max-w-7xl px-6 lg:px-8"
        :class="{ 'pb-4 sm:pb-16 sm:pt-6': onDark }">
        <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="mt-6 flex items-center justify-between sm:mt-0">
                <Logo :on-dark="onDark" />

                <PrimaryButton
                    @click="menuIsVisible = false"
                    :to="localePath('/contact')"
                    title="Contact"
                    class="sm:hidden"
                    :onDark>
                    {{ $t('contact.cta') }}
                </PrimaryButton>

                <div class="flex items-center gap-x-8">
                    <PrimaryButton
                        @click="menuIsVisible = false"
                        :to="localePath('/contact')"
                        title="Contact"
                        class="hidden sm:inline"
                        :onDark>
                        {{ $t('contact.cta') }}
                    </PrimaryButton>

                    <button
                        @click="menuIsVisible = !menuIsVisible"
                        type="button"
                        aria-expanded="false"
                        :class="
                            onDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                        "
                        class="group rounded-full p-1.5 leading-[10px] transition hover:bg-gray-50"
                        aria-label="Toggle navigation">
                        <span
                            :class="onDark ? 'text-white' : 'text-gray-900'"
                            class="material-symbols-rounded bg-transparent text-[30px]">
                            {{ menuIsVisible ? 'close' : 'menu' }}
                        </span>
                    </button>
                </div>
            </div>

            <LanguageSelector
                v-if="menuIsVisible"
                on-dark
                class="px-0 sm:hidden" />
        </div>
    </div>
</template>
