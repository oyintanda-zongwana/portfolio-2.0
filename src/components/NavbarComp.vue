<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <nav class="navbar bg-body-tertiary">
                <div class="container" >
                  <a class="navbar-brand" href="./index.html">
                    <img src="https://oyintanda-zongwana.github.io/hosted-pics/pics%20folder/brand.png" class="logo" alt="..." width="50" height="50">
                  </a>
                </div>
            </nav>
        </div>
    

    <nav class="navbar bg-dark d-flex justify-content-between" >
        <!-- Navbar content -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link"  href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Resume</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Testimonials</a>
                    
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
    </nav>
    </nav>
</template>
<script>
export default {

}
</script>
<style scoped>
.logo {
    background: white;
    border-radius: 35%;
} 
.navbar {
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 15px;
}

.navbar a {
  font-weight: bold;
}
#navbarSupportedContent li a i {
    font-size: 20em;
}
#navbarSupportedContent li a:hover {
    color: #29829b;
}
</style>