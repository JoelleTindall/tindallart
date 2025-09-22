<template>
    <div class="h-full w-full">
       <Contactform/>
    </div>
</template>

<script setup>
import Contactform from '~/components/contactform.vue';

definePageMeta({
    layout: 'nav'
})
useSeoMeta({
    title: 'Tindallart - Contact Us',
    ogTitle: 'Tindallart - Contact Us', // Open Graph title
    description: 'Contact Form for Tindallart',
});
</script>
