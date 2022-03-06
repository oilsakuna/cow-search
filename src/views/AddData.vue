<template>
  <div>
    <b-container>
      <b-card class="my-5">
        <b-row>
          <b-col lg="12">
            <h1>ADD-DATA</h1>
          </b-col>
          <b-col lg="12" class="my-3">
            <form @submit.stop.prevent="addData">
              <b-row>
                <b-col lg="12">
                  <label for="title" class="h5">Cow name</label>
                  <input
                    type="text"
                    id="title"
                    v-model="name"
                    placeholder="Press name of cow here"
                    class="form-control"
                    required
                  />
                </b-col>
                <b-col lg="12" class="mt-4">
                  <label for="title" class="h5">Cow image</label>
                  <input
                    type="text"
                    id="title"
                    v-model="image"
                    placeholder="Press image of cow here"
                    class="form-control"
                    required
                  />
                </b-col>
                <b-col lg="12" class="mt-4">
                  <label for="data" class="h5">Cow data</label>
                  <textarea
                    id="data"
                    rows="8"
                    v-model="data"
                    placeholder="Press infomation here"
                    class="form-control"
                    required
                  />
                </b-col>
                <b-col lg="6" md="6" class="mt-3">
                  <input
                    type="reset"
                    value="Cancel"
                    class="btn btn-danger btn-block"
                  />
                </b-col>
                <b-col lg="6" md="6" class="mt-3">
                  <input
                    type="submit"
                    value="Save"
                    class="btn btn-success btn-block"
                  />
                </b-col>
              </b-row>
            </form>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { db, auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      name: null,
      image: null,
      data: null,
    };
  },
  beforeCreate() {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        this.$router.push("/");
      }
    });
  },
  methods: {
    addData() {
      addDoc(collection(db, "cow_data"), {
        name: this.name,
        image: this.image,
        data: this.data,
      })
        .then(() => {
          alert("Add Data success.");

          this.name = null;
          this.image = null;
          this.data = null;

          window.location.replace("/admin/view_data");
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
};
</script>

<style></style>
