<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/header.vue'
import axios from 'axios';
</script>

<script>

export default {
  name: 'App',
  components: {
    Header,
  },

  data() {
    return {
      posts: [],
    };
  },

  methods: {
    
  },

  created() {
    
  },
};
</script>

<template>
  <Header />
  <div>
    <div v-for="post in posts" v-bind:key="post.id">
      <h2>{{ post.product_name }}</h2>
      <p>{{ post.product_price }}</p>
    </div>
  </div>

  <RouterView />
</template>
