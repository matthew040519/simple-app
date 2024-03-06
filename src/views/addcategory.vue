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
          .then(response => this.$router.push("/category"))
          .catch(error => console.log(error));
    }
  },
};
</script>

 <template>

    <div class="container">
      <div class="row mt-lg-5">
        <div class="col-md-4">

        </div>
        <div class="col-md-4">
          <div class="card" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">Add Category</h5>
              <form @submit.prevent="createCategory">
                <div class="form-group">
                  <label>Category</label>
                  <input type="text" placeholder="Category" class="form-control" id="category_name" v-model="formData.category_name">
                </div>
                <button class="btn btn-primary btn-sm">Save</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-4">

        </div>
      </div>
    </div>
    
    
  </template>


  
  