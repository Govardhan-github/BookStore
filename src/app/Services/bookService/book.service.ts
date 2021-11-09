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
   

    return this.http.Post(`/bookstore_user/add_cart_item/${data.product_id}`, data, true, httpAuthOptions);
  }

  getCartItemsService() {
    this.token = localStorage.getItem('token')
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

  getWishListService(){
    this.token = localStorage.getItem('token')
    let options={
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        'x-access-token' : this.token
      })
    }
    return this.http.Get('/bookstore_user/get_wishlist_items' , options)
  }

  removeFromCartServices(data:any){
    this.token = localStorage.getItem('token')
    let options={
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        'x-access-token' : this.token
      })
    }
    return this.http.Delete(`/bookstore_user/remove_cart_item/${data._id}`,options)
  }


  DeleteFromWishList(data:any){
    this.token = localStorage.getItem('token')
    let options={
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        'x-access-token' : this.token
      })
    }
    return this.http.Delete(`/bookstore_user/remove_wishlist_item/${data.product_id._id
    }`,options)
  }

  customerDetailsService(data:any){
    this.token = localStorage.getItem('token')
    let options={
      headers : new HttpHeaders({
        'Content-type' : 'application/json',
        'x-access-token' : this.token
      })
    }
    return this.http.Put('/bookstore_user/edit_user',data,options)

  }

}




