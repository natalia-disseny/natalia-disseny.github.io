<script setup>
import BlogArticle from './single.vue'

const articles = await queryContent('blog').sort({ date: -1 }).limit(3).find()
</script>

<template>
    <div class="mb-8 flex flex-col gap-x-8 gap-y-8 lg:flex-row">
        <div class="group flex basis-2/3 flex-col justify-between">
            <BlogArticle :post="articles[0]" main-post />
        </div>

        <div class="flex basis-1/3 flex-col justify-between gap-y-8">
            <BlogArticle
                v-for="post in [articles[1], articles[2]]"
                class="group"
                :post />
        </div>
    </div>
</template>
