<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
    <div class="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
            <div
                class="rounded-[40px] bg-gray-900 py-24 text-white sm:mt-32 lg:mt-40 lg:py-32">
                <div class="mx-auto max-w-4xl">
                    <h2 class="mb-10 text-4xl">
                        {{ $t('contact.description') }}
                    </h2>

                    <NuxtLink
                        :to="localePath('/contact')"
                        class="btn-primary --onDark">
                        {{ $t('contact.cta') }}
                    </NuxtLink>

                    <div class="mt-10 w-1/2 border-t border-white/10 pt-10">
                        <ContactInfo />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
