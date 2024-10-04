<script setup lang="ts">
import { type CustomerInterface } from '~/assets/js/Interfaces'

defineProps<{
    customer: CustomerInterface
}>()
</script>

<template>
    <h1>Dades del client:</h1>
    <ul>
        <li><strong>Nom:</strong> {{ customer.name }}</li>
        <li><strong>Email:</strong> {{ customer.email }}</li>
        <li v-if="customer.company">
            <strong>Empresa:</strong> {{ customer.company }}
        </li>
        <li><strong>Missatge:</strong> {{ customer.message }}</li>
    </ul>
</template>
