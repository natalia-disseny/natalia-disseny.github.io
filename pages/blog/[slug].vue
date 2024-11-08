<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import * as fs from 'node:fs'
import { readFile } from 'fs'

const route = useRoute()

const routeParams = computed({
    get() {
        return route.params
    },
})

console.log(routeParams.value)

fs.readFile('./copia.md', (err, data) => {
    console.log(data)
})
</script>

<template>
    <BoxedDiv>{{ $route.params.slug }}</BoxedDiv>
</template>
