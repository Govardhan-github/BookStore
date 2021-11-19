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
  booksArray: any;
  bookid: any;
  displayCount=true;
  value : any
  comment : any
  product_id:any
   orderCount = 0;



  constructor(private bookservice: BookService, private router: Router, private snackBar: MatSnackBar) {
  }


  ngOnInit(): void {
    this.bookid = localStorage.getItem('bookId')
    this.getData();
   this.getFeedBack();
    

  }

  submit(){
    console.log('v',this.value);
    console.log('c',this.comment);
    console.log(this.booksdata._id);
    
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
    this.displayCount=false;
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
  countincrease() {
    this.orderCount += 1
    this.updateCount()
  }

  countdecrease() {
    if (this.orderCount > 0) {
      this.orderCount -= 1;
      this.updateCount()
    }
    else {
      return;
    }
  }
  updateCount() {
    let payload = {
      "quantityToBuy": this.orderCount,
      product_id : this.bookid

    }
    this.bookservice.updateitemcount( payload).subscribe((response) => {
       console.log(response) },
  
      (error) => console.log(error)
    )
  }

  addFeedback(){
    let data={
      rating:this.value,
      comment:this.comment,
      product_id : this.bookid

    }
    this.bookservice.addFeedbackService(data).subscribe((response:any)=>{
      console.log("the response" ,response);
      this.snackBar.open("Feedback Added Successfully",'close')._dismissAfter(2000)
      
    })

  }

  getFeedBack(){
    let data={
      product_id : this.bookid
    }
    this.bookservice.getFeedBackService(data).subscribe((response:any)=>{
      console.log("the response" ,response);
      this.booksArray = response.result;
      
    });
  }
}

