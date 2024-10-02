<template>
    <div class="lg:order-last">
        <form>
            <div class="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                <FormInput
                    autocomplete="name"
                    :name="$t('contact.form.name')" />
                <FormInput
                    autocomplete="email"
                    :name="$t('contact.form.email')"
                    type="email" />
                <FormInput :name="$t('contact.form.company')" />
                <FormTextarea :name="$t('contact.form.message')" />
            </div>
            <Button type="submit">
                <span class="relative top-px">Let’s work together</span>
            </Button>
        </form>
    </div>
</template>
