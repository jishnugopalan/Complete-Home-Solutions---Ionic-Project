import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
var not:any
@Component({
  selector: 'app-accept-notification',
  templateUrl: './accept-notification.page.html',
  styleUrls: ['./accept-notification.page.scss'],
})
export class AcceptNotificationPage implements OnInit {
  pages=[]
  constructor(private authService:AuthService,private router:Router) { }
  ionViewWillEnter(){
    this.authService.viewparticularnotification({"_id":this.authService.notificationid}).subscribe(res=>{
        console.log(res);
        not=res;
        this.pages=not
        console.log(this.pages)
        
      })
  }
  ngOnInit() {
  }

}
