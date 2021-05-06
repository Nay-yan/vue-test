<template>
    <div>
      <Master>
         <Nav/> 

        <div class="container prodSection mb-2">
          <p class="totle">Cart Totle - {{ products.length }}</p>
        </div>
         <!-- Loader -->
         <Loader v-show="isLoad"/>

        <div v-show="!isLoad" class="card-columns container ">
            <div v-for="(p,i) in products" :key="i" class="card border-0 shadow" style="width: 21rem;">
                <div class="card-body p-0 text-center">
                  <img :src="p.image" class="card-img-top rounded-0 img ">
                </div>
                <div class="card-footer text-primary cardFooter pb-4">
                  <p class="cardTitle">{{p.title}}</p>
                  Price- ${{p.price}}
                  <button class="btn btn-outline-primary btn-sm float-right font-weight-bold" @click="addToCart()">Add To Cart</button>
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
  font-weight: normal;
  color: rgb(117, 117, 117);
  text-align: center;
}
.cardFooter{
  background-color: rgb(226, 243, 252);
  font-weight: bold;
}
.prodSection{
  padding-top: 80px;
}
.totle{
  background-color: rgb(2, 80, 116);
  color: white;
  padding: 10px 10px;
  border-radius: 5px;
}
</style>