<template>
  <div id="prod">
    <navbar/>
    <div id="lbprod">
      <div class="grid-container-2">
        <div>
          <h1>Produtos</h1>
        </div>
        <div style="float:left;">
          <button id="btnCadastrar" type="submit" v-on:click="teste()">Cadastrar</button>
        </div>
      </div>
    </div>
    <div id="table">
      <tabela/>
    </div>
  </div>
</template>

<script>
import tabela from "./tabela";
import navbar from "./navbar";
export default {
  name: "HelloWorld",
  components: {
    navbar,
    tabela
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },

  methods: {
    teste() {
      console.log(123);
      this.$router.push("/produtos");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#table {
  margin-top: 2%;
}

#lbprod {
  margin: 2%;
}

.grid-container-2 {
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
  grid-gap: 0px;
}

#btnCadastrar {
  margin-top: 1.5%;
  padding: 1%;
  border: 1px solid #2c3e50;
  height: 30px;
  width: 90px;
}

#btnCadastrar:hover {
  background: #2c3e50;
  color: #fff;
}
</style>
