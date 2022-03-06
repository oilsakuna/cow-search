<template>
  <div>
    <b-container>
      <b-card class="my-5">
        <b-row>
          <b-col lg="12">
            <h1>COW DATA</h1>
          </b-col>
          <b-col lg="12" class="mt-3">
            <div class="table-responsive">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Data</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="doc in data" :key="doc.name">
                    <th>{{ doc.data.name }}</th>
                    <td width="250px">
                      <img :src="doc.data.image" width="100%" />
                    </td>
                    <td>
                      {{ doc.data.data }}
                    </td>
                    <td>
                      <button class="btn btn-primary" @click="update(doc.id)">
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        class="btn btn-danger"
                        @click="deleteData(doc.id)"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import { db, auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, collection, getDocs, deleteDoc } from "firebase/firestore";

export default {
  data() {
    return {
      data: [],
    };
  },
  beforeCreate() {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        this.$router.push("/");
      }
    });
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      getDocs(collection(db, "cow_data")).then((data) => {
        data.forEach((doc) => {
          this.data.push({
            data: doc.data(),
            id: doc.id,
          });
        });
      });
    },

    update(i) {
      window.location.replace(`/admin/update_data/${i}`);
    },

    deleteData(i) {
      const rest = confirm("Do you want to delete it?");
      if (rest == true) {
        deleteDoc(doc(db, "cow_data", i)).then(() => {
          window.location.reload();
        });
      }
    },
  },
};
</script>

<style></style>
