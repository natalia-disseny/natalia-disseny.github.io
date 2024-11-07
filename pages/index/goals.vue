<template>
    <div
        class="my-24 rounded-[40px] bg-black py-16 sm:mt-32 sm:py-24 lg:mt-40 lg:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <Heading
                :on-dark="true"
                :eyebrow="$t('about.goals.eyebrow')"
                :heading="$t('about.goals.heading')" />

            <Stats
                :cols="2"
                class="mt-16"
                :on-dark="true"
                :items="[
                    {
                        name: $t('about.goals.stats.0.description'),
                        value: $t('about.goals.stats.0.title'),
                    },
                    {
                        name: $t('about.goals.stats.1.description'),
                        value: $t('about.goals.stats.1.title'),
                    },
                    {
                        name: $t('about.goals.stats.2.description'),
                        value: $t('about.goals.stats.2.title'),
                    },
                    {
                        name: $t('about.goals.stats.3.description'),
                        value: $t('about.goals.stats.3.title'),
                    },
                ]" />
        </div>
    </div>
</template>
