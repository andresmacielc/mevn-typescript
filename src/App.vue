<template>
<Navbar />
<div class="container p-5"></div>
<router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue'


export default defineComponent({
  name: 'App',
  components: {
    Navbar
  }
});
</script>

<style>

</style>
