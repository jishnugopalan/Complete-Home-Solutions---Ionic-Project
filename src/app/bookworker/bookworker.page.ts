import { AuthService } from './../services/auth.service';
import { Component,AfterViewInit, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Subscription } from 'rxjs';
var note:any;
declare var google;
var loclat:any;
var loclong:any;
var mapElement:any
var a=0
var n:any
@Component({
  selector: 'app-bookworker',
  templateUrl: './bookworker.page.html',
  styleUrls: ['./bookworker.page.scss'],
})
export class BookworkerPage implements OnInit,AfterViewInit {
  
  // ngAfterViewInit(): void {
  //   throw new Error("Method not implemented.");
  // }
  @ViewChild('mapElement',{ static: true }) mapNativeElement: ElementRef;
  // ngAfterViewInit(): void {
  //   throw new Error("Method not implemented.");
   
    
  // }
  
  map: any;
  currentMapTrack = null;
 
  isTracking = false;
  trackedRoute = [];
  previousTracks = [];
  review=[]
 
  positionSubscription: Subscription;
  workersdetails=[];
  note=false;
  latitude=''
  longitude=''
  
  
  mapElement:any;
  s=false;
  constructor(private authService:AuthService,private router:Router,public alertController: AlertController,private geolocation: Geolocation) { }
  

  ionViewWillEnter(){
 console.log(this.authService.myworkers)
 this.workersdetails=this.authService.myworkers;
 console.log(this.workersdetails[0].available_status)
 var workerid=this.authService.workerid;
 console.log(workerid)
 this.authService.viewlocation({"userid":workerid}).subscribe((res:any)=>{
  console.log(res)
  loclat=res.latitude
  loclong=res.longitude
  console.log(loclat)
  console.log(loclong)

  this.latitude = res.latitude;
      this.longitude = res.longitude;
     
})



this.authService.viewreview({"workerid":this.authService.workerid}).subscribe((res:any)=>{
  console.log(res)
  n=res
this.review=n
  // for(var i=0;i<n.lenth;i++){
  //   console.log("Enter")
  //   this.authService.viewprofile({"_id":n[i].userid}).subscribe(res=>{
  //     console.log(res)
  //   })
  // }
 
})

}






async bookworker(workerid) {
  console.log(workerid)

  
  var userid=this.authService.uid;
  //   console.log(userid)
  if(workerid==userid){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Sorry',
      message: 'You cannot book this person',
      buttons: ['OK']
    });
    await alert.present();
  }
  else{
    this.authService.bookworker({"userid":this.authService.uid,"workerid":workerid,"worker_status":'0'}).subscribe(async (res:any)=>{
            console.log(res)
            var bookingid=res._id;
            console.log(bookingid)
            this.s=true
            console.log(this.s)
            if(this.s==true){

              const alert = await this.alertController.create({
                header: 'Alert',
                subHeader: 'Requested Successfully',
                message: 'You are successfully requested for the service',
                buttons: ['OK']
              });
              await alert.present();
              var Dt = Date.now();
              console.log(Dt);
              this.authService.notification({"userid":workerid,"content":'Requested for your service',"from":this.authService.name,"datetime":Dt,"bookingid":bookingid,"notificationtype":"booked"}).subscribe(res=>{
                console.log(res)
              })
              this.s=false
            }
          })
         
          
          
          

  }
  

  
}
// public bookworker(workerid){

//   console.log(workerid)
//   var userid=this.authService.uid;
//   console.log(userid)
 
    
    

  
//   else{
//     this.authService.bookworker({"userid":this.authService.uid,"workerid":workerid,"worker_status":'0'}).subscribe(res=>{
//       console.log(res)
//     })
//     this.authService.notification({"userid":workerid,"content":'Requested for your service',"from":this.authService.name}).subscribe(res=>{
//       console.log(res)
//     })
//   }
//   //console.log(workerid)

// }
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
    // this.geolocation.getCurrentPosition().then(pos => {
    //   let latLng = new google.maps.LatLng(loclat,loclong);
    //   this.mapElement.setCenter(latLng);
    //   this.mapElement.setZoom(16);
    // }).catch((error) => {
    //   console.log('Error getting location', error);
    // });
  }
 // this.map = new google.maps.Map(this.mapElement.nativeElement);
 
      


}
