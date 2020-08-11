<template>
  <div>
    <nav class="navbar navbar-light">
      <a style="color:black;" href="#">Service Center</a>

      </nav>

    <div class="sidenav">
      <a href="#">Make A Donation</a>
      <a href="#">Donation Applicant</a>
    </div>

    <div class="main">

      <!-- <router-link to="/Home">Home</router-link>
      <router-link to="/MakeDonate">makeDonate</router-link>
      <router-link to="/DonateApp">DonateApp</router-link> -->

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.sidenav {
  margin-top: 50px;
  height: 100%; /* Full-height: remove this if you want "auto" height */
  width: 160px; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: rgb(42, 241, 255); /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
  border: 1px solid black;
}

/* The navigation menu links */
.sidenav a {
  margin-top: 20px;
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Style page content */
.main {
  margin-left: 160px; /* Same as the width of the sidebar */
  padding: 0px 10px;
  text-align: center;
}



nav {
  border: 1px solid black;
  height: 50px;
  color: black;
  background-color: #e3f2fd;
  font-weight: bold;
}
</style>
