import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { LoginComponent } from './Components/login/login.component';
import { FlexModule } from '@angular/flex-layout/flex';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MatIconModule} from '@angular/material/icon';
import{ReactiveFormsModule} from  '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginSignUpComponent } from './Components/login-sign-up/login-sign-up.component';
import { HeaderComponent } from './Components/header/header.component';
import { GetBooksComponent } from './Components/get-books/get-books.component';
import { BookDetailsComponent } from './Components/book-details/book-details.component';
import { FooterComponent } from './Components/Footer/footer/footer.component';
import { CartComponent } from './Components/cart/cart.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import {MatRadioModule} from '@angular/material/radio';
import { PlaceOrderComponent } from './Components/place-order/place-order.component';







@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    
    LoginSignUpComponent,
         HeaderComponent,
         GetBooksComponent,
         BookDetailsComponent,
         FooterComponent,
         CartComponent,
         WishlistComponent,
         PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FlexModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatCheckboxModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    MatTabsModule,
    MatSnackBarModule,MatRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
