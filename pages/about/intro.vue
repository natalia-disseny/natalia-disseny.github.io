<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
    <div>
        <BoxedDiv class="grid grid-cols-3 items-start gap-10">
            <div class="col-span-2">
                <Heading
                    :eyebrow="$t('about.intro.eyebrow')"
                    :heading="$t('about.intro.heading')"
                    :subheading="$t('about.intro.subheading')" />
                <div
                    class="max-w-2xl space-y-6"
                    v-html="$t('about.intro.description')" />
            </div>

            <div class="group relative overflow-hidden rounded-3xl bg-gray-100">
                <img
                    alt=""
                    loading="lazy"
                    class="w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                    src="/public/profilePicture.jpg" />
                <div
                    class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                    <p
                        class="font-display text-base/6 font-semibold tracking-wide text-white">
                        {{ appConfig.contact.name }}
                    </p>
                    <p class="mt-2 text-sm text-white">
                        {{ appConfig.contact.description }}
                    </p>
                </div>
            </div>
        </BoxedDiv>

        <Stats
            class="mx-auto mt-16 max-w-7xl px-6 lg:px-8"
            :items="[
                {
                    name: $t('about.intro.stats.0'),
                    value: '10',
                },
                {
                    name: $t('about.intro.stats.1'),
                    value: '+50',
                },
            ]" />
    </div>
</template>
