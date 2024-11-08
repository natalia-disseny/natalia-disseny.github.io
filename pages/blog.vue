<script setup lang="ts">
const localePath = useLocalePath()
const articles = []
</script>

<template>
    <Title>{{
        $t('blog.eyebrow') + ' - ' + useAppConfig().contact.company
    }}</Title>

    <BoxedDiv>
        <Heading :eyebrow="$t('blog.eyebrow')" :heading="$t('blog.heading')" />
        <div class="grid grid-cols-3 gap-x-8">
            <div v-for="post in articles" class="group">
                <div class="relative overflow-hidden bg-black">
                    <img
                        loading="lazy"
                        class="w-full object-cover opacity-90 transition duration-500 group-hover:opacity-80 motion-safe:group-hover:scale-105"
                        :src="'/blog/' + post.image"
                        :alt="post.imageTitle"
                        :title="post.title" />
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
                            :to="localePath(post._path)"
                            class="btn-round min-w-10">
                            <span class="material-symbols-rounded">
                                read_more
                            </span>
                        </NuxtLink>
                    </div>
                    <p v-if="post.excerpt" class="my-4 text-base">
                        {{ post.excerpt.children[0].children[0].value }}...
                    </p>
                </div>
            </div>
        </div>
        <NuxtPage />
    </BoxedDiv>

    <ContactBox />
</template>
