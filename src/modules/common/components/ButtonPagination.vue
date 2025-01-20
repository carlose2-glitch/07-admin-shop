<template>
  <div class="flex space-x-3 justify-center py-10 bg-gray-100">
    <button
      :disabled="page === 1"
      @click="$router.push({ query: { page: page - 1 } })"
      class="flex items-center space-x-1.5 bg-blue-500 rounded-lg px-4 py-1.5 disabled:bg-gray-300 text-white hover:bg-blue-600 transition-all"
    >
      <ArrowLeft />
      <span>Anteriores</span>
    </button>

    <button
      :disabled="hasMoreData"
      @click="$router.push({ query: { page: page + 1 } })"
      class="flex items-center space-x-1.5 bg-blue-500 rounded-lg px-4 py-1.5 disabled:bg-gray-300 text-white hover:bg-blue-600 transition-all"
    >
      <span>Siguientes</span>
      <ArrowRight />
    </button>
  </div>
</template>

<script setup lang="ts">
import ArrowLeft from '@/icons/ArrowLeft.vue';
import ArrowRight from '@/icons/ArrowRight.vue';

interface Props {
  page: number;

  hasMoreData: boolean;
}

defineProps<Props>();
</script>
