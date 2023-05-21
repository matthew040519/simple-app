<template>
    <div class="row mt-lg-5">
        <div class="col-md-3">

        </div>
        <div class="col-md-6">
          <div class="card" style="width: 100%;">
            <div class="card-body">
              <h5 class="card-title">Ticket List <div style="float: right"><a href="/add-ticket" class="btn btn-primary btn-sm">Add Ticket</a></div></h5>
              <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Ticket Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="tickets in ticket" v-bind:key="tickets.id">
                        <td>{{ tickets.name  }}</td>
                        <td>{{ tickets.email  }}</td>
                        <td>{{ tickets.category_name  }}</td>
                        <td>{{ tickets.created_at  }}</td>
                    </tr>
                </tbody>
                </table>
            </div>
          </div>
        </div>
        <div class="col-md-3">

        </div>
      </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Ticket',
  data() {
    return {
        ticket: [],
    };
  },

  methods: {

    async getData() {
      try {
        const response = await axios.get(
          "http://laravel-vue.test/api/ticket"
        );
        console.log(response.data.data);
        this.ticket = response.data.data;
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