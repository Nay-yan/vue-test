<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light mb-4 bg-light">
          <router-link to="/" class="navbar-brand" ><img src="../assets/logo.png" class="logo"/></router-link>
           
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link to="/" class="nav-link" >Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products" class="nav-link" >Products</router-link>
              </li>
            </ul>
          </div>
        </nav>
       
        
    </div>
</template>

<script>
    export default {
        name:"nav",
    }
</script>

<style  scoped>
.logo{
  width: 40px;
}
</style>