<script setup>
import LatestArticles from './blog/latest.vue'
import BlogArticle from './blog/single.vue'

const articles = await queryContent('blog').sort({ date: -1 }).skip(3).find()
</script>

<template>
    <Title>{{
        $t('blog.eyebrow') + ' - ' + useAppConfig().contact.company
    }}</Title>

    <BoxedDiv>
        <Heading :eyebrow="$t('blog.eyebrow')" :heading="$t('blog.heading')" />
        <LatestArticles />
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <BlogArticle v-for="post in articles" :post />
        </div>
        <NuxtPage />
    </BoxedDiv>

    <ContactBox />
</template>
