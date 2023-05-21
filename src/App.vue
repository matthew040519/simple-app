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
    async getData() {
      try {
        const response = await axios.get(
          "http://laravel-vue.test/api/category"
        );
        console.log(response.data);
        // this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {
    this.getData();
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
