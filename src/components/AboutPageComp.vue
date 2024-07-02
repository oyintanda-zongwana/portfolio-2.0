<template>
    <div class="container-two">
        <h1>ABOUT ME</h1>
        <div class="nextToEachOther">
        <img src="https://oyintanda-zongwana.github.io/portfolioimgages/images/pic1.jpg" alt="..."  width="350em" height="400em">
        <div class="aboutme">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>Repellendus vero nihil doloremque, reprehenderit unde nam earum quod aut recusandae, culpa eos excepturi quaerat<br> laudantium saepe alias iusto fugiat necessitatibus tenetur?</p>
        </div>
        </div>
        <div class="skills">
            <h1>Skills Acquired</h1>
            <div class="icons">
                <i class="lab la-bootstrap"></i>
                <i class="lab la-css3-alt"></i>
                <i class="lab la-js-square"></i>
                <i class="lab la-vuejs"></i>
                <i class="lab la-html5"></i>
            </div>
        </div>
        <div class="button-container">
            <div class="projects-button">
               <a href="#projects"><button>My Projects</button></a> 
            </div>
            <div class="projects-button">
                <a href="#resume"><button >My Resume</button></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
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
.icons .lab:hover {
    background-color: whitesmoke;
    color: black;
    border-radius: 1em;
}
</style>