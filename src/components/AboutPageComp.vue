<template>
    <div class="container-two"> 
      <h1>ABOUT ME</h1>
      <div v-for="(aboutMe, index) in aboutMe" :key="index"  class="nextToEachOther">
        <img :src="aboutMe.image" alt="..." width="350em" height="400em">
        <div class="aboutMe">
          <h4>{{ aboutMe.description1 }}</h4>
          <h4>{{ aboutMe.description2 }}</h4>
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
    mounted(){
      this.$store.dispatch('getData')
    }
  }
  </script>
  
  <style> 
  .button-container { 
    margin-top: 5%; 
    display: flex; 
    flex-direction: row; 
    justify-content: center; 
    align-items: center; 
    transition: ease 2s; 
  } 
  .aboutMe{
    margin-top: 5%;
    padding: 1em;
  }
  .button-container button:hover { 
    background-color: rgb(255, 255, 255); 
    color: black; 
  } 
  .projects-button button{ 
    background-color: rgb(5, 138, 255); 
    color: whitesmoke; 
    border-radius: 5em; 
    padding: 1em; 
    margin: 5em; 
    font-weight: 900; 
    border: none; 
  }
  .container-two{
    color: whitesmoke; 
    height: 110vh; 
    padding: 6em 6em; 
    overflow-y: hidden; 
  } 
  .nextToEachOther { 
    display: flex; 
    flex-direction: row; 
    padding: 2em; 
    justify-content: space-around; 
  }
  .icons { 
    font-size: 9em; 
    display: flex; 
    justify-content: space-around; 
    flex-wrap: wrap; 
    transition: ease 2s; 
  }
  .icons.lab:hover { 
    background-color: whitesmoke; 
    color: black; 
    border-radius: 1em; 
  } 
  </style>