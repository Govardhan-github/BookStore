import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/bookService/book.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishList:any;
  constructor(private bookService : BookService) { }

  ngOnInit(): void {
    this.getWishList();
  }

  getWishList(){
    this.bookService.getWishListService().subscribe((response:any)=>{
      console.log("the response",response);
      this.wishList=response.result;
      console.log("the return data" , this.wishList);
      
      
    })
  }

}
