<script setup>
import ContactForm from './contact/form.vue'
</script>

<template>
    <Title>{{
        $t('contact.button') + ' - ' + useAppConfig().contact.company
    }}</Title>

    <BoxedDiv>
        <Heading
            :eyebrow="$t('contact.eyebrow')"
            :heading="$t('contact.heading')" />

        <div class="mt-32 grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <ContactForm />
            <div>
                <ContactInfo />

                <div
                    class="before:bg-secondary-900 after:bg-secondary-100 relative mt-16 pt-16 before:absolute before:left-0 before:top-0 before:h-1 before:w-6 after:absolute after:left-8 after:right-0 after:top-0 after:h-1">
                    <Social />
                </div>
            </div>
        </div>
    </BoxedDiv>
</template>
