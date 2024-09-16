<template>
  <nav class="fixed-top">
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
      <div class="container-fluid d-flex justify-content-between">
        <a class="navbar-brand" href="#landingPage">
          <img src="https://oyintanda-zongwana.github.io/hosted-pics/pics%20folder/brand.png" class="logo" alt="Logo" width="50" height="50">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#landingPage">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#aboutMe">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#resume">Education</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Projects</a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#testimonials">Testimonials</a>
            </li> -->
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script>
export default {
}
</script>

<style>
.logo {
  background: white;
  border-radius: 35%;
}

.navbar a {
  color: whitesmoke;
  font-weight: bold;
}

#navbarSupportedContent li a:hover {
  color: #29829b;
}

.navbar {
  flex-wrap: wrap;
  justify-content: space-between;
}

.navbar-toggler {
  margin-right: 1rem;
}

.navbar-collapse {
  flex-basis: 100%;
}

.navbar-nav {
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-item {
  margin-bottom: 0.5rem;
}

.nav-link {
  padding: 0.5rem 1rem;
}

@media (min-width: 768px) {
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
  .navbar-nav {
    flex-direction: row;
  }
  .nav-item {
    margin-right: 1rem;
    margin-bottom: 0;
  }
}
</style>
