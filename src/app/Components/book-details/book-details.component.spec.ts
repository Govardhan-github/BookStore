import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';

import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailsComponent ],
      imports : [HttpClientModule,RouterTestingModule,MatSnackBarModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('getData', ()=>{
   component.getData();
    expect(component.getData).toBeTruthy();
 })

  it('addToCart', () => {
    component.addToCart()
    expect(component.addToCart).toBeTruthy();
  });
  
  it('addWishlist', () => {
    component.addwishlist()
    expect(component.addwishlist).toBeTruthy();
  });

  
  it('updateCount', () => {
    component.updateCount()
    expect(component.updateCount).toBeTruthy();
  });

  
  it('addFeedBack', () => {
    component.addFeedback()
    expect(component.addFeedback).toBeTruthy();
  });

  
  it('getFeedback', () => {
    component.getFeedBack()
    expect(component.getFeedBack).toBeTruthy();
  });
});
