<template>
  <div id="app">
    <div class="bg-image"></div>

    <b-navbar toggleable="lg" type="light" style="background-color: pink">
      <b-navbar-brand to="/" class="my-2 my-sm-0">
        <h3>
          <span>C🐮W </span>
          <span class="font-weight-bold">SEARCH</span>
        </h3>
      </b-navbar-brand>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button @click="googleSignin" variant="danger">
          Google <b-icon icon="google"></b-icon>
        </b-button>
      </b-navbar-nav>
    </b-navbar>

    <div class="render">
      <router-view />
    </div>
  </div>
</template>

<style>
.render {
  min-height: 90vh;
}
.bg-image {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("https://th.bing.com/th/id/R.a83794bdf4cf7df2f0397146d24bd47c?rik=U6y3%2f1uB3r%2fL%2fg&riu=http%3a%2f%2fimagebank.biz%2fwp-content%2fuploads%2f2014%2f08%2f168278.jpg&ehk=Ploxgx8tC3sxZQAtONtle%2fT6sxxcZFzK%2fBr%2bPAh1qvo%3d&risl=&pid=ImgRaw&r=0");
  filter: blur(8px);
  -webkit-filter: blur(8px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -100;
}
</style>
