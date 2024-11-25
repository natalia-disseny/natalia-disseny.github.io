<script setup>
defineProps({
    mainPost: {
        default: false,
        type: Boolean,
    },
    post: Object,
})
</script>
<template>
    <div class="group">
        <div class="relative">
            <NuxtLink v-if="post._path" :to="post._path">
                <div
                    class="absolute -left-2 top-4 z-10 rounded-md px-2 py-1 text-xs uppercase tracking-wider text-white shadow-sm"
                    :class="[
                        post.type == 'article'
                            ? 'bg-secondary-900'
                            : 'bg-coral-900',
                    ]">
                    {{ post.type }}
                </div>
                <div class="overflow-hidden rounded-3xl bg-coral-900">
                    <NuxtImg
                        loading="lazy"
                        :class="{ 'h-[200px]': !mainPost }"
                        class="w-full object-cover opacity-90 transition duration-500 motion-safe:group-hover:scale-105"
                        :src="post._path + '.jpg'"
                        sizes="1280 md:675px lg:790px"
                        :alt="post.imageTitle"
                        :title="post.title" />
                </div>
            </NuxtLink>
        </div>
        <div class="flex flex-col">
            <p class="my-2 font-body text-base text-secondary-900">
                {{ post.date }}
            </p>
            <div
                class="flex justify-between gap-x-2"
                :class="{ 'flex-col': mainPost }">
                <h2 class="font-display text-lg font-bold">
                    {{ post.title }}
                </h2>
                <p v-if="mainPost" class="my-4">{{ post.description }}</p>
                <NuxtLink
                    v-if="!mainPost && post._path"
                    :to="post._path"
                    class="btn-primary w-12 self-center text-center">
                    <span class="material-symbols-rounded -ml-1.5 align-bottom">
                        read_more
                    </span>
                </NuxtLink>
            </div>
            <div v-if="mainPost" class="flex justify-end">
                <NuxtLink
                    v-if="post._path"
                    :to="post._path"
                    class="btn-primary">
                    Llegir més
                    <span class="material-symbols-rounded ml-2 align-bottom">
                        read_more
                    </span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
