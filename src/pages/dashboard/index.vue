<script setup lang="ts">
import { useMeStore } from '@/stores/me';
const meStore = useMeStore()
</script>
<template>
    <div>
        Dashboard
        <br>
        <br>
        <pre>{{ meStore.user }}</pre>
        <br>
        {{ meStore.isLoggedIn }}
    </div>
</template>