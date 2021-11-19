import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginSignUpComponent } from './login-sign-up.component';

describe('LoginSignUpComponent', () => {
  let component: LoginSignUpComponent;
  let fixture: ComponentFixture<LoginSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSignUpComponent ],
      imports : [HttpClientModule, MatSnackBarModule,BrowserAnimationsModule,MatFormFieldModule,RouterTestingModule, ReactiveFormsModule,MatInputModule,FormsModule]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Login submit test', () => {
    component.onLogin();
    expect(component.onLogin).toBeTruthy();

  })
 
  it('ngOnint email and password Invalid test',() => {

    component.loginForm.controls['email'].setValue('abc1@gmail')
    component.loginForm.controls['password'].setValue('abc456')
    expect(component.loginForm.invalid).toBeFalsy();
  })

  it('ngOnint email and password valid test',() => {

    component.loginForm.controls['email'].setValue('abc1@gmail.com')
    component.loginForm.controls['password'].setValue('abc@456')
    expect(component.loginForm.valid).toBeTruthy();
  })

  
  
 
});