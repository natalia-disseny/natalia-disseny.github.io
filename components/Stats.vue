<script setup lang="ts">
interface Stat {
    name: string
    value?: string
    icon?: string
}

defineProps<{
    cols?: Number
    items: Stat[]
    invertedColors?: boolean
}>()
</script>

<template>
    <div>
        <dl
            class="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2"
            :class="`lg:grid-cols-${cols ?? 3}`">
            <div
                v-for="stat in items"
                class="relative flex gap-x-8 overflow-hidden pl-8 tracking-wide before:absolute before:left-0 before:top-0 before:h-8 before:w-1 after:absolute after:bottom-0 after:left-0 after:top-10 after:w-1"
                :class="[
                    invertedColors
                        ? 'before:bg-teal-100 after:bg-teal-800'
                        : 'before:bg-teal-900 after:bg-teal-100',
                    stat.icon ? 'flex-row' : 'flex-col',
                ]">
                <dd
                    v-if="stat.value || stat.icon"
                    :class="[
                        invertedColors ? 'text-white' : 'text-gray-900',
                        {
                            'self-center': stat.icon,
                        },
                    ]"
                    class="text-3xl font-semibold">
                    <span
                        v-if="stat.icon || stat.value"
                        :class="{
                            'material-symbols-rounded text-7xl': stat.icon,
                        }">
                        {{ stat.icon ?? stat.value }}
                    </span>
                </dd>
                <dt
                    :class="[invertedColors ? 'text-white' : 'text-gray-800']"
                    class="py-2 text-base font-light"
                    v-html="stat.name" />
            </div>
        </dl>
    </div>
</template>
