<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      color='eggshell'
      temporary
      app
      clipped

    >
      <v-col align="center">
        <v-avatar size="100">
          <v-img src="https://randomuser.me/api/portraits/women/78.jpg"></v-img>
        </v-avatar>

        <v-list-item-content>
          <v-list-item-title>Joan Leider</v-list-item-title>
        </v-list-item-content>
      </v-col>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
	<List/>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block><logForm/></v-btn>
        </div>
      </template>
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

      <v-btn
      icon
      >
      <v-icon>mdi-inbox</v-icon>
      </v-btn>

  </v-app-bar>
  <v-content absolute >
   <dash></dash>
   <Settings/>
   </v-content>
 </v-app>
</template>

<script>
import dash from '@/components/dash';
import List from '@/components/layout/List';
import Settings from '@/components/Settings';
import logForm from '@/components/logForm';

export default {
  name: 'Menu',

  components: {
    dash,
    List,
    logForm,
    Settings,

  },

  data () {
      return {
        drawer: null,
        items: [
	{ title: 'Stats', icon: 'mdi-chart-line'},
	{ title: 'Pages', icon: 'mdi-account-details'},
	{ title: 'messeges', icon: 'mdi-email'},
	{ title: 'Discover', icon: 'mdi-radar'},
	{ title: 'Apps', icon: 'mdi-rocket-outline'},
	{ title: 'Settings', icon: 'mdi-cog'},
        ],
      }
    },
   }
</script>
