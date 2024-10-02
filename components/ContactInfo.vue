<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
    <div>
        <h2 class="font-display text-base font-semibold">
            {{ $t('contact.addressTitle') }}
        </h2>
        <ul role="list" class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <li>
                <address class="text-sm not-italic">
                    <strong class="text-gray-950">Barcelona</strong><br />
                    Carrer Joan Maragall
                    <br />
                    08470 Sant Celoni
                </address>
            </li>
            <li>
                <address class="text-sm not-italic">
                    <br />
                    <TextLink
                        :link="
                            'tel:+34' +
                            appConfig.contact.phone.replace(/\s/g, '')
                        "
                        >+34 {{ appConfig.contact.phone }}</TextLink
                    ><br />
                    <TextLink :href="'mailto:' + appConfig.contact.email">{{
                        appConfig.contact.email
                    }}</TextLink>
                </address>
            </li>
        </ul>
    </div>
</template>
