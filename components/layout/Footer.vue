<script setup>
const appConfig = useAppConfig()
defineProps({
    link: String,
})

const licenseImages = [
    'https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1',
    'https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1',
    'https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1',
    'https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1',
]

const currentDate = new Date()
</script>

<template>
    <footer class="mx-auto w-full max-w-7xl bg-white px-6 lg:px-8">
        <div
            class="border-neutral-950/10 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t pt-12">
            <Logo />
            <div class="text-xs">
                <p xmlns:cc="http://creativecommons.org/ns#">
                    © {{ currentDate.getFullYear() }} - This work is licensed
                    under
                    <TextLink
                        link="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
                        target="_blank"
                        >CC BY-NC-SA 4.0

                        <div class="mt-2 flex justify-end gap-x-2">
                            <img
                                v-for="image in licenseImages"
                                class="h-6"
                                :src="image" />
                        </div>
                    </TextLink>
                </p>
            </div>
        </div>
    </footer>
</template>
