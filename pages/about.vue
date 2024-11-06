<script setup>
import Intro from './about/intro.vue'
import Goals from './about/goals.vue'
import Services from './about/services.vue'
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
