import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  displayButton=true;
  displayaddresss=true;
  displayCheckout=true;
  customerDetailsForm!:FormGroup;
  constructor(private bookservice: BookService,private router :  Router , private formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.getcartItems();

    this.customerDetailsForm = this.formbuilder.group({
      fullName : ['',Validators.required],
      phoneNumber : [ '' , [Validators.required]],
      fullAddress  : ['', [Validators.required,Validators.minLength(6)]],
      city  : ['',[Validators.required]],
      state : ['',Validators.required],
      addressType:['',Validators.required]

    })

  }
  showadderss(){
    this.displayButton=false;
    this.displayaddresss=false;

  }
  getcartItems() {
    this.bookservice.getCartItemsService().subscribe((response: any) => {
      console.log("the get", response);
      this.cartbooks = response.result;
      console.log("returning data", this.cartbooks);
    })
  }

  remove(data:any){
    
    this.bookservice.removeFromCartServices(data).subscribe((response:any)=>{
      console.log("deleted", response);
      this.router.navigateByUrl('/').then(() => {
        this.router.navigate(['/home/cart'])
      });
    })
  }

  submit(){
    console.log(this.customerDetailsForm.value);
    this.displayCheckout=false;
    let reqData={
      fullName  : this.customerDetailsForm.value.fullName,
      phonenumber : this.customerDetailsForm.value.phoneNumber,
      fullAddress  : this.customerDetailsForm.value.fullAddress,
      city : this.customerDetailsForm.value.city,
      state : this.customerDetailsForm.value.state,
      addressType : this.customerDetailsForm.value.addressType,
      service : "advance"
    }
    this.bookservice.customerDetailsService(reqData).subscribe((response:any)=>{
      console.log("the api" , response);
      
    })
    
  }

}
