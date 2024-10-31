<script setup lang="ts">
defineProps({
    onDark: Boolean,
})

const appConfig = useAppConfig()
</script>

<template>
    <div :class="{ 'text-white': onDark }">
        <h2 class="font-display text-base font-semibold">
            {{ $t('contact.addressTitle') }}
        </h2>
        <ul role="list" class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <li>
                <address class="text-sm not-italic">
                    <strong class="text-gray-950">Sant Celoni</strong><br />
                    Carrer Joan Maragall
                    <br />
                    08470 Barcelona
                </address>
            </li>
            <li>
                <address class="text-sm not-italic">
                    <br />
                    <NuxtLink
                        :class="{ '--onDark z-10': onDark }"
                        class="inlineLink"
                        :to="
                            'tel:+34' +
                            appConfig.contact.phone.replace(/\s/g, '')
                        "
                        >+34 {{ appConfig.contact.phone }}</NuxtLink
                    ><br />
                    <NuxtLink
                        :class="{ '--onDark z-10': onDark }"
                        class="inlineLink"
                        :to="'mailto:' + appConfig.contact.email"
                        >{{ appConfig.contact.email }}</NuxtLink
                    >
                </address>
            </li>
        </ul>
    </div>
</template>
