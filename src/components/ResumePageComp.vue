<template>
    <h1>RESUME</h1>
    <h2>This is the resume Page</h2>
    <h3>Because you aren't allowed to pause 😎</h3>
    <div class="container-three">
        <div class="cards">
            <div class="item" v-for="item in items" :key="item.id">

            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
    renderItems(items) {
    const main = document.querySelector('.cards');
    main.innerHTML = ''; // Clear existing items

    items.forEach(item => {
        main.innerHTML += `
            <div class="pro">
                <img src="${item.image}" alt="">
                <div class="des">
                    <span>${item.name}</span>
                    <h5>${item.description}</h5>
                    <h4>${item.view}</h4>
                </div>
            </div>
        `;
    });
}
}
}
</script>
<style scoped>
h1 {
    color: whitesmoke;
}
.pro {
    width: 23%;
    min-width: 250px;
    padding: 10px 12px;
    border: 1px solid rgb(99, 95, 95);
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 15px 15px 20px rgb(0, 0, 0, 0.01);
    margin: 15px 0;
    transition: 0.2s ease;
    position: relative;
}
.pro img {
    width: 100%;
    border-radius: 20px;
}
.pro:hover {
    box-shadow: 20px 20px 30px rgb(0, 0, 0, 0.36);
}
.pro .des {
    text-align: start;
    padding: 10px 0;
}
.pro .des span {
    color: #606063;
    font-size: 12px;
}
.pro .des h5 {
    padding-top: 7px;
    color: #1a1a1a;
    font-size: 14px;
}
.pro .des h4 {
    padding-top: 7px;
    font-size: 15px;
    font-weight: 700;
    color: #088178;
}
</style>