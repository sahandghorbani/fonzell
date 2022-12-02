<template>
  <div id="sidebar">
    <nav class="main-nav">
      <div class="logo"></div>
      <Burger></Burger>
    </nav>

    <Sidebar>
    <h1>Menu</h1>
      <ul class="sidebar-panel-nav">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">shop</a>
        </li>
        <li>
          <a href="#contact">Unterhaltung</a>
        </li>
        <li>
          <a href="#contact">blog</a>
        </li>
        <li>
          <a href="#contact">kontakt</a>
        </li>
        <li>
          <a href="#contact">Über uns</a>
        </li>
      </ul>
    </Sidebar>
  </div>
</template>

<script scoped>
import Burger from "./menu/Burger";
import Sidebar from "./menu/Sidebar.vue";

export default {
  name: "app",
  components: {
    Burger,
    Sidebar,
  },
};
</script>
<style scoped>
.logo {
  align-self: center;
  font-weight: bold;
  color: black;
}

.main-nav {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 0.8rem 1rem;
}

ul.sidebar-panel-nav {
  list-style-type: none;
}

ul.sidebar-panel-nav > li , h1 {
  border-bottom: 1px solid #c1c9d7;
}
ul.sidebar-panel-nav > li > a {
  margin-left: 2rem;
  color: #4b566b;
  text-decoration: none;
  font-size: 1.8rem;
  display: block;
  padding: 1rem;
}
h1 {
  text-align: center;
}
</style>
