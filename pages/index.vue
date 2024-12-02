<script setup>
const appConfig = useAppConfig()

useSeoMeta({
    title: appConfig.contact.description,
    ogTitle: appConfig.contact.description,
    twitterTitle: appConfig.contact.description,
})

const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    image: 'https://natalia-disseny.github.io/profilePicture.jpg',
    url: 'https://natalia-disseny.github.io/',
    sameAs: ['https://natalia-disseny.github.io/about-me'],
    logo: 'https://natalia-disseny.github.io/signature/logo.png',
    name: appConfig.contact.company,
    description: appConfig.contact.description,
    email: appConfig.contact.email,
    telephone: '+34' + appConfig.contact.phone,
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Joan Maragall 18',
        addressLocality: 'Sant Celoni',
        addressCountry: 'ES',
        addressRegion: 'Barcelona',
        postalCode: '08470',
    },
}

useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: structuredData,
        },
    ],
})
</script>

<template>
    <HomeHeroSection />
    <HomeFeatured />
    <ContactBox />
</template>
