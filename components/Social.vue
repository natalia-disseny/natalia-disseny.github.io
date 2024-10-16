<script setup>
defineProps({
    onDark: Boolean,
})
</script>

<template>
    <div :class="{ 'fill-white text-white': onDark }">
        <h2 class="text-gray-950 font-display text-base font-semibold">
            {{ $t('contact.follow') }}
        </h2>
        <div class="-ml-2.5 mt-4 flex gap-x-6">
            <a
                v-for="social in useAppConfig().contact.social"
                :aria-label="social.label"
                :class="{ '--onDark': onDark }"
                class="btn-round transition"
                :href="social.url"
                target="_blank"
                ><svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="fill-current h-6 w-6">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        :d="social.svg"></path></svg
            ></a>
        </div>
    </div>
</template>
