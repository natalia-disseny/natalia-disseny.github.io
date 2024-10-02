<template>
    <div>
        <Html class="h-full bg-gray-900 text-base antialiased" />
        <Body class="flex min-h-full flex-col">
            <LayoutHeader />

            <div
                class="relative flex flex-auto overflow-hidden rounded-tl-[40px] rounded-tr-[40px] bg-white pt-14">
                <div class="relative isolate flex w-full flex-col pt-9">
                    <main class="w-full flex-auto py-36">
                        <NuxtPage />
                    </main>

                    <LayoutFooter />
                </div>
            </div>
        </Body>
    </div>
</template>
