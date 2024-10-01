<template>
    <div
        class="mt-24 rounded-[40px] bg-gray-900 py-24 sm:mt-32 lg:mt-40 lg:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <Heading
                :inverted-colors="true"
                :eyebrow="$t('about.services.eyebrow')"
                :heading="$t('about.services.heading')"
                :subheading="$t('about.services.subheading')" />

            <Stats
                class="mt-16"
                :inverted-colors="true"
                :items="[
                    {
                        name: $t('about.services.stats.0'),
                    },
                    {
                        name: $t('about.services.stats.1'),
                    },
                    {
                        name: $t('about.services.stats.2'),
                    },
                    {
                        name: $t('about.services.stats.3'),
                    },
                    {
                        name: $t('about.services.stats.4'),
                    },
                ]" />
        </div>
    </div>
</template>
