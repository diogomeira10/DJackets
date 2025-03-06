<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

import ProductBox from '@/components/ProductBox.vue';

const latestProducts = ref([]);

// Helper function to extract a cookie by name

onMounted(async () => {
  try {

    const response = await axios.get('/api/v1/latest-products/');
    console.log("Requested Data: ", response.data);
    latestProducts.value = response.data;
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error.message);
  }
});

</script>


<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
        <div class="hero-body has-text-centered">
            <p class="title mb-6">
                Welcome to Djacket
            </p>
            <p class="subtitle">
                The best jacket store online
            </p>
        </div>
    </section>

    <div class="columns is-multiline">
      <div class="column is-12">
          <h2 class="is-size-2 has-text-centered">Latest products</h2>
      </div>

      <ProductBox 
        v-for="product in latestProducts"
        v-bind:key="product.id"
        v-bind:product="product" />
    </div>
  </div>
</template>
