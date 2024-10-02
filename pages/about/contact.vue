<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
    <div class="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
            <div
                class="rounded-[40px] bg-gray-900 py-24 text-white sm:mt-32 lg:mt-40 lg:py-32">
                <div class="mx-auto max-w-4xl">
                    <h2 class="mb-10 text-4xl">Parla'm del teu projecte</h2>

                    <Button link="/contact" title="Contact"
                        >Digues hola!</Button
                    >

                    <div class="mt-10 w-1/2 border-t border-white/10 pt-10">
                        <h2 class="font-display text-base font-semibold">
                            {{ $t('contact.address.title') }}
                        </h2>
                        <ul
                            role="list"
                            class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                            <li>
                                <address class="text-sm not-italic">
                                    <strong class="text-gray-950"
                                        >Barcelona</strong
                                    ><br />
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
                                            appConfig.contact.phone.replace(
                                                /\s/g,
                                                ''
                                            )
                                        "
                                        >+34
                                        {{ appConfig.contact.phone }}</TextLink
                                    ><br />
                                    <TextLink
                                        :href="
                                            'mailto:' + appConfig.contact.email
                                        "
                                        >{{ appConfig.contact.email }}</TextLink
                                    >
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
