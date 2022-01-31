<template>
  <div class="page-search">
    <div class="search">
      <b-form @submit.stop.prevent="search">
        <b-row>
          <b-col lg="12" class="input-size">
            <input
              type="text"
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
  methods: {
    search() {
      alert("Enter work");
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
.input-size input {
  width: 800px;
}
@media (max-width: 767px) {
  .input-size input {
    width: 300px;
  }
}
</style>
