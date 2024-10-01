<template>
    <Transition v-if="isInViewport(this)">
        <slot />
    </Transition>
</template>

<script setup>
function isInViewport(element) {
    console.log(this)
    console.log(this.children)
    /*  let rect = element.getBoundingClientRect()
    let html = document.documentElement

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    ) */
}
</script>
