<template>
  <div class="main-container">
    <div class="container-one">
      <div class="profile" data-aos="flip-up">
        <img src="https://oyintanda-zongwana.github.io/portfolioimgages/images/pic2.jpg" alt="ME" class="profile-img">
        <h1 data-aos="fade-down-right">Hi, I'm Oyintanda Zongwana</h1>
        <h4>An Aspiring Fullstack Developer</h4>
      </div>
      <div class="social">
        <a href="https://github.com/oyintanda-zongwana" target="_blank">
          <div class="link">
            <i class="lab la-github"></i>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/oyintanda-zongwana-259741266/" target="_blank">
          <div class="link">
            <i class="lab la-linkedin"></i>
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

<style scoped>
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: whitesmoke;
  padding: 4em 2em;
  text-align: center;
}

.profile {
  margin-bottom: 2em;
}

.profile-img {
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

h1 {
  font-size: 2.5em;
  line-height: 1.2;
  margin-top: 1em;
}

h4 {
  font-size: 1.5em;
  margin-top: 0.5em;
}

.social {
  margin-top: -1.1em;
  font-size: 2em;
  display: flex;
  justify-content: center;
  gap: 0.1em;
}

.social a {
  text-decoration: none;
  color: whitesmoke;
  transition: transform 0.3s ease;
}

.social a:hover i {
  transform: scale(1.3);
}

@media (min-width: 768px) {
  .main-container {
    flex-direction: row;
    text-align: left;
  }

  .profile {
    flex: 1;
    margin-right: 2em;
  }

  .social {
    font-size: 2.5em;
    margin-top: -0.9em;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>

