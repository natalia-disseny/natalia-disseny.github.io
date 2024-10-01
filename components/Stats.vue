<script setup lang="ts">
interface Stat {
    name: string
    value?: string
}

defineProps<{
    items: Stat[]
    invertedColors?: boolean
}>()
</script>

<template>
    <div>
        <dl
            class="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            <div
                v-for="stat in items"
                class="relative flex flex-col overflow-hidden pl-8 tracking-wide before:absolute before:left-0 before:top-0 before:h-8 before:w-1 after:absolute after:bottom-0 after:left-0 after:top-10 after:w-1"
                :class="[
                    invertedColors
                        ? 'before:bg-white after:bg-gray-700'
                        : 'before:bg-coral-900 after:bg-coral-100',
                ]">
                <dd
                    v-if="stat.value"
                    :class="[invertedColors ? 'text-white' : 'text-gray-900']"
                    class="text-3xl font-semibold"
                    v-html="stat.value" />
                <dt
                    :class="[invertedColors ? 'text-white' : 'text-gray-600']"
                    class="py-2 text-base font-light"
                    v-html="stat.name" />
            </div>
        </dl>
    </div>
</template>
