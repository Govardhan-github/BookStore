import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { FooterComponent } from './Components/Footer/footer/footer.component';
import { GetBooksComponent } from './Components/get-books/get-books.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginSignUpComponent } from './Components/login-sign-up/login-sign-up.component';
import { LoginComponent } from './Components/login/login.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';

const routes: Routes = [
{path:'mainpage',component:MainPageComponent},

{path:'login',component:LoginSignUpComponent},
{ path:'getbooks' , component:GetBooksComponent},
{path:'footer' , component:FooterComponent},
{path:'cart' , component:CartComponent},
{path:'wishlist' , component:WishlistComponent},



{ path:'details' , component:BookDetailsComponent
},

{path:'home',component:HeaderComponent,
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
