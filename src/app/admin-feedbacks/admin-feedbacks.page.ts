import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
var f:any
@Component({
  selector: 'app-admin-feedbacks',
  templateUrl: './admin-feedbacks.page.html',
  styleUrls: ['./admin-feedbacks.page.scss'],
})
export class AdminFeedbacksPage implements OnInit {
feeds=[]
  constructor(private authService:AuthService) { }
  ionViewWillEnter(){
   console.log("entered")
    this.authService.viewfeedback('').subscribe(res=>{
      console.log(res)
      f=res
      this.feeds=f
    })
  }

  ngOnInit() {
  }

}
