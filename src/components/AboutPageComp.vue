<template>
  <div class="container-two">
    <h1>ABOUT ME</h1>
    <div v-for="(aboutMe, index) in aboutMe" :key="index" class="about-section">
      <img :src="aboutMe.image" alt="About Me" class="about-img" data-aos="fade-right" data-aos-duration="1500">
      <div class="about-description">
        <h4 data-aos="fade-left" data-aos-duration="1500">{{ aboutMe.description1 }}</h4>
        <h4 data-aos="fade-left" data-aos-duration="1500">{{ aboutMe.description2 }}</h4>
      </div>
    </div>
    <div class="skills">
      <h1>Skills Acquired</h1>
      <div class="icons">
        <div>
          <i class="lab la-bootstrap"></i>
          <h4 class="text-center">Intermediate</h4>
        </div>
        <div>
          <i class="lab la-css3-alt"></i>
          <h4>Advanced</h4>
        </div>
        <div>
          <i class="lab la-js-square"></i>
          <h4>Beginner</h4>
        </div>
        <div>
          <i class="lab la-vuejs"></i>
          <h4 class="text-center">Beginner</h4>
        </div>
        <div>
          <i class="lab la-html5"></i>
          <h4>Advanced</h4>
        </div>
      </div>
    </div>
    <div class="button-container">
      <div class="projects-button">
        <a href="#projects"><button>My Projects</button></a>
      </div>
      <div class="projects-button">
        <a href="#resume"><button>My Resume</button></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    aboutMe() {
      return this.$store.state.aboutMe;
    },
    skills() {
      return this.$store.state.skills;
    }
  },
  mounted() {
    this.$store.dispatch('getData');
  }
}
</script>

<style scoped>
.container-two {
  color: whitesmoke;
  padding: 4em 2em;
  overflow-y: hidden;
}

.container-two h1 {
  margin-bottom: 2em;
  text-align: center;
}

.about-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
}

.about-img {
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  margin-bottom: 1em;
}

.about-description h4 {
  margin: 0.5em 0;
  text-align: center;
}

.skills {
  text-align: center;
}

.icons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
  font-size: 3em;
  margin-top: 2em;
}

.icons div:hover {
  transform: scale(1.2);
}
.skill {
  text-align: center;
}

.button-container {
  margin-top: 3em;
  display: flex;
  justify-content: center;
  gap: 2em;
}

.projects-button button {
  background-color: rgb(5, 138, 255);
  color: whitesmoke;
  border-radius: 25px;
  padding: 0.75em 1.5em;
  font-weight: 900;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.projects-button button:hover {
  background-color: whitesmoke;
  color: black;
}

@media (min-width: 768px) {
  .about-section {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  .about-description {
    flex: 1;
    padding-left: 2em;
    text-align: left;
  }

  .about-img {
    flex: 1;
  }
}
</style>
