<script setup lang="ts">
defineProps({
    post: Object,
})
</script>

<template>
    <article class="relative before:block">
        <div class="mb-20 text-center">
            <h1>
                <span
                    class="block font-body text-lg font-normal text-secondary-900"
                    >{{ post.date }}</span
                ><span
                    class="mb-6 mt-0 block font-display text-2xl font-bold [text-wrap:balance] sm:text-4xl"
                    v-html="post.title" />
            </h1>
            <div
                class="mt-10 flex h-[300px] overflow-hidden rounded-[40px] bg-secondary-900">
                <img
                    class="self-center opacity-90 transition-opacity hover:opacity-100"
                    :src="`/blog/${post.image}`" />
            </div>
        </div>

        <div class="mx-auto max-w-3xl">
            <ContentRenderer
                :value="post"
                class="mx-auto max-w-3xl font-body font-normal text-black">
                <template #empty>
                    <p>No content found.</p>
                </template>
            </ContentRenderer>
        </div>
    </article>
</template>

<style>
article::before {
    @apply absolute -bottom-20 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full border-4 border-primary-200;
}
article blockquote {
    @apply my-10 bg-secondary-100 px-10 py-0.5;
}
article h2 {
    @apply font-display text-2xl font-bold;
}
article h6 {
    @apply mb-4 mt-20 font-display text-base font-bold;
}
article ol {
    @apply list-decimal;
}
article p {
    @apply my-10;
}
</style>
