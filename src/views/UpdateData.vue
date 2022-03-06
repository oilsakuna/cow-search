<template>
  <div>
    <b-container>
      <b-card class="my-5">
        <b-row>
          <b-col lg="12">
            <h1>Update Data</h1>
          </b-col>
          <b-col lg="12">
            <form @submit.stop.prevent="updateData">
              <b-row>
                <b-col lg="12">
                  <label for="id">ID</label>
                  <input
                    type="text"
                    id="id"
                    v-model="id"
                    readonly
                    class="form-control"
                  />
                </b-col>
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
import { db } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default {
  data() {
    return {
      array: [],

      id: this.$route.params.id,
      name: null,
      image: null,
      data: null,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      const docRef = doc(db, "cow_data", this.id);
      getDoc(docRef)
        .then((data) => {
          this.array.push(data.data());
        })
        .then(() => {
          this.array.map((data) => {
            this.name = data.name;
            this.image = data.image;
            this.data = data.data;
          });
        });
    },

    updateData() {
      const docRef = doc(db, "cow_data", this.id);
      updateDoc(docRef, {
        name: this.name,
        image: this.image,
        data: this.data,
      })
        .then(() => {
          alert("Update Success");
        })
        .then(() => {
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
