import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
var uid:any
var e:any
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})

export class ForgotpasswordPage implements OnInit {
email=''
phone=''
otp=''
pass=''
first=true
second=false
third=false
fourth=false

constructor(private authService:AuthService,private router:Router,public alertController: AlertController) { }
public sendemail(){
  e=this.email
this.authService.findemail({"email":this.email}).subscribe((res:any)=>{
  console.log(res)
  var a=res
  uid=a._id
  this.first=false
  this.second=true
})
}
public sendphone(){
  this.authService.findphone({"phone":this.phone,"email":e}).subscribe((res:any)=>{
    console.log(res)
    var b=res
    this.second=false
    this.third=true

  })

}
public sendotp(){
  this.authService.checkotp({"otp":this.otp,"phone":this.phone}).subscribe((res:any)=>{
    console.log(res)
    this.third=false
    this.fourth=true
  })

}
public sendpass(){
  this.authService.updatepass({"uid":uid,"pass":this.pass}).subscribe(async (res:any)=>{
    console.log(res)
    const alert = await this.alertController.create({
      header: 'Password Changed successfully',
      subHeader: '',
      message: 'Now you can login with new password',
      buttons: ['OK']
    });
    await alert.present();
    this.router.navigateByUrl("/login")
  })

}
  ngOnInit() {
  }

}
