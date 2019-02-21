<template>
  <div id="form">
    <v-form v-model="valid">
      <v-container>
        <v-flex xs12 md4>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs4 md4>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-flex>
      </v-container>
    </v-form>
  </div>
</template>


<script>
export default {
  name: "produtos",

  data() {
    return {
      msg: "teste"
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style>
#form {
  margin: 15%;
}
</style>
