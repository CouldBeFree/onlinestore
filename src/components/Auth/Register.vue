<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Registration form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="email"
                prepend-icon="person"
                name="Email"
                label="Email"
                :rules="emailRules"
                type="email">
              </v-text-field>
              <v-text-field
                :counter="6"
                v-model="password"
                :rules="passwordRules"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password">
              </v-text-field>
              <v-text-field
                :counter="6"
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
                prepend-icon="repeat"
                name="confirm-password"
                label="Confirm Password"
                type="password">
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="onSubmit"
              :disabled="!valid || loading"
              :loading="loading"
            >Create Account</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "Register",
    data(){
      return{
        email: '',
        password: '',
        confirmPassword: '',
        valid: false,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be equal or than 6 characters'
        ],
        confirmPasswordRules: [
          v => !!v || 'Password is required',
          v => v === this.password || 'Passwords should match'
        ]
      }
    },
    computed: {
      loading(){
        return this.$store.getters.loading
      }
    },
    methods:{
      onSubmit(){
        if (this.$refs.form.validate()){
          const user = {
            email: this.email,
            password: this.password
          };

          this.$store.dispatch('registerUser', user)
            .then(()=> {
              this.$router.push('/')
            })
            .catch(() => {})
        }
      }
    }
  }
</script>

<style scoped>

</style>
