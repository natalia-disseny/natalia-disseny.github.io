<script setup lang="ts">
import { inject } from 'vue'
import { type NotificationInterface } from '~/assets/js/Interfaces'

const notification = inject('notification')
const show = ref(true)
</script>

<template>
    <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div
            v-if="notification && notification.description && show"
            class="pointer-events-auto z-50 w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-black ring-opacity-5">
            <div class="p-6">
                <div class="flex items-start">
                    <div class="flex-shrink-0">
                        <span
                            class="material-symbols-rounded h-6 w-6"
                            :class="{
                                'text-success-500':
                                    notification.category == 'success',
                                'text-info-500':
                                    notification.category == 'info',
                                'text-error-500':
                                    notification.category == 'error',
                            }">
                            <template v-if="notification.category === 'error'">
                                error
                            </template>
                            <template v-if="notification.category === 'info'">
                                info
                            </template>
                            <template
                                v-if="notification.category === 'success'">
                                check
                            </template>
                        </span>
                    </div>
                    <div class="ml-3 w-0 flex-1 pt-0.5">
                        <p class="text-sm font-medium text-black">
                            {{ notification.description }}
                        </p>
                    </div>
                    <div class="ml-4 flex flex-shrink-0">
                        <button
                            @click="show = false"
                            type="button"
                            class="focus:ring-indigo-500 text-primary-400 hover:text-primary-500 inline-flex rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-offset-2">
                            <span class="sr-only">Close</span>
                            <span class="material-symbols-rounded">
                                close
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
