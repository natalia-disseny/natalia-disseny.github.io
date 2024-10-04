<script setup>
const value = defineModel()

defineProps({
    name: String,
    type: {
        type: String,
        default: 'text',
    },
})
</script>

<template>
    <div class="group relative z-0 transition-all focus-within:z-10">
        <input
            v-bind="$attrs"
            :type="type"
            :id="name"
            placeholder=" "
            class="border-neutral-300 bg-transparent focus:border-neutral-950 peer block w-full border px-6 pb-4 pt-12 text-base/6 text-gray-900 transition focus:border-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-50 group-first:rounded-t-2xl group-last:rounded-b-2xl"
            :name="name"
            v-model="value" />
        <FormLabel :for="name"
            >{{ name.charAt(0).toUpperCase() + name.slice(1) }}
            <span v-if="'required' in $attrs" class="text-coral-900"> *</span>
        </FormLabel>
    </div>
</template>
