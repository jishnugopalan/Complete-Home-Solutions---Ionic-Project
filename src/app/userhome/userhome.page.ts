import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from '../services/auth.service';
//var count:any
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.page.html',
  styleUrls: ['./userhome.page.scss'],
})
export class UserhomePage implements OnInit {
 pages = [
  {
    title: 'Home',
    url: '/userhome/userhome/mainpage',
    icon: 'home'
  },
   {
     title: 'Notifiation',
     url: '/userhome/userhome/notification',
     icon: 'notifications-outline',
     
   },
   {
    title: 'Messages',
    url: '/userhome/userhome/chats',
    icon: 'chatboxes',
   
  },
  {
    title: 'Job Zone',
    url: '/userhome/userhome/worker',
    icon: 'briefcase'
  },
  {
    title: 'My bookings',
    url: '/userhome/userhome/mybookings',
    icon: 'book'
  },
   {
    title: 'Settings',
    url: '/userhome/userhome/settings',
    icon: 'settings'
  },
  {
    title: 'About',
    url: '/userhome/userhome/about',
    icon: 'alert'
  },


 ];

 selectedPath = '';
  
count
  constructor(private router: Router,private authService:AuthService) { 
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;

    });
  }
ionViewWillEnter(){
  this.authService.countnotification({"userid":this.authService.uid}).subscribe(res=>{
    console.log(res)
    this.count=res
    //console.log(count)
    
  })
 
}
  ngOnInit() {
  }

}
