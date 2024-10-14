<template>
  <!-- component -->
  <!-- Create By Joker Banny -->
  <!-- Header Navbar -->
  <top-menu />
  <!-- Title -->

  <!-- RouterView -->
  <router-view />

  <custom-footer />
  <!-- Footer -->
</template>

<script lang="ts" setup>
import TopMenu from '../components/TopMenu.vue';
import CustomFooter from '../components/CustomFooter.vue';

TopMenu;
</script>
