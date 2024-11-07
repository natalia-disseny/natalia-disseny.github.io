<script setup lang="ts">
const localePath = useLocalePath()
</script>

<template>
    <BoxedDiv>
        <div
            class="mt-24 rounded-[40px] bg-black py-16 text-white sm:mt-32 sm:py-24 lg:mt-40 lg:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-4xl">
                    <h2 class="mb-10 text-4xl">
                        {{ $t('contact.description') }}
                    </h2>

                    <PrimaryButton
                        :to="localePath('/contact')"
                        :on-dark="true"
                        class="z-10">
                        {{ $t('contact.cta') }}
                    </PrimaryButton>

                    <div class="mt-10 w-1/2 border-t border-white/10 pt-10">
                        <ContactInfo onDark />
                    </div>
                </div>
            </div>
        </div>
    </BoxedDiv>
</template>
