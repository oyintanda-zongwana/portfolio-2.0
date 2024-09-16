<template>
  <div class="resume-section" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
    <h1>Education</h1>
    <div class="container-three">
      <div class="cards" data-aos="zoom-in">
        <div class="item" v-for="item in education" :key="item.id">
          <div class="pro">
            <h2>{{ item.Institution }}</h2>
            <div class="des">
              <span>{{ item.year }}</span>
              <h5>{{ item.description }}</h5>
              <div v-for="(contact, contactIndex) in item.contact" :key="contactIndex">
                <h4>Contact Name: {{ contact.name }}</h4>
                <h4>Contact Details: {{ contact.contactDetails }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['education'])
  },
  mounted() {
    this.$store.dispatch('getData');
  }
};
</script>

<style scoped>
.resume-section {
  text-align: center;
  color: whitesmoke;
  padding: 4em 1em;
}

h1 {
  margin-bottom: 0.5em;
  font-size: 2.5em;
}

h2 {
  margin-bottom: 0.5em;
  font-size: 2em;
}

h3 {
  margin-bottom: 2em;
  font-size: 1.5em;
  color: #29829b;
}

.container-three {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
}

.pro {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5em;
  border: 1px solid rgb(99, 95, 95);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  width: 100%;
  max-width: 350px;
  margin: 1em;
}

.pro:hover {
  box-shadow: 0 12px 24px rgba(255, 255, 255, 0.3);
  transform: translateY(-10px);
}

.pro .des {
  text-align: left;
  margin-top: 1em;
}

.pro .des span {
  display: block;
  font-size: 0.9em;
  color: #ccc;
}

.pro .des h5, .pro .des h4 {
  margin: 0.5em 0;
  font-size: 1em;
}

@media (min-width: 768px) {
  .resume-section {
    padding: 6em 4em;
  }

  h1 {
    font-size: 3em;
  }

  h2 {
    font-size: 2.5em;
  }

  h3 {
    font-size: 2em;
  }

  .pro {
    padding: 2em;
  }

  .pro .des span {
    font-size: 1em;
  }

  .pro .des h5, .pro .des h4 {
    font-size: 1.2em;
  }
}
</style>
