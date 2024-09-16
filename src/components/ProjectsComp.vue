<template>
  <div class="container-four">
    <h1>PROJECTS</h1>
    <div class="row">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button v-for="(project, index) in projects" :key="index" type="button" data-bs-target="#carouselExampleCaptions" :data-bs-slide-to="index" :aria-label="`Slide ${index + 1}`"></button>
        </div>
        <div class="carousel-inner">
            <div v-if="projects">
            <div v-for="(project, index) in projects" :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
              <img :src="project.image" class="d-block w-100" alt="Project Image">
              <div class="carousel-caption d-none d-md-block">
                <h5>{{ project.name }}</h5>
                <p>{{ project.description }}</p>
                <a :href="project.github" target="_blank"><button class="btn btn-primary">GitHub</button></a>
                <a :href="project.vercel" target="_blank"><button class="btn btn-secondary">Live Demo</button></a>
              </div>
            </div>
            </div>
            <div v-else class="Spinner"><Spinner/></div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>

  </template>
  
  <script>
import Spinner from '@/components/SpinnerComp.vue'

  export default {
    components: {
      Spinner
    },
    computed: {
      projects() {
        return this.$store.state.projects;
      }
    },
    mounted() {
      this.$store.dispatch('getData');
    }
  };
  </script>
  
  <style scoped>
  .container-four {
    padding: 2em 1em;
    text-align: center;
    background-color: #1a1a1a;
  }
  
  h1 {
    margin-top: 0.3em;
    margin-bottom: 0.2em;
    font-size: 2.5em;
    color: whitesmoke;
  }
  
  .carousel-item img {
    width: 100%;
    height: 83vh;
    object-fit: cover;
  }
  
  .carousel-caption {
    background: rgba(0, 0, 0, 0.7);
    padding: 1em;
    border-radius: 1.5em;
  }
  
  .carousel-caption h5,
  .carousel-caption p {
    color: whitesmoke;
  }
  
  .carousel-caption h5 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }
  
  .carousel-caption p {
    font-size: 1.2em;
    margin-bottom: 1em;
  }
  
  .carousel-caption a button {
    padding: 0.5em 1em;
    margin: 0.5em;
    border: none;
    border-radius: 0.5em;
    font-weight: 700;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: whitesmoke;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    color: whitesmoke;
  }
  
  .btn-secondary {
    background-color: #6c757d;
    color: whitesmoke;
  }
  
  .btn-secondary:hover {
    background-color: #5a6268;
    color: whitesmoke;
  }
  
  @media (min-width: 768px) {
    .container-four {
      padding: 4em 6em;
    }
  
    h1 {
      font-size: 3em;
    }
  
    .carousel-caption {
      padding: 1.5em;
    }
  
    .carousel-caption h5 {
      font-size: 2em;
    }
  
    .carousel-caption p {
      font-size: 1.5em;
    }
  
    .carousel-caption a button {
      padding: 0.7em 1.5em;
    }
  }
  </style>
  