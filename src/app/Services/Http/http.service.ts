import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url= environment.BaseUrl;
  token : any;

  constructor(private http  :HttpClient) { }


  Post(url:any,data:any,token:boolean=false,headers:any){
   return this.http.post(this.url + url , data,token && headers)
  }

  Get(url: string='', headers:any=null){
    return this.http.get(this.url+url,  headers);
   }

   Delete(url:any,headers:any){
     return this.http.delete(this.url+url,headers)
   }

   Put(url:any,data:any,headers:any){
     return this.http.put(this.url + url,data,headers)
   }


}
