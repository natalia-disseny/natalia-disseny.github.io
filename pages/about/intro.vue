<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
    <div>
        <BoxedDiv class="grid-cols-3 items-start gap-10">
            <div class="col-span-2">
                <Heading
                    :eyebrow="$t('about.intro.eyebrow')"
                    :heading="$t('about.intro.heading')"
                    :subheading="$t('about.intro.subheading')" />
                <div
                    class="mt-10 max-w-2xl space-y-6 text-base leading-7 text-gray-600"
                    v-html="$t('about.intro.description')" />
            </div>

            <div class="group relative overflow-hidden rounded-3xl bg-gray-100">
                <img
                    alt=""
                    loading="lazy"
                    class="w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                    srcset="
                        https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleslie-alexander.cf5840d1.jpg&w=1920&q=75 1x,
                        https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleslie-alexander.cf5840d1.jpg&w=1920&q=75 2x
                    "
                    src="https://studio.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleslie-alexander.cf5840d1.jpg&w=1920&q=75" />
                <div
                    class="from-black to-black/0 absolute inset-0 flex flex-col justify-end bg-gradient-to-t to-40% p-6">
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
