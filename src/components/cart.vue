<template>
     <Master>
        <Nav/>
        <div class="container">
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

</style>