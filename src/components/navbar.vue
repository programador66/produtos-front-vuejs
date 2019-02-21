<template>
  <div id="nav">
    <h1 id="pmz">PMZ</h1>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      msg: "teste"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nav {
  margin-top: 1%;
  margin-bottom: 3%;

  background: #2c3e50;
}

#pmz {
  color: aliceblue;
  padding: 0.5%;
  margin-left: 1.5%;
}
</style>
