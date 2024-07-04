<template>
  <div class="container-five" id="five">
    <section class="testimonials py-5">
      <div class="container">
        <h1 class="text-center mb-5">TESTIMONIALS</h1>
        <div class="row">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="col-lg-4 col-md-6 mb-4">
            <div class="card" data-aos="zoom-in">
              <img :src="testimonial.image" loading="lazy" class="card-img-top" alt="Testimonial Image">
              <div class="card-body">
                <h5 class="card-title">{{ testimonial.name }}</h5>
                <h6 class="card-subtitle">{{ testimonial.position }}</h6>
                <p class="card-text">{{ testimonial.message }}</p>
              </div>
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
};
</script>

<style scoped>
.container-five {
  margin-top: 3em;
  display: flex;
  justify-content: center;
  color: whitesmoke;
}

.testimonials {
  background-color: #2d2d2d;
  padding: 4em 2em;
  text-align: center;
}

.testimonials h1 {
  color: whitesmoke;
  font-size: 2.5em;
  margin-bottom: 1em;
}

.card {
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  cursor: pointer;
  transform: scale(1.5);
}

.card-img-top {
  height: 25em;
  object-fit: cover;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
}

.card-body {
  background-color: #2c2c2c;
  color: whitesmoke;
  height: 25em;
  padding: 1.5em;
  text-align: left;
}

.card-title {
  font-size: 1.25em;
  margin-bottom: 0.5em;
}

.card-subtitle {
  font-size: 1em;
  color: #b5b5b5;
  margin-bottom: 1em;
}

.card-text {
  font-size: 1em;
  line-height: 1.5em;
}

@media (min-width: 768px) {
  .testimonial-card {
    margin-bottom: 2em;
  }

  .testimonials h1 {
    font-size: 3em;
  }

  .card-body {
    height: 16em;
  }
}
</style>
