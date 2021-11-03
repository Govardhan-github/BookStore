import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  token: any;

  constructor(private http: HttpService) { }

  getBooksService() {
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    };
    console.log(httpAuthOptions);

    return this.http.Get('/bookstore_user/get/book', httpAuthOptions);
  }

  addToCart(data: any) {
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    };
    console.log(httpAuthOptions);
    console.log("the id", data);

    return this.http.Post(`/bookstore_user/add_cart_item/${data.product_id}`, data, true, httpAuthOptions);
  }

  getCartItemsService() {
    let httpAuthOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-access-token': this.token
      })
    };
    return this.http.Get('/bookstore_user/get_cart_items', httpAuthOptions);
  }


  addToWishlist(data:any){
    this.token=localStorage.getItem('token')
    let options = {
      headers : new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token' : this.token
      })
    };
    return this.http.Post(`/bookstore_user/add_wish_list/${data.product_id}`, data, true, options)

  }


}




