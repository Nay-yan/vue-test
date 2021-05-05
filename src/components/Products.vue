<template>
    <div>
         <Nav/>
      <div class="card-columns container">

        <div class="card border-success" style="width: 21rem;">
          <div class="card-header">Header</div>
            <div class="card-body p-0">
              <img src="../assets/cart.jpg" class="card-img-top rounded-0">
            </div>
            <div class="card-footer text-primary">Price- $100</div>
        </div>

        <div class="card border-success" style="width: 21rem;">
          <div class="card-header">Header</div>
            <div class="card-body p-0">
              <img src="../assets/cart.jpg" class="card-img-top rounded-0">
            </div>
            <div class="card-footer text-primary">Price- $100</div>
        </div>

         <div class="card border-success" style="width: 21rem;">
          <div class="card-header">Header</div>
            <div class="card-body p-0">
              <img src="../assets/cart.jpg" class="card-img-top rounded-0">
            </div>
            <div class="card-footer text-primary">Price- $100</div>
        </div>

      </div>

    </div>
</template>

<script>
import Nav from "../layout/nav";
    export default {
        name:"Products",
        components:{ Nav },
        
    }
</script>

<style  scoped>

</style>