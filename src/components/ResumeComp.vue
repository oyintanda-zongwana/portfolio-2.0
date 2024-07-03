<template>
    <h1>RESUME</h1>
    <h2>This is the resume Page</h2>
    <h3>Because you aren't allowed to pause 😎</h3>
    <div class="container-three d-flex justify-content-center">
      <div class="cards">
        <div class="item" v-for="item in education" :key="item.id">
          <div class="pro">
            <h2>{{ item.Institution }}</h2>
            <div class="des">
              <span>{{ item.year }}</span>
              <h5>{{ item.description }}</h5>
              <h4>{{ item.contact.name }}</h4>
              <h4>{{ item.contact.contactDetails }}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  
  export default {
    computed: {
      ...mapState(['education'])
    },
    mounted() {
      this.$store.dispatch('getData')
    }
  }
  </script>
<style scoped>
.container-three {
    height: 110vh;
    padding: 6em 45em;
    color: whitesmoke;
    display: flex;
    flex-direction: row;
}
h1, h2, h3 {
    color: whitesmoke;
}
.pro {
    width: 80vh;
    min-width: 250px;
    padding: 10px 12px;
    border: 1px solid rgb(99, 95, 95);
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 15px 15px 20px rgb(0, 0, 0, 0.01);
    margin: 15px 0;
    transition: 0.2s ease;
    position: relative;
}
.pro:hover {
    box-shadow: 20px 20px 30px rgba(255, 255, 255, 0.36);
}
.pro .des {
    text-align: start;
    padding: 10px 0;
}
.pro .des span {
    color: whitesmoke;;
    font-size: 12px;
}
.pro .des h5 {
    padding-top: 7px;
    color: whitesmoke;
    font-size: 14px;
}
.pro .des h4 {
    padding-top: 7px;
    font-size: 15px;
    font-weight: 900;
    color: whitesmoke;
}
</style>