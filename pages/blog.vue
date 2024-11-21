<script setup>
import LatestArticles from './blog/latest.vue'
const articles = await queryContent('blog').sort({ date: -1 }).skip(3).find()
</script>

<template>
    <Title>{{
        $t('blog.eyebrow') + ' - ' + useAppConfig().contact.company
    }}</Title>

    <BoxedDiv>
        <Heading :eyebrow="$t('blog.eyebrow')" :heading="$t('blog.heading')" />
        <LatestArticles />
        <div class="grid grid-cols-3 gap-x-8">
            <div v-for="post in articles" class="group">
                <div class="relative">
                    <NuxtLink v-if="post._path" :to="post._path">
                        <div
                            class="absolute -left-2 top-4 z-10 rounded-md bg-secondary-900 px-2 py-1 text-xs uppercase tracking-wider text-white shadow-sm">
                            {{ post.type }}
                        </div>
                        <div class="overflow-hidden rounded-3xl bg-coral-900">
                            <img
                                loading="lazy"
                                class="h-[200px] w-full object-cover opacity-90 transition duration-500 motion-safe:group-hover:scale-105"
                                :src="'/blog/' + post.image"
                                :alt="post.imageTitle"
                                :title="post.title" />
                        </div>
                    </NuxtLink>
                </div>
                <div class="">
                    <p class="my-2 font-body text-base text-secondary-900">
                        {{ post.date }}
                    </p>
                    <h2 class="mb-4 font-display text-lg font-bold">
                        {{ post.title }}
                    </h2>
                    <div class="text-right">
                        <NuxtLink
                            v-if="post._path"
                            :to="post._path"
                            class="btn-primary">
                            <span class="material-symbols-rounded align-bottom">
                                read_more
                            </span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <NuxtPage />
    </BoxedDiv>

    <ContactBox />
</template>
