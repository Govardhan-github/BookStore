import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetBooksComponent } from './Components/get-books/get-books.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginSignUpComponent } from './Components/login-sign-up/login-sign-up.component';
import { LoginComponent } from './Components/login/login.component';
import { MainPageComponent } from './Components/main-page/main-page.component';

const routes: Routes = [
{path:'mainpage',component:MainPageComponent},

{path:'login',component:LoginComponent},
{path:'home',component:LoginSignUpComponent},
{ path:'getbooks' , component:GetBooksComponent},
{path:'dashboard',component:HeaderComponent,
  children:[
    { path:'getbooks' , component:GetBooksComponent},
    { path:'Deatails' , component:GetBooksComponent},


  ]
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
