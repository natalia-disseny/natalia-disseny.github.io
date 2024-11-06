<script setup></script>

<template>
    <Title>{{
        $t('blog.eyebrow') + ' - ' + useAppConfig().contact.company
    }}</Title>

    <BoxedDiv>
        <Heading
            :eyebrow="$t('blog.eyebrow')"
            :heading="$t('blog.heading')"
            :subheading="$t('blog.subheading')" />
    </BoxedDiv>
</template>
