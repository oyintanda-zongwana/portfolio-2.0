<template>
  <div class="container-two">
    <h1>ABOUT ME</h1>
    <div v-for="(aboutMe, index) in aboutMe" :key="index" class="about-section">
      <img :src="aboutMe.image" alt="About Me" class="about-img" data-aos="fade-right" data-aos-duration="1500">
      <div class="about-description">
        <h4 data-aos="fade-left" data-aos-duration="1500">{{ aboutMe.description1 }}</h4><br><br>
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
          <h4>Intermediate</h4>
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
        <div>
          <i class="lab la-node-js"></i>
          <h4>Beginner</h4>
        </div>
        <div>
          <i class="lab la-git"></i>
          <h4>advanced</h4>
        </div>
        <div>
          <i class="lab la-wordpress"></i>
          <h4>Beginner</h4>
        </div>
        <div>
          <i class="lab la-python"></i>
          <h4>Beginner</h4>
        </div>
      </div>
    </div><br><br>
    <div class="skills">
      <h1>Soft skills</h1>
      <div class="icons">
        <div>
          <i class="las la-assistive-listening-systems"></i>
          <h4>Good Listener</h4>
        </div>
        <div>
          <i class="las la-users"></i>
          <h4>Group player</h4>
        </div>
        <div>
          <i class="las la-microphone"></i>
          <h4>Good communication</h4>
        </div>
      </div>
    </div><br><br>
        <!-- Badges Section -->
<div class="badges">
  <h2>Badges</h2>
  <div class="badge-container">
    <div 
      ref="credlyBadge"
      data-iframe-width="150"
      data-iframe-height="270"
      data-share-badge-id="d24b0fba-5c5f-4a98-b348-6da34674f2cf"
      data-share-badge-host="https://www.credly.com"
    ></div>
    <div 
      data-iframe-width="150" 
      data-iframe-height="270" 
      data-share-badge-id="039d7a1b-88e2-486f-89c0-12c8aea74697" 
      data-share-badge-host="https://www.credly.com"
    ></div>
    <div 
      data-iframe-width="150" 
      data-iframe-height="270" 
      data-share-badge-id="001031e9-4872-4d89-b560-d59eedad31d8" 
      data-share-badge-host="https://www.credly.com"
    ></div>
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
  this.loadCredlyBadge(); // Add this line to load the badge when component mounts
},
  methods: {
  loadCredlyBadge() {
    // Check if script is already loaded
    if (document.querySelector('script[src="https://cdn.credly.com/assets/utilities/embed.js"]')) {
      return;
    }
    
    const script = document.createElement('script');
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    
    script.onload = () => {
      console.log('Credly badge script loaded successfully');
    };
    
    script.onerror = (error) => {
      console.error('Error loading Credly badge script:', error);
    };
    
    document.body.appendChild(script);
  }
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
  margin-top: 0.3em;
  margin-bottom: 1em;
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

.about-description {
  margin-top: 4em;
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
  gap: 1.1em;
  font-size: 3em;
  margin-top: 2em;
}

.icons div:hover {
  transform: scale(1.2);
}
.skill {
  text-align: center;
}

.badges {
  margin: 2em 0;
  text-align: center;
}

.badge-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 1em;
}

.badge-container div {
  background-color: transparent;
  border-radius: 8px;
  padding: 10px;
  transition: transform 0.3s ease;
}

.badge-container div:hover {
  transform: scale(1.05);
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
