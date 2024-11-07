<template>
    <label
        class="text-primary-600 peer-[:not(:placeholder-shown)]:text-primary-600 pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 font-medium transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-bold peer-focus:text-black peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold">
        <slot />
    </label>
</template>
