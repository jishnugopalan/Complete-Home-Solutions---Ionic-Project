import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
var a: boolean
@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  // router: any;
  
  activatedRouter: any;
  passwordForm: any;
  first=true
  second=false
  pass1=''
  pass2=''
  constructor(private FormBuilder: FormBuilder,private authService:AuthService,private router:Router,public toastController:ToastController) {
    this.passwordForm = this.FormBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      repassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get otp(){
    return this.otpForm.get('otp');
  }
  get password(){
    return this.passwordForm.get('password');
  }
  get repassword(){
    return this.passwordForm.get('repassword');
  }
  public errorMessages1 = {
    password: [
      { type: 'required', message: 'password is required' },
      { type: 'minlength', messages: 'password cannot be longer than 8 charetors' }
    ],
    repassword: [
      { type: 'required', message: 'password is required' },
      { type: 'minlength', messages: 'password cannot be longer than 8 charetors' }
    ],
    
  };
  
 
 

  public errorMessages = {
    otp: [
      { type: 'required', message: 'otp is required' },
      { type: 'maxlength', messages: 'Name cannot be longer than 4 charetors' }
    ],
    
  };
  otpForm = this.FormBuilder.group({
    otp: ['', [Validators.required, Validators.maxLength(4),Validators.minLength(4)]],
   
   // otp: ['', [Validators.required, Validators.minLength(4)]]
    
  });

  
  public submit(){
    console.log(this.otpForm.value);
    var data=this.otpForm.value
    data=Object.assign(data,{"phone":this.authService.phone})
    this.authService.checkotp(data).subscribe(res=>{
      //a=false;
      console.log(res)
      this.first=false
      this.second=true
      
      // this.router.navigateByUrl("/password");
     
    })
     

  }
  // public resend(){
  //   console.log(this.otpForm.value);
  //   var data=this.otpForm.value
  //   data=Object.assign(data,{"phone":this.authService.phone})
  //   this.authService.checkotp(data).subscribe(res=>{
  //     a=false;
  //     console.log(res)
      
  //     // this.router.navigateByUrl("/password");
       
  //   })
  // }
  public async submitpassword(){
   console.log(this.passwordForm.get('password')) 
   if(this.pass1==this.pass2){
    console.log(this.passwordForm.value);
    
    var data=this.passwordForm.value;
    
      
     
      data=Object.assign(data,{"uid":this.authService.uid})
      this.authService.logid=this.authService.uid;
      console.log(this.authService.logid)
      console.log(data)
      //this.authService.register(this.passwordForm.value).subscribe(res=>{
        console.log("err")
        this.authService.password(data).subscribe(res=>{
          console.log(res)
          this.router.navigateByUrl("/login");
    })
    // var data=this.otpForm.value
    // data=Object.assign(data,{"phone":this.authService.phone})
    // this.authService.checkotp(data).subscribe(res=>{
    //   console.log(res)
      // this.router.navigateByUrl("/password");

   }
   else{
    const toast = await this.toastController.create({
      message: 'Please enter the correct password',
      duration: 2000
    });
    toast.present();
   }
   
       
    }
  
// movetologin(){
//   this.router.navigate(['/login'], { relativeTo: this.activatedRouter });

// }
  ngOnInit() {
  }

}
