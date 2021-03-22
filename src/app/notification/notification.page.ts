import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
var not:any
var notid:any
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
  animations: [
    trigger('fadein', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [
        style({ opacity: 0 }),
        animate('900ms ease-out', style({ opacity: 1 }))
      ])
    ]),
    trigger('slidelefttitle', [
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(150%)' }),
        animate('900ms 300ms ease-out', style({ transform: 'translateX(0%)', opacity: 1 }, ))
      ])
    ])
  ]

})
export class NotificationPage implements OnInit {

 pages=[];
  count: Object;

  constructor(private authService:AuthService,private router:Router) { }

ionViewWillEnter(){
  this.authService.countnotification({"userid":this.authService.uid}).subscribe(res=>{
    console.log(res)
    this.count=res
    
  })

  this.authService.updatenotification({"userid":this.authService.uid}).subscribe(res=>{
    console.log(res)
  })
    console.log("ionViewDidEnter")
    this.authService.viewnotification({"userid":this.authService.uid}).subscribe(res=>{
      console.log(res)
     
    
      not=res

      
      console.log(this.authService.notificationid)
      this.pages=not;
      console.log(this.pages)
      
      

    })
    

    
  }
  public viewnotification(wid,notificationtype,nid){
    console.log(notificationtype)
    console.log(wid)
    console.log(nid)
    this.authService.bookingid=wid
    this.authService.notificationid=nid;
    // if(notificationtype=="admin"){
    //   console.log("admin")
    //   this.authService.viewparticularnotification({"_id":this.authService.notificationid}).subscribe(res=>{
    //     console.log(res);
        
    //   })
    // }

    if(notificationtype=="booked"){

      console.log("from");
      this.router.navigateByUrl("/user-notification")
      // this.authService.viewparticularnotification({"_id":this.authService.notificationid}).subscribe(res=>{
      //   console.log(res);
        
      // })
    }
    else{
      console.log("accepted")
      this.router.navigateByUrl("/accept-notification")

    }

  }
  ngOnInit() {
  }

}
