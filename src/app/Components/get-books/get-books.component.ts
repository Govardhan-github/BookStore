import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/bookService/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';

@Component({
  selector: 'app-get-books',
  templateUrl: './get-books.component.html',
  styleUrls: ['./get-books.component.scss']
})
export class GetBooksComponent implements OnInit {
  booksArray:any;
  token: any;
  data: any;
  id: any;

  constructor(private bookServices : BookService,private dataservice : DataService) { }
  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.dataservice.recevieData.subscribe((response:any)=>{
      
      this.getBooks();

      
    })

  }
  getBooks(){
    this.bookServices.getBooksService().subscribe((response: any) => { 
        this.booksArray=response.result;
        console.log("getBooksArray",this.booksArray);

      })
  }

  quickView(book: any) {
    console.log(book._id);
    localStorage.setItem('bookId', book._id);
  }
}
