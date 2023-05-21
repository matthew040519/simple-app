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
  },
};
</script>

 <template>

    <div class="container">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Add Category</h5>
          <form @submit.prevent="createCategory">
            <div class="form-group">
              <input type="text" placeholder="Category" class="form-control" id="category_name" v-model="formData.category_name">
            </div>
            <button class="btn btn-primary btn-sm">Save</button>
          </form>
        </div>
      </div>
    </div>
    
    
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

  
  