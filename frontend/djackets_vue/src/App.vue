<script setup>
import { ref } from 'vue';

const showMobileMenu = ref(false);

const handleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  console.log(showMobileMenu.value)
}


</script>

<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">

        <router-link to="/" class="navbar-item"><strong>Djackets</strong></router-link>

        <a @click="handleMobileMenu" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active': showMobileMenu }">
        <div class="navbar-end">
          <router-link to="/summer" class="navbar-item">Summer</router-link>
          <router-link to="/winter" class="navbar-item">Winter</router-link>

          <div class="navbar-item">
            <div class='buttons'></div>
            <router-link to="/log-in" class="button is-light">Log In</router-link>
            <router-link to="/cart" class="button is-success">
              <span class="icon"><i class="fas fa-shopping-cart"></i></span>
              <span>Cart</span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <section>
      <router-view/>
    </section>

    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2025</p>
    </footer>

  </div>
</template>

<style scoped>
@import 'bulma/css/bulma.min.css';
</style>
