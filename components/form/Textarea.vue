<script setup>
defineProps({
    name: String,
    placeholder: {
        type: String,
        default: (props) =>
            props.name.charAt(0).toUpperCase() + props.name.slice(1),
    },
})
</script>

<template>
    <div class="group relative z-0 transition-all focus-within:z-10">
        <textarea
            :id="name"
            placeholder=" "
            class="border-neutral-300 bg-transparent focus:border-neutral-950 peer block w-full resize-y border px-6 pb-4 pt-12 text-base/6 text-gray-600 transition focus:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-50 group-first:rounded-t-2xl group-last:rounded-b-2xl"
            :name="name"></textarea>
        <label
            :for="name"
            class="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-gray-600 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-gray-900 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-gray-600">
            {{ placeholder }}
        </label>
    </div>
</template>
