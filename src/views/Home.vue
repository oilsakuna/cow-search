<template>
  <div class="page-search">
    <div class="search">
      <b-form @submit.stop.prevent="search">
        <b-row>
          <b-col lg="12" class="input-size">
            <h1>
              <span>C🐮W </span>
              <span class="font-weight-bold">SEARCH</span>
            </h1>
            <input
              type="text"
              v-model="textSearch"
              class="form-control form-control-lg"
              required
              placeholder="Search here"
            />
          </b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textSearch: null,
    };
  },
  methods: {
    search() {
      window.location.replace(`/result/${this.textSearch}`);
    },
  },
};
</script>

<style>
.page-search {
  position: relative;
  min-height: 90vh;
}
.search {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.input-size h1 {
  text-align: center;
  color: white;
  margin-bottom: 20px;
}
.input-size input {
  width: 800px;
}
@media (max-width: 767px) {
  .input-size input {
    width: 300px;
  }
}
</style>
