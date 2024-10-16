<template>
    <div id="loader">
        <div class="triangle" />
        <div id="circle" />
    </div>
</template>

<style>
body {
    --size: 70px;
}

@keyframes circle {
    30% {
        transform: rotate(0);
        width: var(--size);
        height: var(--size);
        border-top-left-radius: calc(var(--size) / 2);
        border-top-right-radius: calc(var(--size) / 2);
        border-bottom-left-radius: calc(var(--size) / 2);
        border-bottom-right-radius: calc(var(--size) / 2);
    }
    60% {
        transform: rotate(0);
        width: var(--size);
        height: calc(var(--size) / 2);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: calc(var(--size) / 2);
        border-bottom-right-radius: calc(var(--size) / 2);
    }
    100% {
        transform: rotate(-90deg);
        width: var(--size);
        height: calc(var(--size) / 2);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: calc(var(--size) / 2);
        border-bottom-right-radius: calc(var(--size) / 2);
    }
}

@keyframes triangle {
    0%,
    90% {
        border-top: solid transparent calc(var(--size) / 4);
        border-right: solid transparent calc(var(--size) / 4);
        border-left: solid transparentcalc(var(--size) / 4);
        border-bottom: solid transparentcalc(var(--size) / 4);
    }
    100% {
        border-left: solid transparentcalc(var(--size) / 4);
        border-bottom: solid transparentcalc(var(--size) / 4);
        border-top: solid #bada55 calc(var(--size) / 4);
        border-right: solid #bada55 calc(var(--size) / 4);
    }
}

@keyframes triangle_pseudo {
    100% {
        transform: translateY(-100%) rotate(-45deg);
    }
}

#loader {
    width: var(--size);
    height: var(--size);
    position: relative;
}

#loader .triangle {
    border-left: solid #bada55 calc(var(--size) / 4);
    border-bottom: solid #bada55 calc(var(--size) / 4);
    border-top: solid transparent calc(var(--size) / 4);
    border-right: solid transparent calc(var(--size) / 4);
    width: calc(var(--size) / 4);
    height: calc(var(--size) / 4);
    transform: translateY(50%);
    /* Animations */
    transition: all;
    animation-duration: 1s;
    animation-delay: 10ms;
    animation-fill-mode: both;
}

#loader:hover .circle {
    animation-name: circle;
}
#logo:hover .triangle_bis {
    animation-name: triangle;
}
#logo:hover .triangle::before {
    animation-name: triangle_pseudo;
}

.circle {
    /* Shape and color */
    background-color: blueviolet;
    width: calc(var(--size) / 2);
    height: 100%;
    border-top-right-radius: calc(var(--size) / 2);
    border-bottom-right-radius: calc(var(--size) / 2);
    /* Animations */
    transition: all;
    transform-origin: top;
    animation-duration: 1s;
    animation-delay: 10ms;
    animation-fill-mode: both;
    /* Position */
    position: absolute;
    right: 0;
    bottom: 0;
}

.triangle {
    /* Shape and color */
    background-color: #005252;
    width: calc(var(--size) / 2);
    height: calc(var(--size) * 0.75);
    /* Animations */
    transition: all;
    animation-duration: 1s;
    animation-delay: 10ms;
    animation-fill-mode: both;
}

.triangle::before {
    content: '';
    display: block;
    /* Shape and color */
    background-color: #fff;
    width: 200%;
    height: 200%;
    /* Position */
    transform: rotate(-45deg) translateX(calc(var(--size) / 6 * -1));
    transform-origin: top left;
    /* Animations */
    transition: all;
    animation-duration: 1s;
    animation-delay: 10ms;
    animation-fill-mode: both;
}
</style>
