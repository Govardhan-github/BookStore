import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/bookService/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  bookid: any;
  cartbooks: any;
  token: any;
  getcartbook:any;
  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.getcartItems();
  }

  getcartItems() {
    this.bookservice.getCartItemsService().subscribe((response: any) => {
      console.log("the get", response);
      this.cartbooks = response.result;
      console.log("returning data", this.cartbooks);
    })
  }


}
