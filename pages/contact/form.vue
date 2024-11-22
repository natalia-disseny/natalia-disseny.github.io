<script setup lang="ts">
import { ref, type Ref } from 'vue'

const customer: Ref = ref({ name: '', email: '', message: '' })
</script>

<template>
    <div class="lg:order-last">
        <form action="https://formspree.io/f/xkgnzeka" method="POST">
            <div class="isolate mt-6 -space-y-px rounded-2xl">
                <FormInput
                    autocomplete="name"
                    :name="$t('contact.form.name')"
                    v-model="customer.name"
                    required />
                <FormInput
                    autocomplete="email"
                    name="email"
                    type="email"
                    v-model="customer.email"
                    required />
                <FormInput
                    :name="$t('contact.form.company')"
                    v-model="customer.company" />
                <FormTextarea
                    :name="$t('contact.form.message')"
                    v-model="customer.message"
                    required />
            </div>

            <div class="mt-8 flex justify-end">
                <div class="btn-primary">
                    <input
                        type="submit"
                        class="cursor-pointer"
                        :value="$t('contact.form.submit')" />
                </div>
            </div>
        </form>
    </div>
</template>
