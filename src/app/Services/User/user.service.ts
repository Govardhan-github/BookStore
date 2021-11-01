import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
token : any
  constructor(private httpService  : HttpService) { }

  loginServices(reqdata:any){
    let options ={
      Headers : new HttpHeaders({
        'Content-Type':'application/json',
      })
    }
   
    console.log("the req data" ,reqdata);
    
    
    return this.httpService.Post('/bookstore_user/login',reqdata,true,options)
  }


  registerServices(reqdata:any){
    let options ={
      Headers : new HttpHeaders({
        'Content-Type':'application/json',
      })
    }
    console.log("the options",options);
   
    
    return this.httpService.Post('/bookstore_user/registration',reqdata,true,options)
  }

  
}
