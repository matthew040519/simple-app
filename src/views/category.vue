<script setup>
</script>
<script>
import axios from 'axios';
export default {
  name: 'Category',
  data() {
    return {
        category: [],
    };
  },

  methods: {

    async getData() {
      try {
        const response = await axios.get(
          "http://laravel-vue.test/api/category"
        );
        console.log(response.data.data);
        this.category = response.data.data;
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

    <!-- <div class="container"> -->
      <div class="row mt-lg-5">
        <div class="col-md-3">

        </div>
        <div class="col-md-6">
          <div class="card" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">Category List <div style="float: right"><a href="/add-category" class="btn btn-primary btn-sm">Add Category</a></div></h5>
              <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="categorys in category" v-bind:key="categorys.id">
                        <td>{{ categorys.id }}</td>
                        <td>{{ categorys.category_name  }}</td>
                    </tr>
                </tbody>
                </table>
            </div>
          </div>
        </div>
        <div class="col-md-3">

        </div>
      </div>
    <!-- </div> -->
    
    
  </template>


  
  