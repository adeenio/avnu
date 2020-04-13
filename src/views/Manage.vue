<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
      clipped
    >
    <List/>

    </v-navigation-drawer>

     <v-app-bar
      color="indigo"
      dark
      app
    >
      <div class="d-flex align-center">
        <h1>aVnu</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn icon
       @click.stop="drawer = !drawer" 
	>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>

  </v-app-bar>
  <v-content absolute >
   <dash></dash>
   </v-content>
 </v-app>
</template>

<script>
import dash from '@/components/dash';
import List from '@/components/layout/List';

export default {
  name: 'Manage',

  components: {
    dash,
    List,

  },

  data () {
      return {
        drawer: null,
      }
    },
   }
</script>
