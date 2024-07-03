<template>
    <div class="container-five" id="five">
      <section class="testimonials py-5">
        <div class="container">
          <h1 class="text-center">TESTIMONIALS</h1>
          <div class="row py-5">
            <div v-for="(testimonial, index) in testimonials" :key="index" class="col-lg-4 mb-3">
              <div class="card">
                <img :src="testimonial.image" loading="lazy" alt="" >
                <small class="px-3 py-3 font-weight-bold">{{ testimonial.name }}</small>
                <h5 class="font-weight-bold px-3">{{ testimonial.title }}</h5>
                <p>{{ testimonial.message }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      testimonials() {
        return this.$store.state.testimonials;
      }
    }
  }
  </script>
  
  <style scoped>
  .container-five {
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-around;
    color: whitesmoke;
  }
  </style>