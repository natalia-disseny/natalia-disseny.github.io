<script setup lang="ts">
import { provide, ref } from 'vue'
const appConfig = useAppConfig()
const { locale } = useI18n()

provide('notification', ref({ category: 'info', description: '' }))

const menuIsVisible = ref(false)
provide('menuIsVisible', menuIsVisible)
// Force scroll to top of page when menu is opened
watch(menuIsVisible, async (newVisibility) => {
    if (newVisibility) {
        window.scrollTo(0, 0)
    }
})

useSeoMeta({
    description:
        'Fes que la teva marca destaqui en línia amb solucions digitals personalitzades. Solucions visuals per millorar la teva identitat, des de logotips fins a elements de disseny que potencien els teus materials de màrqueting.',
    author: 'Natàlia Martínez',
    ogDescription:
        'Fes que la teva marca destaqui en línia amb solucions digitals personalitzades. Solucions visuals per millorar la teva identitat, des de logotips fins a elements de disseny que potencien els teus materials de màrqueting.',
    ogImage: '/profilePicture.jpg',
    ogSiteName: appConfig.contact.company,
    ogType: 'website',
    ogUrl: 'https://natalia-disseny.github.io/',
    twitterDescription:
        'Fes que la teva marca destaqui en línia amb solucions digitals personalitzades. Solucions visuals per millorar la teva identitat, des de logotips fins a elements de disseny que potencien els teus materials de màrqueting.',
})

const myGoogleFonts =
    'family=Comfortaa:wght@300..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,500,0,0&display=swap'

useHead({
    script: [
        {
            innerHTML:
                "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K2F5GSQZ');",
        },
        {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-12HV9XSWGQ',
        },
        {
            innerHTML:
                "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-12HV9XSWGQ');",
        },
    ],
})
</script>

<template>
    <div>
        <Html class="h-full bg-black text-base antialiased" :lang="locale" />

        <!-- Favicon -->
        <Link rel="icon" href="/favicon.png" />

        <!-- Google Fonts-->
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link
            rel="preload"
            :href="'https://fonts.googleapis.com/css2?' + myGoogleFonts"
            as="style"
            onload="this.onload=null;this.rel='stylesheet'" />
        <NoScript>
            <Link
                rel="stylesheet"
                :href="'https://fonts.googleapis.com/css2?' + myGoogleFonts"
                type="text/css" />
        </NoScript>

        <Body class="flex min-h-full flex-col">
            <div itemscope itemtype="https://schema.org/WebSite">
                <link
                    itemprop="url"
                    href="https://natalia-disseny.github.io/" />
                <meta itemprop="name" :content="appConfig.contact.company" />
            </div>

            <LayoutHeader />

            <div
                class="relative flex flex-auto overflow-hidden rounded-tl-[40px] rounded-tr-[40px] bg-white pt-14">
                <div class="relative isolate flex w-full flex-col pt-9">
                    <main class="w-full flex-auto pb-36 pt-10 sm:pt-36">
                        <NuxtPage />
                    </main>

                    <LayoutFooter />
                </div>
            </div>

            <!-- Global notification live region, render this permanently at the end of the document -->
            <div
                aria-live="assertive"
                class="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-6 sm:items-start sm:p-6">
                <div
                    class="flex w-full flex-col items-center space-y-4 sm:items-end">
                    <Notification />
                </div>
            </div>
        </Body>
    </div>
</template>
