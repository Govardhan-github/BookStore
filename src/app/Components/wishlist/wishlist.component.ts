import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/Services/bookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishList:any;
  bookid: any;
  token: any;
  constructor(private bookService : BookService, private dataservice : DataService, private router :  Router) { }

  ngOnInit(): void {
    this.dataservice.recevieData.subscribe((response:any)=>{
        this.getWishList();})
    // this.token = localStorage.getItem('token')
    // this.getWishList();
    // console.log(this.activatedRoute.wishList);
  }

  getWishList(){
    this.bookService.getWishListService().subscribe((response:any)=>{
      console.log("the response",response);
      this.wishList=response.result;
      console.log("the return data" , this.wishList);
    })
  }

  Delete(data:any){
    this.bookService.DeleteFromWishList(data).subscribe((response:any)=>{
      console.log("the delete" , response);
      this.router.navigateByUrl('/').then(() => {
         this.router.navigate(['/home/wishlist'])
       });
      
    })
  }

}
