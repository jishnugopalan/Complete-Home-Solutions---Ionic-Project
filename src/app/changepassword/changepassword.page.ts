import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {
pass=''
newpass=''
repass=''
err=''
a=false
  constructor(private authService:AuthService,private router:Router,public alertController: AlertController) { }

  sendpass(){
  console.log(this.pass)
  var p=this.pass
  if(p!=''){
    this.authService.checkpass({"uid":this.authService.uid,"pass":p}).subscribe(res=>{
   
      console.log(res)
      this.a=true;
    })
  }

}
async updatepass(){
  console.log(this.newpass)
  var p=this.newpass
  if(this.newpass!=this.repass)
  {
    this.err="Please enter the correct password"
  }
  else if(this.newpass.length<8){
    this.err="The password length should be greater than 8"
  }
  else{
    if(p.length>8){
      this.authService.updatepass({"uid":this.authService.uid,"pass":p}).subscribe(res=>{
        console.log(res)
      })
      const alert = await this.alertController.create({
        header: 'Password Changed successfully',
        subHeader: '',
        message: 'Your password changed successfully',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigateByUrl("/settings")
    }
    

  }
  
    
   
  

}

  ngOnInit() {
  }

}
