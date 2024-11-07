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
            class="peer block w-full border-2 border-black border-b-white bg-white px-6 pb-4 pt-12 text-base/6 text-black transition focus:border-black focus:outline-none focus:ring-2 focus:ring-black group-first:rounded-t-2xl group-last:rounded-b-2xl"
            :name="name"
            v-model="value" />
        <FormLabel :for="name"
            >{{ name.charAt(0).toUpperCase() + name.slice(1) }}
            <span v-if="'required' in $attrs" class="text-coral-900"> *</span>
        </FormLabel>
    </div>
</template>
