import { Injectable } from '@angular/core';
import { ShoppingCart } from '../Interfaces/shopping-cart';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }
  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {
    return localStorage.getItem(key)
  }
  public saveCartData(key: string, cart: ShoppingCart[]) {
    let value = JSON.stringify(cart);

    localStorage.setItem(key, value);
  }
  public getCartData(key: string):ShoppingCart[] {
    
    let value = localStorage.getItem(key);
    if (value !== null){
      let cart:ShoppingCart[] = JSON.parse(value);
      return cart;
    }
    let empty:ShoppingCart[] = [];
    return empty;

  }
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }

}
