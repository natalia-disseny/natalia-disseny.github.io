<script setup>
import { ref } from 'vue'

const value = defineModel()

defineProps({
    name: String,
    placeholder: {
        type: String,
        default: (props) =>
            props.name.charAt(0).toUpperCase() + props.name.slice(1),
    },
})

const rows = ref(1)

const resizeTextarea = (event) => {
    if (event.code !== 'Enter') {
        const totalLines = event.target.value.split(/\r*\n/).length
        if (totalLines >= rows.value) rows.value++
        if (totalLines < rows.value) rows.value--
    }
}
</script>

<template>
    <div class="group relative z-0 transition-all focus-within:z-10">
        <textarea
            @keydown.enter="rows++"
            @keyup="resizeTextarea"
            :rows="rows"
            v-bind="$attrs"
            :id="name"
            placeholder=" "
            class="border-neutral-300 bg-transparent focus:border-neutral-950 peer block w-full border px-6 pb-4 pt-12 text-base/6 text-gray-900 transition focus:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-50 group-first:rounded-t-2xl group-last:rounded-b-2xl"
            :name="name"
            v-model="value"></textarea>
        <FormLabel :for="name" class="!top-[44px]"
            >{{ placeholder }}
        </FormLabel>
    </div>
</template>
