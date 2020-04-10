<template>
  <v-app  style="background: #fff">
    <v-app-bar
      app
      color="#203139"
      dark
    >
      <v-col cols="2">
        <v-img
          :src="require('./assets/logo.png')"
          class="float-right"
          contain
          height="80"
        />
      </v-col>
      <v-col cols="4">
         <v-autocomplete
            v-model="select"
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            cache-items
            class="mx-4"
            flat
            hide-no-data
            hide-details
            label="Search a project"
            solo-inverted
            
            append-icon="fa-search"
          ></v-autocomplete>
      </v-col>
      <v-col cols="2">
        Projects
      </v-col>
      <v-col cols="2">
       Sign Up 
      </v-col>
      <v-col cols="2">
        <v-btn depressed small color="#00995d">Login</v-btn>
      </v-col>
    </v-app-bar>

    <v-content>
      <Home/>
    </v-content>

    <Footer/>

  </v-app>
</template>

<script>

import Home from './components/Home';
import Footer from './components/pages/Footer';

export default {
  name: 'App',

  components: {
    Home,
    Footer
  },

  data: () => ({
    loading: false,
        items: [],
        search: null,
        select: null,
        states: [
         'Joao'
        ],
  }),
  watch: {
      search (val) {
        val && val !== this.select && this.querySelections(val)
      },
  },
  methods: {
      querySelections (v) {
        this.loading = true
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.states.filter(e => {
            return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
          })
          this.loading = false
        }, 500)
      },
  },
};
</script>
