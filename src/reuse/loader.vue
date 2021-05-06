<template>
    <div class="container loader">
        <div class="spinner-border text-secondary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:"loader"
    }
</script>

<style scoped>
.loader{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>