<script setup>
defineProps({
    onDark: Boolean,
})
</script>

<template>
    <div :class="{ 'fill-white text-white': onDark }">
        <h2 class="font-display text-base font-semibold text-black">
            {{ $t('contact.follow') }}
        </h2>
        <div class="-ml-2.5 mt-4 flex gap-x-6">
            <a
                v-for="social in useAppConfig().contact.social"
                :aria-label="social.label"
                :class="{ '--onDark': onDark }"
                class="btn-round text-2xl transition"
                :href="social.url"
                target="_blank"
                ><i :class="`icon-${social.icon}`"></i>
            </a>
        </div>
    </div>
</template>
