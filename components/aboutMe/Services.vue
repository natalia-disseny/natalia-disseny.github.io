<template>
    <BoxedDiv>
        <Heading
            :eyebrow="$t('about.services.eyebrow')"
            :heading="$t('about.services.heading')" />

        <Stats
            :cols="2"
            class="mx-auto my-16 max-w-7xl"
            :items="[
                {
                    name: $t('about.services.stats.0.description'),
                    icon: 'draw_abstract',
                },
                {
                    name: $t('about.services.stats.1.description'),
                    icon: 'storefront',
                },
                {
                    name: $t('about.services.stats.2.description'),
                    icon: 'settings_heart',
                },
                {
                    name: $t('about.services.stats.3.description'),
                    icon: 'volunteer_activism',
                },
            ]" />
    </BoxedDiv>
</template>
