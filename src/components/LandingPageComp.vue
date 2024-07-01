<template>
  <div class="hello">
    <!-- <h1>Welcome to thee mans portfolio</h1> -->
    </div>
    <div class="main-container">
      <div class="container-one">
        <div class="profile">
          <img src="https://oyintanda-zongwana.github.io/portfolioimgages/images/pic2.jpg" alt="ME" width="350em" height="400em">
          <h1>Hi, I'm Mans</h1>
          <h4>I'm an Aspiring Fullstack Developer</h4>
        </div>
        <div class="social">
          <a href="https://github.com/oyintanda-zongwana" target="_blank">
            <div class="link">
              <i class="lab la-github"></i>
              <h2>Github</h2>
            </div>
          </a>
        </div>
      </div>
    </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  color: whitesmoke;
  height: 110vh;
  padding: 1em 2em;
}
h1 {
  font-size: 46px;
    line-height: 54px;
  margin: 40px 0 0;
}
h4 {
    font-size: 25px;
}
.container-one img {
  border-radius: 50%;
}
.social {
  font-size: 3em;
}

</style>
