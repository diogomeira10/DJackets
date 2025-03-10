<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { useToast } from 'vue-toast-notification';

const product = ref({});
const quantity = ref(1);
const store = useStore();
const route = useRoute();
const categorySlug = route.params.category_slug;
const productSlug = route.params.product_slug;
const toast = useToast()

const fetchProductDetails = async () => {

  store.commit("setIsLoading", true)  
  
  const apiUrl = `/api/v1/products/${categorySlug}/${productSlug}/`;

  try {
    const response = await axios.get(apiUrl);
    product.value = response.data;
    console.log("Product details: ", product.value);
  } catch (error) {
    console.log("Error fetching product detail");
    console.error(error);
  }
  console.log("isLoadingStatus: ", store.state.isLoading)

  store.commit("setIsLoading", false)
  console.log("isLoadingStatus: ", store.state.isLoading)
};

const addToCart = () => {
  store.commit('addToCart', {
    product: product.value,
    quantity: quantity.value
  });
  console.log("Cart updated", store.state.cart);
  toast.open({
    message: 'Product added to cart!',
    type: 'success',
    duration: 3000  // Display duration in milliseconds
  });
};

onMounted(async () => {
  fetchProductDetails();
});
</script>

<template>
  <div class="page-product">
    <div class="columns is-multiline">
      <div class="column is-9">
        <figure class="image mb-6">
          <img v-bind:src="product.get_image">
        </figure>
        <h1 class="title">{{ product.name }}</h1>
        <p>{{ product.description }}</p>
      </div>
      <div class="column is-3 mt-6">
        <h2 class="subtitle">Information</h2>
        <p><strong>Price: </strong>${{ product.price }}</p>
        <div class="field has-addons mt-6">
          <div class="control">
            <input type="number" class="input" min="1" v-model="quantity">
          </div>
          <div class="control">
            <a class="button is-dark" @click="addToCart">Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>