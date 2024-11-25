<script setup>
const localePath = useLocalePath()
</script>

<template>
    <div class="relative isolate">
        <div class="overflow-hidden">
            <div class="mx-auto max-w-7xl px-6 pb-32 lg:px-8">
                <div
                    class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                    <div
                        class="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                        <h1
                            class="text-gray-900 text-pretty text-5xl font-semibold tracking-tight sm:text-7xl">
                            {{ $t('home.headline') }}
                        </h1>
                        <p
                            class="text-gray-500 mt-8 text-pretty text-lg font-medium sm:max-w-md sm:text-xl/8 lg:max-w-none">
                            {{ $t('home.subheadline') }}
                        </p>
                        <div class="mt-10 flex items-center gap-x-6">
                            <PrimaryButton
                                @click="menuIsVisible = false"
                                :to="localePath('/contact')"
                                title="Contact"
                                class="hidden sm:inline">
                                {{ $t('contact.cta') }}
                            </PrimaryButton>
                        </div>
                    </div>
                    <div
                        class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                        <div
                            class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                            <HomeHeroImage
                                src="/home/hero_1.jpg"
                                alt="Decorative image"
                                title="Photo by Andrew Neel: https://www.pexels.com/photo/woman-in-gray-jacket-sitting-beside-desk-2682452/" />
                        </div>
                        <div
                            class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                            <HomeHeroImage
                                src="/home/hero_2.jpg"
                                alt="Decorative image"
                                title="Photo by Leeloo The First from Pexels: https://www.pexels.com/photo/pictures-of-brand-strategy-and-design-7598018/" />
                            <HomeHeroImage
                                src="/home/hero_3.jpg"
                                alt="Decorative image"
                                title="Photo by picjumbo.com: https://www.pexels.com/photo/notebook-beside-the-iphone-on-table-196644/" />
                        </div>
                        <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                            <HomeHeroImage
                                src="/home/hero_4.jpg"
                                alt="Decorative image"
                                title="Photo by Flo Dahm: https://www.pexels.com/photo/turned-on-gray-laptop-computer-on-table-699459/" />
                            <HomeHeroImage
                                src="/home/hero_5.jpg"
                                alt="Decorative image"
                                title="Photo by Antoni Shkraba: https://www.pexels.com/photo/architect-writing-on-floor-plans-5292194/" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
