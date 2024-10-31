<script setup lang="ts">
import { createApp, ref, type Ref } from 'vue'
import {
    type CustomerInterface,
    type NotificationInterface,
} from '~/assets/js/Interfaces'
import EmailTemplate from '/components/form/EmailTemplate.vue'

const notification: NotificationInterface = inject('notification')
const customer: Ref = ref({ name: '', email: '', message: '' })

const sendEmail = () => {
    const app = createApp(EmailTemplate, { customer: customer.value })
    const emailContent = document.createElement('div')
    app.mount(emailContent)

    useMail()
        .send({
            from: customer.value.name,
            subject: `${useAppConfig().contact.company} - Consulta de client`,
            html: emailContent.outerHTML,
        })
        .then(() => {
            notification.value.category = 'success'
            notification.value.description = 'Email sent!'
        })
        .catch((e: object) => {
            console.log(e)
        })

    return
}
</script>

<template>
    <div class="lg:order-last">
        <form @submit.prevent="sendEmail()">
            <div class="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
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
