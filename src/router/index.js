import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import produtos from "@/components/produtos";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/produtos",
      name: "produtos",
      component: produtos
    }
  ]
});
