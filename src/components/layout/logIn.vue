<template>
  <v-app>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card shaped :loading="loading">

              <v-toolbar
                color="indigo"
                dark
                flat
              >
                <v-toolbar-title>{{ currentTitle }}</v-toolbar-title>
                <v-spacer />
                <v-tooltip bottom >
                  <template v-slot:activator="{ on }" >
                    <v-btn :hidden="step >= 1"
                      icon
                      @click="step++"
                      v-on="on"
                    >
                      <v-icon>mdi-account-plus</v-icon>
                    </v-btn>
                  </template>
                  <span>Signup</span>
                </v-tooltip>
		</v-toolbar>

		<v-window v-model="step">

		<v-window-item :value="0">
              <v-card-text>
                <v-form>
                  <v-text-field :rules="rules"
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  />
                </v-form>

		<v-icon>mdi-restart</v-icon>
		Recover

              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn icon @click.stop="loading = !loading">Login</v-btn>
              </v-card-actions>

	</v-window-item>

      <v-window-item :value="1">
        <v-card-text>
          <v-text-field
            label="Email"
            placeholder="email"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            This is the email you will use to login to your Vuetify account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
            label="Password"
            type="password"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
          <span class="caption grey--text">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions :hidden="step === 0" >
      <v-btn
        :disabled="step === 0"
        text
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 3"
        color="primary"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
    </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
    loading: false,
    step: 0,
      rules: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],
    }),

    watch: {
      loading (val) {
        if (!val) return

        setTimeout(() => (this.loading = false), 5000)
      },
    },

  computed: {
    currentTitle () {
      switch (this.step) {
        case 0: return 'Login'
	case 1: return 'Sign-up'
        case 2: return 'Create a password'
        default: return 'Account created'
	}
      },
    },
  }
  
</script>
<style>

</Style>
