<template>
    <Master>
        <Nav/>
      <div class="container">
        <div class="card text-center">
          <div class="card-header">
            Home
          </div>
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          
          </div>
          <div class="card-footer text-muted">
            2 days ago
          </div>
        </div>
      </div>
    </Master>
</template>

<script>
import Nav from "../layout/nav";
import Master from "../layout/master"
    export default { 
      name:"Home",
      components:{ Nav,Master },
        
    }
</script>

<style  scoped>

</style>