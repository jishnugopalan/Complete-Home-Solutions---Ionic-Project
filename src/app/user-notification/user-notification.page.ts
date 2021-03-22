import { ToastController } from '@ionic/angular';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Subscription } from 'rxjs';
var not:any
var uid:any
declare var google;
var loclat:any;
var loclong:any;
var mapElement:any
var a=0
var r:any
@Component({
  selector: 'app-user-notification',
  templateUrl: './user-notification.page.html',
  styleUrls: ['./user-notification.page.scss'],
})
export class UserNotificationPage implements OnInit,AfterViewInit {
  @ViewChild('mapElement',{ static: true }) mapNativeElement: ElementRef;
pages=[]
user=[]
review=[]
userid=''

map: any;
  currentMapTrack = null;
 
  isTracking = false;
  trackedRoute = [];
  previousTracks = [];
  a=true
 
  positionSubscription: Subscription;
  workersdetails=[];
  note=false;
  latitude: any;
  longitude: any;
  
  mapElement:any;
  s=false;
  constructor(private authService:AuthService,private router:Router,private geolocation: Geolocation,public toastController:ToastController) { }
  
  async ionViewWillEnter(){
    this.authService.viewparticularnotification({"_id":this.authService.notificationid}).subscribe((res:any)=>{
        console.log(res);
        not=res;
        this.pages=not
        console.log(this.pages)
        var bid=this.pages[0].bookingid
        console.log(bid)
          this.authService.viewbooking({"_id":bid}).subscribe((res:any)=>{
            console.log(res)
            uid=res.userid
            this.authService.viewprofile({"_id":uid}).subscribe((res:any)=>{
              console.log(res)
              this.user=[res]
              this.authService.viewlocation({"userid":uid}).subscribe((res:any)=>{
  console.log(res)
  loclat=res.latitude
  loclong=res.longitude
  console.log(loclat)
  console.log(loclong)

  this.latitude = res.latitude;
      this.longitude = res.longitude;
      this.authService.viewuserreview({"userid":uid}).subscribe((res:any)=>{
        console.log(res)
        r=res
        this.review=r
      })


            })

          })
        
      })
  })
  // if(uid==null){
  // this.a=false
  // const toast = await this.toastController.create({
  //   message: 'Notification cannot found...',
  //   duration: 2000
  // });
  // toast.present();
  // }
  // this.a=true
}

  public accept(bid){
    console.log(bid)
    this.authService.acceptworker({"_id":bid}).subscribe((res:any)=>{
      console.log(res)
      this.authService.viewbooking({"_id":bid}).subscribe((res:any)=>{
        console.log(res)
        var userid=res.userid;
        console.log(userid)
        var Dt = Date.now();
        this.authService.notification({"userid":userid,"content":'Accepted your request,now you can chat with your worker',"from":this.authService.name,"datetime":Dt,"bookingid":bid,"notificationtype":"accepted"}).subscribe(async res=>{
          console.log(res)
          this.a=false
          const toast = await this.toastController.create({
            message: 'Request accepted successfully',
            duration: 2000
          });
          toast.present();
        })
      })
    })
    


  }
  public reject(bid){
    var Dt=Date.now()
    this.authService.rejectbooking({"bookingid":bid}).subscribe((res:any)=>{
      console.log(res)
      this.authService.notification({"userid":uid,"content":'Rejected your request for booking',"from":this.authService.name,"datetime":Dt,"bookingid":bid,"notificationtype":"rejecetd"}).subscribe(async res=>{
          console.log(res)
          this.authService.deletenotififcation({"bookingid":bid}).subscribe((res:any)=>{
            console.log(res)
          })
          const toast = await this.toastController.create({
            message: 'Request rejeceted successfully',
            duration: 2000
          });
          toast.present();
          
        })

    })
  }
 
  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = loclat;
      this.longitude = loclong;
      console.log("err")
      console.log(this.latitude)
      console.log(this.longitude)
      var l=parseFloat(loclat)
      var lo=parseFloat(loclong);
      const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        center: {lat: l, lng: lo},
        zoom: 6
      });
      const infoWindow = new google.maps.InfoWindow;
      const pos = {
        lat: parseFloat(loclat),
        lng: parseFloat(loclong)
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  
  }
}
