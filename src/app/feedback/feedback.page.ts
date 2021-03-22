import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
feedbacks=''
  constructor(private authService:AuthService,private router:Router,public toastController:ToastController) { }
  async sendfeedbacks(){
  var D=Date.now()
  if(this.feedbacks!=''){

    this.authService.addfeedback({"userid":this.authService.uid,"feedback":this.feedbacks,"datetime":D}).subscribe(async res=>{
      console.log(res)
      const toast = await this.toastController.create({
        message: 'Feedback submitted successfully',
        duration: 2000
      });
      toast.present();
    })
  }
  else{
    const toast = await this.toastController.create({
      message: 'Please input something',
      duration: 2000
    });
    toast.present();
  }
  
  
}
  ngOnInit() {
  }

}
