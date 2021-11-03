import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { UserService } from 'src/app/Services/User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-sign-up',
  templateUrl: './login-sign-up.component.html',
  styleUrls: ['./login-sign-up.component.scss']
})
export class LoginSignUpComponent implements OnInit {
  loginForm! :FormGroup;
  loginSubmitted = false;
  registerForm! :FormGroup
  registerSubmitted = false;
  hide: boolean = true;



  
  constructor( private formbuilder: FormBuilder , private user : UserService,private router : Router) { }

  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      email : ['',[Validators.required,Validators.email]],
      password :['', [Validators.required, Validators.minLength(6)]],
     
    })

    this.registerForm = this.formbuilder.group({
      fullName:['',Validators.required],
      email:['',Validators.required],
      password  :['',Validators.required, ],
      phone : ['',Validators.required ],
      service : 'advance'
    })
  }
  get f() { return this.loginForm.controls; }
  get r() { return this.registerForm.controls; }


  showPassword() {
    this.hide = !this.hide;
  }
 
  onLogin(){
    this.loginSubmitted=true;
    alert('successs ' + JSON.stringify(this.loginForm.value, null, 4))
    console.log(this.loginForm.value);

    let reqdata={
      email: this.loginForm.value.email,
      password : this.loginForm.value.password
    }

    this.user.loginServices(reqdata).subscribe((response:any)=>{
      console.log("the response",response);
      localStorage.setItem('token',response.result.accessToken);
      this.router.navigateByUrl('/home/getbooks')


    })

  }


  onregister(){
    this.registerSubmitted = true;
     console.log(this.registerForm.value);

    let reqpayload={
      fullName:this.registerForm.value.fullName,
      email :  this.registerForm.value.email,
      password : this.registerForm.value.password,
      phone  : this.registerForm.value.phone,
    }

    this.user.registerServices(reqpayload).subscribe((response:any)=>{
      console.log("the rsposne" , response);
      
    })
  }

}

