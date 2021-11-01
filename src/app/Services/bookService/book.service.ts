import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
 
  token : any;

  constructor( private http : HttpService) { }

  getBooksService(){
    this.token = localStorage.getItem('token')
    let httpAuthOptions = {
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization': this.token
      })
    };
    console.log(httpAuthOptions); 
    
    return this.http.Get('/bookstore_user/get/book',false,httpAuthOptions);

  }

}
