<script setup>
import Intro from './index/intro.vue'
import Goals from './index/goals.vue'
import Services from './index/services.vue'
</script>

<template>
    <Title>{{
        $t('about.button') + ' - ' + useAppConfig().contact.company
    }}</Title>

    <Intro />
    <Goals />
    <Services />
    <ContactBox />
</template>
