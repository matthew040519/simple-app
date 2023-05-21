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
        <div class="col-md-3">

        </div>
        <div class="col-md-6">
          <div class="card" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">Add Ticket</h5>
              <form @submit.prevent="createCategory">
                <div class="form-group">
                  <label>Name</label>
                  <input type="text" class="form-control" id="category_name" v-model="formData.name">
                </div>
                <div class="form-group">
                  <label>Email Address</label>
                  <input type="text" class="form-control" id="category_name" v-model="formData.email">
                </div>
                <div class="form-group">
                  <label>Ticket Category</label>
                  <input type="text" class="form-control" id="category_name" v-model="formData.category">
                </div>
                <div class="form-group">
                  <label>Description</label>
                  <input type="text" class="form-control" id="category_name" v-model="formData.description">
                </div>
                <button class="btn btn-primary btn-sm">Save</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-3">

        </div>
      </div>
    </div>
    
    
  </template>


  
  