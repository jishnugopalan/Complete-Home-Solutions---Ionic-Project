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
var l:any;
var d:any;
@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
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
export class ChatsPage implements OnInit {
pages = []
  count: Object;


  constructor(private authService:AuthService,private router:Router) { }

  ionViewWillEnter()
  {
    this.authService.countnotification({"userid":this.authService.uid}).subscribe(res=>{
      console.log(res)
      this.count=res
      
    })
    console.log(this.authService.uid)
    this.authService.viewchatlist({"userid":this.authService.uid,"workerid":this.authService.uid}).subscribe(res=>{
      console.log(res)
     l=res
   
     for(var i=0;i<l.length;i++)
     {
      console.log(l[i].userid)
      if(l[i].worker_status==1){
        if(this.authService.uid==l[i].userid){
          console.log("its me")
          this.authService.viewprofile({"_id":l[i].workerid}).subscribe(res=>{
            console.log(res)
             d=res
            this.pages.push(d);
            // console.log(this.details)
            //  jobs= res;
          
            //  console.log(jobs)
            //  this.joblist=jobs;
          })
  
        }
        else
        {
          if(this.authService.uid==l[i].workerid){
            console.log("its worker")
            this.authService.viewprofile({"_id":l[i].userid}).subscribe(res=>{
              console.log(res)
               d=res
              this.pages.push(d);
              // console.log(this.details)
              //  jobs= res;
            
              //  console.log(jobs)
              //  this.joblist=jobs;
            })
  
          }
  
  
          
        }
        
      }
      
      
     }
     console.log("e")
     console.log(this.pages)
      
    })

  }
  ionViewWillLeave(){
    this.pages=[]
   
  }
  public readychat(fid,name,pic)
  { 
      
    console.log(fid)
    this.authService.fid=fid
    this.authService.fname=name
    this.authService.fpic=pic
    this.router.navigateByUrl("/viewchat")
  }
  ngOnInit() {
  }

}
