<script setup lang="ts">
import { provide } from 'vue'

provide('notification', ref({ category: 'info', description: '' }))
</script>

<template>
    <div>
        <Html class="h-full bg-gray-900 text-base antialiased" />

        <Body class="flex min-h-full flex-col">
            <LayoutHeader />

            <div class="relative flex flex-auto overflow-hidden rounded-tl-[40px] rounded-tr-[40px] bg-white pt-14">
                <div class="relative isolate flex w-full flex-col pt-9">
                    <main class="w-full flex-auto py-36">
                        <NuxtPage />
                    </main>

                    <LayoutFooter />
                </div>
            </div>

            <!-- Global notification live region, render this permanently at the end of the document -->
            <div aria-live="assertive"
                class="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6">
                <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
                    <Notification />
                </div>
            </div>
        </Body>
    </div>
</template>
