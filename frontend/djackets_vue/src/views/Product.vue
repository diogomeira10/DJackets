<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const product = ref({})

const route = useRoute();
const categorySlug = route.params.category_slug;
const productSlug = route.params.product_slug;


const fetchProductDetails = async () => {

    const apiUrl = `/api/v1/products/${categorySlug}/${productSlug}/`

    try {
        const response = await axios.get(apiUrl)
        product.value = response.data
        console.log("Product details: ", product.value)
    } catch (error) {
        console.log("Error fetching product detail")
        console.error(error)
    }


}

onMounted(async () => {
    fetchProductDetails()
})

</script>

<template>
    <h1>Product Detail</h1>
</template>

<style></style>