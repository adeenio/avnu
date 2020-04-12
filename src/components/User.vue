<template>
  <v-app>
      <v-col align="center">
        <v-avatar size="100">
          <v-img src="https://randomuser.me/api/portraits/women/78.jpg"></v-img>
        </v-avatar>

        <v-list-item-content>
          <v-list-item-title>Joan Leider</v-list-item-title>
        </v-list-item-content>
      </v-col>

      <List/>

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
      </v-list>
 </v-app>
</template>

<script>
import List from '@/components/layout/List';

export default {
  name: 'User',

  components: {
    List,
  },

  data () {
      return {
        drawer: null,
        items: [
	{ title: 'Stats', icon: 'mdi-chart-line'},
	{ title: 'Pages', icon: 'mdi-account-details'},
	{ title: 'messeges', icon: 'mdi-email'},
	{ title: 'Discover', icon: 'mdi-account-cog'},
	{ title: 'Apps', icon: 'mdi-rocket-outline'},
	{ title: 'Settings', icon: 'mdi-cog'},
        ],
	ems: [                                                                                                           'About', 'Reviews', 'Contact', 'Services',                                                                     ]
      }
    },
   }
</script>
