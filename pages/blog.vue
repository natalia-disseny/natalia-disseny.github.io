<script setup>
const articles = await queryContent('blog').sort({ date: -1 }).skip(3).find()
</script>

<template>
    <Title>{{ $t('blog.eyebrow') }}</Title>

    <BoxedDiv>
        <Heading :eyebrow="$t('blog.eyebrow')" :heading="$t('blog.heading')" />
        <BlogLatest />
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <BlogSingle v-for="post in articles" :post />
        </div>
        <NuxtPage />
    </BoxedDiv>

    <ContactBox />
</template>
