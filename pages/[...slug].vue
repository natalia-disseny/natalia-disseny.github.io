<script setup lang="ts">
import NotFound from '~/components/NotFound.vue'
defineI18nRoute(false)
</script>

<template>
    <NuxtLayout>
        <BoxedDiv>
            <ContentDoc>
                <template #default="{ doc }">
                    <Post :post="doc" />
                </template>

                <template #not-found>
                    <NotFound />
                </template>
            </ContentDoc>
        </BoxedDiv>
    </NuxtLayout>
</template>
