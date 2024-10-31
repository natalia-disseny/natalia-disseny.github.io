<script setup>
const licenses = ['cc', 'by', 'nc', 'sa']
const currentDate = new Date()
</script>

<template>
    <footer class="mx-auto w-full max-w-7xl bg-white px-6 lg:px-8">
        <div
            class="border-neutral-950/10 mb-20 flex flex-col flex-wrap items-center gap-x-6 gap-y-4 border-t pt-12 md:flex-row md:justify-between">
            <Logo />
            <div class="text-xs">
                © {{ currentDate.getFullYear() }} - {{ $t('license') }}
                <NuxtLink
                    class="inlineLink"
                    to="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
                    target="_blank"
                    >CC BY-NC-SA 4.0
                </NuxtLink>
                <div class="mt-2 flex justify-center gap-x-2 md:justify-end">
                    <img
                        :title="`License ${license}`"
                        v-for="license in licenses"
                        class="h-6 w-6"
                        :src="`https://mirrors.creativecommons.org/presskit/icons/${license}.svg?ref=chooser-v1`" />
                </div>
            </div>
        </div>
    </footer>
</template>
