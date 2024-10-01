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
            <button
                class="bg-neutral-950 hover:bg-neutral-800 mt-10 inline-flex rounded-full px-4 py-1.5 text-sm font-semibold text-white transition"
                type="submit">
                <span class="relative top-px">Let’s work together</span>
            </button>
        </form>
    </div>
</template>
