<template>
    <div>
      <Master>
         <Nav/> 

         <!-- Loader -->
        <Loader v-show="isLoad"/>

        <div v-show="!isLoad" class="card-columns container prodSection">
      
            <div v-for="(p,i) in products" :key="i" class="card border-success" style="width: 21rem;">
              <div class="card-header cardTitle">{{p.title}}</div>
                <div class="card-body p-0 text-center">
                  <img :src="p.image" class="card-img-top rounded-0 img ">
                </div>
                <div class="card-footer text-primary cardFooter">
                  Price- ${{p.price}}
                  <button class="btn btn-outline-info btn-sm float-right" @click="addToCart()">Add To Cart</button>
                </div>
            </div>
          </div>

       
        
      </Master>
    </div>
</template>

<script>
import Nav from "../layout/nav";
import Master from "../layout/master";
import Loader from "../reuse/loader";
import axios from 'axios';


    export default {
        name:"Products",
        components:{ Nav,Master,Loader },
        data(){
          return{
            isLoad :true,
            products:[],
          };
        },
        created(){
          axios.get("https://fakestoreapi.com/products")
          .then((res) => {
            this.products= res.data;
            this.isLoad=false;
          })
        },
        methods:{
          addToCart(p){
            var cart = this.$root.cart;
            cart.push(p);
          }
        },
        
    }
</script>

<style  scoped>
.img{
  width: 40%;
  padding: 10px 0;

}
.cardTitle{
  background-color: rgba(156, 255, 156, 0.904);
}
.cardFooter{
  background-color: rgba(214, 255, 214, 0.884);
}
.prodSection{
  padding-top: 80px;
}
</style>