<template>
    <div class="position-relative">
        <Nav/>
        <slot/>

    </div>
</template>

<script>
import Nav from "./nav"
    export default {
        name:"master",
        component:{Nav}
    }
</script>

<style  scoped>

</style>