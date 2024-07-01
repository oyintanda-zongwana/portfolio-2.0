<template>
    <div class="container-two">
        <div class="nextToEachOther">
        <img src="https://oyintanda-zongwana.github.io/portfolioimgages/images/pic1.jpg" alt="..."  width="350em" height="400em">
        <div class="aboutme">
            <h1>About Me</h1>
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
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
.container-two{
    background-color: black;
    color: whitesmoke;
    height: 110vh;
    padding: 1em 2em;
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
}
</style>