<script setup>
const works = [
    {
        name: 'iTalentUp',
        date: '2023 - 2024',
    },
    {
        name: 'ISDIN',
        date: '2017 - 2022',
    },
]
</script>

<template>
    <Title>{{
        $t('portfolio.eyebrow') + ' - ' + useAppConfig().contact.company
    }}</Title>

    <BoxedDiv>
        <Heading
            :eyebrow="$t('portfolio.eyebrow')"
            :heading="$t('portfolio.heading')" />
    </BoxedDiv>

    <div class="grid gap-y-36">
        <div v-for="(project, index) in works">
            <BoxedDiv>
                <div class="divider" />

                <div class="grid grid-cols-3 gap-x-8 gap-y-8 py-16">
                    <div
                        class="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                        <div
                            class="sm:flex sm:items-center sm:gap-x-6 lg:block">
                            <img
                                alt=""
                                loading="lazy"
                                decoding="async"
                                data-nimg="1"
                                class="h-16 w-auto flex-none grayscale transition-all hover:grayscale-0"
                                style="color: transparent"
                                :src="`/projects/${project.name}/logo.png`" />
                            <h3
                                class="mt-6 text-sm font-semibold text-black sm:mt-0 lg:mt-8">
                                {{ project.name }}
                            </h3>
                        </div>

                        <div class="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                            <p
                                class="text-sm tracking-tight text-black after:ml-4 after:font-semibold after:text-primary-300 after:content-['/'] lg:mt-2 lg:after:hidden"
                                v-html="
                                    $t(`portfolio.works[${index}].occupation`)
                                " />
                            <p class="text-sm text-secondary-900 lg:mt-2">
                                <time :datetime="project.date">{{
                                    project.date
                                }}</time>
                            </p>
                        </div>
                    </div>

                    <div class="col-span-full lg:col-span-2 lg:max-w-2xl">
                        <p
                            class="-ml-[0.2rem] font-display text-4xl font-medium text-black">
                            {{ $t(`portfolio.works[${index}].title`) }}
                        </p>
                        <div class="mt-6 space-y-6 text-base text-black">
                            <p
                                v-for="paragraph in $t(
                                    `portfolio.works[${index}].description`
                                ).split('<br/>')">
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>
                </div>
            </BoxedDiv>

            <div class="col-span-full bg-primary-200">
                <div class="-my-px mx-auto max-w-[76rem]">
                    <div class="group relative">
                        <img
                            alt=""
                            fetchpriority="high"
                            width="3648"
                            height="3117"
                            decoding="async"
                            data-nimg="1"
                            class="w-full"
                            style="
                                color: transparent;
                                filter: grayscale(0.822686);
                            "
                            :src="`/projects/${project.name}/screenshot.png`" />
                        <div
                            class="pointer-events-none absolute left-0 top-0 w-full opacity-0 transition duration-300 group-hover:opacity-100"
                            aria-hidden="true">
                            <img
                                alt=""
                                fetchpriority="high"
                                width="3648"
                                height="3117"
                                decoding="async"
                                data-nimg="1"
                                class="w-full"
                                style="color: transparent"
                                :src="`/projects/${project.name}/screenshot.png`" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <ContactBox />
</template>
