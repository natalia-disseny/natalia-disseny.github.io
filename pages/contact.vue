<template>
    <Title>{{ $t('contact.button') }}</Title>

    <BoxedDiv>
        <Heading
            :eyebrow="$t('contact.eyebrow')"
            :heading="$t('contact.heading')" />

        <div class="mt-32 grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <ContactForm />
            <div>
                <ContactInfo />

                <div class="divider mt-16 pt-16">
                    <Social />
                </div>
            </div>
        </div>
    </BoxedDiv>
</template>
