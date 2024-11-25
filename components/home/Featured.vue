<script setup>
const features = [
    {
        name: 'Development',
        description:
            'Tailored websites that combine unique designs and robust functionality to perfectly reflect your brand and meet your business goals.',
        icon: 'coding',
    },
    {
        name: 'Design',
        description:
            'Visual solutions to enhance your brand identity, from memorable logos to cohesive design elements that elevate your marketing materials.',
        icon: 'design',
    },
    {
        name: 'Consulting',
        description:
            'Expert guidance to optimize your online presence, improve user engagement, and drive results through targeted, innovative strategies.',
        icon: 'consulting',
    },
]
</script>

<template>
    <div class="text-center">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:max-w-none">
                <dl
                    class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    <div
                        v-for="(feature, index) in features"
                        :key="feature.name"
                        class="flex flex-col">
                        <dt
                            class="mb-4 font-display text-xl font-bold uppercase text-secondary-900">
                            <NuxtImg
                                width="80"
                                height="auto"
                                class="mx-auto mb-10"
                                :src="`/home/icon-${feature.icon}.svg`"
                                :alt="`Decorative icon - ${feature.name}`" />
                            {{ $t(`home.features[${index}].name`) }}
                        </dt>
                        <dd
                            class="mt-1 flex flex-auto flex-col text-base/7 text-primary-600">
                            <p class="flex-auto">
                                {{ $t(`home.features[${index}].description`) }}
                            </p>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>
