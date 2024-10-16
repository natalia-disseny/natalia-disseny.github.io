<script setup>
import { TransitionRoot } from '@headlessui/vue'
import { inject } from 'vue'
const menuIsVisible = inject('menuIsVisible')

const menu = [
    {
        title: 'Our Work',
        route: '/about',
    },
    {
        title: 'Our Work',
        route: '/about',
    },
    {
        title: 'Our Work',
        route: '/about',
    },
    {
        title: 'Our Work',
        route: '/about',
    },
]
</script>

<template>
    <header>
        <div class="absolute left-0 right-0 top-2 z-30">
            <LanguageSelector class="mb-6 hidden sm:block" />
            <LayoutHeaderMenu />
        </div>
        <div class="relative z-50 overflow-hidden bg-black pt-2">
            <TransitionRoot
                :show="menuIsVisible"
                enter="transition-all duration-300 ease-in"
                enter-from="transform opacity-0 max-h-0"
                enter-to="transform opacity-100 max-h-[550px]"
                leave="transition-all duration-300 ease-out"
                leave-from="transform opacity-100 max-h-[550px]"
                leave-to="transform opacity-0 max-h-0">
                <LanguageSelector on-dark class="hidden sm:block" />

                <LayoutHeaderMenu onDark />

                <nav
                    class="mt-px font-display text-5xl font-medium tracking-tight text-white">
                    <div class="even:mt-px sm:bg-black">
                        <div class="mx-auto max-w-7xl px-6 lg:px-8">
                            <div class="mx-auto max-w-2xl lg:max-w-none">
                                <div class="grid grid-cols-1 sm:grid-cols-2">
                                    <NuxtLink
                                        @click="menuIsVisible = false"
                                        v-for="item in menu"
                                        class="group relative isolate -mx-6 bg-black px-6 py-10 before:w-px even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:pl-16"
                                        :to="localePath(item.route)"
                                        >{{ item.title
                                        }}<span
                                            class="absolute inset-y-0 -z-10 w-screen bg-coral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100"></span
                                    ></NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div
                    class="relative bg-black before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-black">
                    <div class="mx-auto max-w-7xl px-6 lg:px-8">
                        <div class="mx-auto max-w-2xl lg:max-w-none">
                            <div
                                class="grid grid-cols-1 gap-y-10 pb-16 pt-10 sm:grid-cols-2 sm:pt-16">
                                <ContactInfo on-dark />
                                <div class="sm:pl-16">
                                    <Social on-dark />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TransitionRoot>
        </div>
    </header>
</template>
