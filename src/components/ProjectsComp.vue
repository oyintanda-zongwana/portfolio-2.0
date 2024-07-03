<template>
    <div class="container-four">
        <h1>PROJECTS</h1>
        <div class="row">
            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button v-for="(project, index) in projects" :key="index" type="button" data-bs-target="#carouselExampleCaptions" :data-bs-slide-to="index" :aria-label="`Slide ${index + 1}`"></button>
                </div>
                <div class="carousel-inner">
                    <div v-for="(project, index) in projects" :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
                        <img :src="project.image" class="d-block w-100" alt="..." width="50em">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{{ project.name }}</h5>
                            <p>{{ project.description }}</p>
                            <a :href="project.github" target="_blank"><button>Github</button></a><a :href="project.live" _blank><button>Go Live</button></a>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        projects() {
            return this.$store.state.projects
        }
    },
    mounted(){
        this.$store.dispatch('getData')
    }
}
</script>

<style scoped>
.container-four {
    height: 110vh;
    padding: 6em 6em;
    overflow: hidden;
}
.carousel-item a {
    text-decoration: none;
}
.carousel-item img {
    width: 100%;
    height: 45em;
}
h5, p {
    background-color: black;
    color: whitesmoke;
}
a button {
    padding: 0.3em;
    margin: 1em;
    border: none;
    border-radius: 0.5em;
    background-color: whitesmoke;
}
h1 {
    color: whitesmoke;
}

</style>