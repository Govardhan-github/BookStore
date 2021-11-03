import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  booksdata: any;
  bookArray: any;
  bookid: any;


  constructor(private bookservice: BookService, private router: Router, private snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    this.bookid = localStorage.getItem('bookId')
    this.getData();

  }

  getData() {

    this.bookservice.getBooksService().subscribe((response: any) => {
      response.result.forEach((element: any) => {
        if (element._id == this.bookid) {
          this.booksdata = element;
        }
      });
      console.log("thebbfsf ", this.booksdata);
    })

  }
  addToCart() {
    let data = {
      product_id: this.bookid
    }
    console.log("the id ", data);
    this.bookservice.addToCart(data).subscribe((response: any) => {
      console.log("added to cart");
      this.snackBar.open('Book Added To Cart', 'close')._dismissAfter(2000);
    })
  }

  addwishlist(){
    let data={
      product_id : this.bookid
    }
    this.bookservice.addToWishlist(data).subscribe((response:any)=>{
      console.log(response);
      this.snackBar.open('Book Added To Wishlist' , 'close')._dismissAfter(2000);
      
    })
  }
}

