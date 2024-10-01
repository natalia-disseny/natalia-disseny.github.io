<template>
    <label
        class="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-gray-600 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-gray-900 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-gray-600">
        <slot />
    </label>
</template>
