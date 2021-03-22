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
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToastController, LoadingController } from '@ionic/angular';
var lat: number;
var longt: number;
var c:any
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.page.html',
  styleUrls: ['./mainpage.page.scss'],
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
export class MainpagePage implements OnInit {

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
  lat: number;
  longt: number;
  search=''
  s=[]
  v=false
  first=false
  public status:boolean 
  count
  available_status=''
  constructor(private authService:AuthService,private router:Router,private geolocation: Geolocation,public toastController: ToastController,public loadingController:LoadingController) { }
  async ionViewWillUnload(){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
  
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
   
  }
  public change(){
    if(this.status==true)
    {
      this.authService.availablestatus({"userid":this.authService.uid,"s":"Available"}).subscribe(res=>{
        console.log(res)
       
      })
    }
    if(this.status==false)
    {
      this.authService.availablestatus({"userid":this.authService.uid,"s":"Not available"}).subscribe(res=>{
        console.log(res)
      })
    }
  }
  
  
  
  public searchcategory(){
    var a=this.search
    console.log(a.toLowerCase())
    
    this.authService.viewmyworkers({"category":a.toLowerCase()}).subscribe(async res=>{
      console.log(res)
      
     
      c=res
      if(c.length!=0)
      {
        this.s=c
        this.v=true
      }
      else
      {
        const toast = await this.toastController.create({
          message: 'No workers found.',
          duration: 2000
        });
        toast.present();
      }
      
    })
    this.search=''
    
  }
  viewserchedworker(id){
    this.authService.workerid=id;
    this.authService.viewmyworkersdetails({"_id":id}).subscribe(res => {
      console.log(res)
      this.authService.myworkers=res;
      this.router.navigateByUrl("/bookworker");
  
    })
  }
  ionViewWillLeave(){
    this.v=false
   
  }
  ionViewWillEnter(){
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   console.log( resp.coords.latitude)
    //   console.log(resp.coords.longitude)
    //   // resp.coords.latitude
    //   // resp.coords.longitude
    //  }).catch((error) => {
    //    console.log('Error getting location', error);
    //  });
    this.authService.countnotification({"userid":this.authService.uid}).subscribe(res=>{
      console.log(res)
      this.count=res
      
    })
    // this.authService.countnotification({"userid":this.authService.uid}).subscribe(res=>{
    //   console.log(res)
    // })

     this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = (resp.coords.latitude);
      this.longt =(resp.coords.longitude);
      lat=this.lat
      longt=this.longt
      console.log(lat)
      console.log(longt)
      this.authService.latitude=lat;
      this.authService.longitude=longt;

     }).catch((error) => {
       console.log('Error getting location', error);
     });
    this.authService.addlocation({"userid":this.authService.uid,"latitude":this.authService.latitude,"longitude":this.authService.longitude}).subscribe(res=>{
      console.log(res)
    })
    this.authService.viewifworker({"userid":this.authService.uid}).subscribe((res:any)=>{
      this.first=true
      console.log(res)
      var a=res
      var b=res.available_status
      console.log(b)
      if(b=='Not available'){
      this.status=false
      }
      if(b=='Available'){
        this.status=true
      }
    
    })

  }
  public viewmyworker(w)
  {
    console.log(w)
    this.authService.viewmyworkers({"category":w}).subscribe(res=>{
      console.log(res)
      this.authService.myworkers=res;
      console.log(this.authService.myworkers)
      this.router.navigateByUrl("/myworkers");
      
    });

  }

  ngOnInit() {
  }

}
