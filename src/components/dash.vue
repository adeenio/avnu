<template>
  <v-container grid-list-md>
    <v-layout v-bind="binding" transition >
      <v-flex>
        <v-card dark color="purple" height="400" max-width="600">
          <v-card-text>avnu</v-card-text>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card dark color="orange" height="400" max-width="600" >
	<v-sheet height="200" color="#f57f17">
	<Chart/>
	</v-sheet>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card dark color="cyan" height="400" max-width="600">
          <v-card-text><toDo/></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import Chart from '@/components/layout/Chart';
import toDo from '@/components/toDo';

  export default {
    name: 'dash',

    components: {
     Chart,
     toDo,

    },

    computed: {
      binding () {
        const binding = {}

        if (this.$vuetify.breakpoint.smAndDown) binding.column = true

        return binding
      }
    }
  }
</script>
