import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/app/Interfaces/shopping-cart';
import { LocalService } from 'src/app/services/local.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DonutDetail } from 'src/app/Interfaces/DonutDetail';
import { DonutApiService } from 'src/app/services/donut-api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private lStore:LocalService, private apiService:DonutApiService, private router:Router, private route:ActivatedRoute) { }
  cartItems:ShoppingCart[] = [];
  donutId:number = 0;
  totalCalories:number = 0;
  totalCost:number = 0;

  ngOnInit(): void {
    this.cartItems = this.lStore.getCartData('Cart');
    this.route.paramMap.subscribe((params) => {
      this.donutId = Number(params.get('id'));      
    });
    
    if ( this.donutId > 0 ){
      console.log(this.donutId);
      this.addToCart(this.donutId);
    }
    this.setTotalCost();
    this.setTotalCalories();
  }
  addToCart(id:number):void{
    let cDonut:DonutDetail | undefined;
    this.apiService.getDonutDetail(id).subscribe((data) => {
      cDonut = {...data}
      if (cDonut !== undefined){
        let cart:ShoppingCart = {
          itemName: cDonut.name,
          Calories: cDonut.calories,
          Price: 1
        }
        this.cartItems.push(cart);
        this.saveCart();  
        this.setTotalCost();
        this.setTotalCalories();     
      }

    });
  }
  removeitem(itemName:string){
    let item = this.cartItems.filter(c => c.itemName === itemName);
    if (item !== undefined){
      let idx: number = this.cartItems.findIndex(w => w == item[0]);
      this.cartItems.splice(idx, 1);
      this.saveCart();
      this.setTotalCost();
      this.setTotalCalories();
    }
  }

  saveCart():void {
    this.lStore.saveCartData('Cart',this.cartItems);
  }

  setTotalCalories():void {    
    const result = this.cartItems.reduce((accumulator, obj) => {
      return accumulator + obj.Calories;
    }, 0);
    this.totalCalories = result;
  }

  setTotalCost():void {    
    const result = this.cartItems.reduce((accumulator, obj) => {
      return accumulator + obj.Price;
    }, 0);
    this.totalCost = result;    
  }
  clearCart():void{
    this.lStore.clearData();
    this.cartItems = [];
    this.setTotalCost();
    this.setTotalCalories();
  }
}
