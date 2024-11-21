<script setup>
defineProps({
    post: Object,
})
</script>
<template>
    <div class="group">
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
                        :src="post._path + '.jpg'"
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
                    <span class="material-symbols-rounded -ml-1.5 align-bottom">
                        read_more
                    </span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
