<template>
    <div>
        <div class="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
            <Heading
                :eyebrow="$t('about.intro.eyebrow')"
                :heading="$t('about.intro.heading')"
                :subheading="$t('about.intro.subheading')" />
            <div
                class="mt-10 max-w-2xl space-y-6 text-base leading-7 text-gray-600"
                v-html="$t('about.intro.description')" />
        </div>

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
