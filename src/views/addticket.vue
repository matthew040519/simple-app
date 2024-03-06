<script setup>
</script>
<script>
import axios from 'axios';
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
export default {
  name: 'createTicket',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        category_id: '',
        description: ''
      },
      category: []
    };
  },

  methods: {

    getData()
    {
        axios.get(
          "http://laravel-vue.test/api/category")
          .then(response => this.category = response.data.data)
          .catch(error => console.log(error));
    },

    createTicket()
    {
        axios.post(
          "http://laravel-vue.test/api/ticket", this.formData)
          .then(response => this.$router.push("/ticket"))
          .catch(error => console.log(error));
    }

  },

  created() {
    this.getData();
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
              <form @submit.prevent="createTicket">
                <div class="form-group">
                  <label>Name</label>
                  <input type="text" class="form-control" id="name" v-model="formData.name">
                </div>
                <div class="form-group">
                  <label>Email Address</label>
                  <input type="email" class="form-control" id="email" v-model="formData.email">
                </div>
                <div class="form-group">
                  <label>Ticket Category</label>
                  <select class="form-control" id="category_id" v-model="formData.category_id">
                    <option disabled selected>choose your category...</option>
                    <option v-for="categorys in category" v-bind:key="categorys.id" :value="categorys.id">{{ categorys.category_name }}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Description</label>
                  <input type="text" class="form-control" id="description" v-model="formData.description">
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


  
  