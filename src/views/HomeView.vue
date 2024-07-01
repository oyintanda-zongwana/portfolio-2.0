<template>
  <section id="navbar">
    <NavbarComp/>
  </section>
  <section id="landingPage">
    <LandingPage/>
  </section>


    

</template>

<script>
// @ is an alias to /src
import LandingPage from '@/components/LandingPageComp.vue'
import NavbarComp from '@/components/NavbarComp.vue'

export default {
  name: 'HomeView',
  components: {
    LandingPage,
    NavbarComp
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
h1 {    font-size: 50px;
    line-height: 64px;
    color: #282525;
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