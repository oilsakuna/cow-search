<template>
  <div id="app">
    <div class="bg-image"></div>

    <b-navbar toggleable="lg" type="dark" variant="transparent">
      <b-navbar-brand to="/" class="my-2 my-sm-0">
        <h3>
          <span>C🐮W </span>
          <span class="font-weight-bold">SEARCH</span>
        </h3>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <template v-if="admin">
          <b-navbar-nav>
            <b-nav-item to="/admin/add_data">Add data</b-nav-item>
            <b-nav-item to="/admin/view_data">View data</b-nav-item>
          </b-navbar-nav>
        </template>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- Not logged in -->
          <template v-if="!user && !admin">
            <b-button @click="googleSignin" variant="danger">
              Login <b-icon icon="google"> </b-icon>
            </b-button>
          </template>
          <!-- Has logged in -->
          <template v-else>
            <b-button
              @click="logout"
              variant="danger-outline"
              style="color: white"
            >
              Logout <b-icon icon="box-arrow-in-right"></b-icon>
            </b-button>
          </template>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="render">
      <router-view />
    </div>
  </div>
</template>

<script>
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
const provider = new GoogleAuthProvider();

export default {
  data() {
    return {
      user: false,
      admin: false,
    };
  },
  beforeCreate() {
    // Check state auth
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.email == "oil.iop577@gmail.com") {
          this.admin = true;
        } else {
          this.user = true;
        }
      } else {
        this.admin = false;
        this.user = false;
      }
    });
  },
  methods: {
    googleSignin() {
      signInWithPopup(auth, provider)
        .then(() => {
          alert("Login Success");
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    logout() {
      const confirmed = confirm("Are you want to logout?");
      if (confirmed == true) {
        signOut(auth).then(() => {
          alert("Logout success");
          this.$router.push("/");
        });
      }
    },
  },
};
</script>

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
