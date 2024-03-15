<template>
    <div>Hello world {{ val }}</div>
    <sz-hello></sz-hello>

</template>

<script setup lang="ts">


import { ref } from "vue";
const val = ref<string | null>('!!');

</script>
