<script setup>
defineProps({
    onDark: Boolean,
    openMenu: ref,
})
</script>

<template>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
            <div class="flex items-center justify-between">
                <Logo :on-dark="onDark" />

                <div class="flex items-center gap-x-8">
                    <NuxtLink
                        :class="{ '--onDark': onDark }"
                        :to="localePath('/contact')"
                        title="Contact"
                        class="btn-primary">
                        {{ $t('contact.eyebrow') }}
                    </NuxtLink>

                    <button
                        @click="$emit('toggleMenu')"
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
                            {{ openMenu ? 'close' : 'menu' }}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
