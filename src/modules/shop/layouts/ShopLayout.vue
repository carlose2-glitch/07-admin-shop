<template>
  <!-- Header Navbar -->
  <TopMenu />

  <RouterView />

  <!-- Footer -->
  <CustomFooter />
</template>

<script lang="ts" setup>
import TopMenu from '../components/TopMenu.vue';
import CustomFooter from '../components/CustomFooter.vue';
</script>
