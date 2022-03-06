<template>
  <div>
    <b-container>
      <b-card class="mt-5 mb-3">
        <b-row>
          <b-col lg="12" class="mb-4">
            <h3><span style="color: red">Result of </span>{{ textSearch }}</h3>
          </b-col>
          <b-col lg="12" class="my-3" v-for="cow in filterCows" :key="cow.name">
            <b-container style="width: 700px">
              <b-card
                :title="cow.name"
                :img-src="cow.image"
                img-top
                tag="article"
                class="mb-2"
              >
                <b-card-text class="truncate">
                  {{ cow.data }}
                </b-card-text>
                <b-button variant="primary" block @click="readMore(cow)"
                  >Read more</b-button
                >
              </b-card>
            </b-container>
          </b-col>
        </b-row>
      </b-card>
    </b-container>

    <!-- Modal -->
    <b-modal v-model="modalStatus" hide-footer>
      <template #modal-title>
        <span class="font-weight-bold">{{ cowName }}</span>
      </template>
      <div class="d-block text-center">
        <b-img :src="cowImage" fluid />
        <p class="mt-3">{{ cowData }}</p>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { auth, db } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

export default {
  data() {
    return {
      textSearch: this.$route.params.name,
      // For data before filter
      cowsData: [],
      // Modal status
      modalStatus: false,
      cowName: null,
      cowImage: null,
      cowData: null,
    };
  },
  computed: {
    filterCows: function () {
      return this.cowsData.filter((res) => {
        return res.name.match(this.textSearch);
      });
    },
  },
  beforeCreate() {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        this.$router.push("/");
      }
    });
  },
  mounted() {
    // Use function get data
    this.getAllData();
  },
  methods: {
    getAllData() {
      getDocs(collection(db, "cow_data")).then((data) => {
        data.forEach((doc) => {
          this.cowsData.push({
            ...doc.data(),
            id: doc.id,
          });
        });
      });
    },

    readMore(data) {
      this.modalStatus = true;
      this.cowName = data.name;
      this.cowImage = data.image;
      this.cowData = data.data;
    },
  },
};
</script>

<style>
.truncate {
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
