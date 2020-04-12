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
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
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
