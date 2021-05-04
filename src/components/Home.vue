<template>
    <div>
        <Nav/>
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h3 class="card-title">Home</h3>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>

    </div>
</template>

<script>
import Nav from "./nav";
    export default {
        components:{ Nav },
        name:"Home",
        
    }
</script>

<style  scoped>

</style>