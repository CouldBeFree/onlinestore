<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create New product</h1>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="title"
            name="title"
            label="Title"
            required
            :rules="[v => !!v || 'Title is require']"
            type="text">
          </v-text-field>
          <v-text-field
            v-model="vendor"
            name="vendor"
            label="Vendor Product"
            type="text">
          </v-text-field>
          <v-text-field
            v-model="color"
            name="color"
            label="Color Product"
            type="text">
          </v-text-field>
          <v-text-field
            v-model="material"
            name="material"
            label="Material Product"
            type="text">
          </v-text-field>
          <v-text-field
            v-model="price"
            name="price"
            :rule="[v => !!v || 'Title is require']"
            required
            label="Price Product"
            type="text">
          </v-text-field>
          <v-text-field
            v-model="description"
            name="description"
            label="Description Product"
            type="text">
          </v-text-field>
        </v-form>
        <v-layout class="mb3">
          <v-flex xs12>
            <v-btn class="warning">
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <img src="https://image.ibb.co/jBZOMo/ASUS_TUF_Gaming_FX504_GD.jpg" alt="item-image" height="200px">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "New product",
    data(){
      return{

      }
    }
  }
</script>

<style scoped>

</style>
