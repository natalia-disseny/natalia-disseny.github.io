<script setup>
defineProps({
    post: Object,
})
</script>

<template>
    <nav class="mb-20 flex" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-2 text-sm">
            <li>
                <div>
                    <NuxtLink to="/blog" class="inlineLink"> Blog </NuxtLink>
                </div>
            </li>
            <li>
                <div class="flex items-center">
                    <svg
                        class="size-5 shrink-0 text-primary-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true">
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                    <span
                        class="ml-2 font-medium text-primary-500 hover:text-primary-700"
                        >{{
                            post.type == 'article' ? 'Articles' : 'Notícies'
                        }}</span
                    >
                </div>
            </li>
            <li class="hidden sm:block">
                <div class="flex items-center">
                    <svg
                        class="size-5 shrink-0 text-primary-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true">
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                    <span
                        class="ml-2 font-medium text-primary-500 hover:text-primary-700"
                        >{{ post.title }}</span
                    >
                </div>
            </li>
        </ol>
    </nav>

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
                class="mt-10 flex max-h-40 overflow-hidden rounded-3xl bg-coral-900 sm:max-h-80 sm:rounded-[40px]">
                <img
                    class="self-center opacity-90 transition-opacity"
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
