<script setup>
const articles = await queryContent('blog').sort({ date: -1 }).limit(3).find()
</script>

<template>
    <div class="mb-20 flex gap-x-8">
        <div class="group flex basis-2/3 flex-col justify-between">
            <div>
                <div class="relative">
                    <NuxtLink v-if="articles[0]._path" :to="articles[0]._path">
                        <div
                            class="absolute -left-2 top-4 z-10 rounded-md bg-secondary-900 px-2 py-1 text-xs uppercase tracking-wider text-white shadow-sm">
                            {{ articles[0].type }}
                        </div>
                        <div class="overflow-hidden rounded-3xl bg-coral-900">
                            <img
                                loading="lazy"
                                class="w-full object-cover opacity-90 transition duration-500 motion-safe:group-hover:scale-105"
                                :src="'/blog/' + articles[0].image"
                                :alt="articles[0].imageTitle"
                                :title="articles[0].title" />
                        </div>
                    </NuxtLink>
                </div>
                <p class="my-2 font-body text-base text-secondary-900">
                    {{ articles[0].date }}
                </p>
                <h2 class="font-display text-lg font-bold">
                    {{ articles[0].title }}
                </h2>
                <p class="my-4">{{ articles[0].description }}</p>
            </div>
            <div class="flex justify-end">
                <NuxtLink
                    v-if="articles[0]._path"
                    :to="articles[0]._path"
                    class="btn-primary">
                    Llegir més
                    <span class="material-symbols-rounded ml-2 align-bottom">
                        read_more
                    </span>
                </NuxtLink>
            </div>
        </div>

        <div class="flex basis-1/3 flex-col justify-between gap-y-8">
            <div v-for="post in [articles[1], articles[2]]" class="group">
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
                    <div class="flex gap-x-2">
                        <h2 class="font-display text-lg font-bold">
                            {{ post.title }}
                        </h2>
                        <NuxtLink
                            v-if="post._path"
                            :to="post._path"
                            class="btn-primary w-12 self-center text-center">
                            <span
                                class="material-symbols-rounded -ml-1.5 align-bottom">
                                read_more
                            </span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
