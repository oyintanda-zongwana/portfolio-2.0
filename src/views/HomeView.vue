<template>
  <section id="navbar">
    <NavbarComp/>
  </section>
  <section id="landingPage">
    <LandingPage/>
  </section>
  <section id="aboutMe">
    <AboutMe/>
  </section>
  <section id="resume">
    <Resume/>
  </section>
  <section id="projects">
    <Projects/>
  </section>
  <section id="testimonials">
    <Testimonials/>
  </section> 
  <section id="contact">
    <Contact/>
  </section>
  <section id="footer">
    <Footer/>
  </section>
</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPageComp.vue'
import NavbarComp from '@/components/NavbarComp.vue'
import AboutMe from '@/components/AboutPageComp.vue'
import Resume from '@/components/ResumeComp.vue'
import Projects from '@/components/ProjectsComp.vue'
import Testimonials from '@/components/TestimonialsComp.vue'
import Contact from '@/components/ContactComp.vue'
import Footer from '@/components/FooterComp.vue'
// import Spinner from '@/components/SpinnerComp.vue'

export default {
  name: 'HomeView',
  components: {
    LandingPage,
    NavbarComp,
    AboutMe,
    Resume,
    Projects,
    Testimonials,
    Contact,
    Footer,
    // Spinner
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    overflow-x: hidden;
    font-family: "League Spartan", sans-serif;
}
h2 {
    font-size: 46px;
    line-height: 54px;
    color: #282525;
}
h4 {
    font-size: 20px;
    color: #282525;
}
h6 {
    font-size: 12px;
    font-weight: 700;
}

</style>