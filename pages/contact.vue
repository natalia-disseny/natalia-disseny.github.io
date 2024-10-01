<script setup>
import ContactForm from './contact/form.vue'
import ContactInfo from './contact/info.vue'
</script>

<template>
    <div>
        <Heading
            :eyebrow="$t('contact.eyebrow')"
            :heading="$t('contact.heading')"
            :subheading="$t('contact.subheading')" />

        <div class="mt-40 grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <ContactForm />
            <ContactInfo />
        </div>
    </div>
</template>
