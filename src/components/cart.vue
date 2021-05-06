<template>
     <Master>
        <Nav/>
        <div class="container cartSection">
            <h3>Cart</h3>
        </div>
    </Master>
</template>

<script>
    import Nav from "../layout/nav";
    import Master from "../layout/master"
        export default { 
          name:"cart",
          components:{ Nav,Master },
        
        }
</script>

<style scoped>
    .cartSection{
      padding-top: 80px;
    }
</style>