import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/bookService/book.service';
import { JsonpClientBackend } from '@angular/common/http';

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

  constructor(private bookServices : BookService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.getBooks();

  }
  getBooks(){

    this.bookServices.getBooksService().subscribe(
      (response: any) => { 
        
        console.log(response.result)
        
        this.booksArray=response['result'];

        console.log("getBooksArray",this.booksArray);

      })
  }
}
