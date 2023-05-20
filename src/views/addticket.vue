<script setup>
</script>
<script>
import axios from 'axios';
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
export default {
  name: 'createCategory',
  data() {
    return {
      formData: {
        category_name: ''
      }
    };
  },

  methods: {

    createCategory()
    {
        axios.post(
          "http://laravel-vue.test/api/category", this.formData)
          .then(response => console.log(response))
          .catch(error => console.log(error));
    }

    
    // async save() {
    //   try {
    //     // console.log(this.$refs.category_name.value)
    //     console.log(this.$refs._token.value)
    //     const category = { category_name:  this.$refs.category_name.value};
    //     const response = await axios.post(
    //       "http://laravel-vue.test/api/category", { _token: this.$refs._token.value, category }
    //     );
    //     console.log(response);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
};
</script>

 <template>
    
    <form @submit.prevent="createCategory">
        <input type="text" class="form-control" id="category_name" v-model="formData.category_name">
        <button class="btn btn-primary btn-sm">Save</button>
    </form>
    
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>

  
  