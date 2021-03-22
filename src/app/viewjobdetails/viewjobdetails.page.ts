import { AuthService } from './../services/auth.service';
import { Component,AfterViewInit, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { async } from 'rxjs/internal/scheduler/async';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Subscription } from 'rxjs';
var note:any;
declare var google;
var loclat:any;
var loclong:any;
var mapElement:any
var a:any
var star:any
@Component({
  selector: 'app-viewjobdetails',
  templateUrl: './viewjobdetails.page.html',
  styleUrls: ['./viewjobdetails.page.scss'],
})
export class ViewjobdetailsPage implements OnInit,AfterViewInit {
pages=[]

@ViewChild('mapElement',{ static: true }) mapNativeElement: ElementRef;
map: any;
  currentMapTrack = null;
  public completed:boolean =false
  isTracking = false;
  trackedRoute = [];
  previousTracks = [];
 commend=''
  positionSubscription: Subscription;
  workersdetails=[];
  note=false;
  latitude: any;
  longitude: any;
  
  mapElement:any;

  constructor(private authService:AuthService,private router:Router,private geolocation: Geolocation,public toastController: ToastController) { }
  public change(){
    var Dt=Date.now()
    this.authService.deletebooking({"userid":this.authService.jid,"workerid":this.authService.uid}).subscribe((res:any)=>{
      console.log(res)
      this.authService.deletechat({"myid":this.authService.uid,"friendid":this.authService.jid,"myid1":this.authService.jid,"friendid1":this.authService.uid}).subscribe(res=>{
        console.log(res)
        this.authService.notification({"userid":this.authService.jid,"content":'I completed your service successfully',"from":this.authService.name,"datetime":Dt,"notificationtype":"completed"}).subscribe(res=>{
          console.log(res)
        })
      })
    })
    this.completed=false
  }
  public starmark(item)
  {
    star=item
    var count
    console.log(item)
  count=item;
  sessionStorage.starRating = count;
  var subid= item;
  for(var i=0;i<5;i++)
  {
  if(i<count)
  {
    //var s=document.getElementById((i+1)+subid)
    //console.log(s)
    //console.log((i+1)+'rt')
  document.getElementById((i+1)+'rt').style.color="orange";
  }
  else
  {
  document.getElementById((i+1)+'rt').style.color="black";
  }
  
  
  }
  
  }
  public sendreview(){
    if(this.commend.length!=0){
      var d=Date.now()
      this.authService.adduserreview({"userid":this.authService.jid,"workerid":this.authService.uid,"star":star,"commend":this.commend,"datetime":d}).subscribe(async res=>{
        console.log(res)
        const toast = await this.toastController.create({
          message: 'You rated successsfully.',
          duration: 2000
        });
        toast.present();
      })
      
    

    }
  
  }
ionViewWillEnter(){
 this.authService.viewprofile({"_id":this.authService.jid}).subscribe((res:any)=>{
   console.log(res)
   a=[res]
   this.pages=a
 })
 this.authService.viewlocation({"userid":this.authService.jid}).subscribe((res:any)=>{
  console.log(res)
  loclat=res.latitude
  loclong=res.longitude
  console.log(loclat)
  console.log(loclong)

  this.latitude = res.latitude;
      this.longitude = res.longitude;
     
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
    // this.geolocation.getCurrentPosition().then(pos => {
    //   let latLng = new google.maps.LatLng(loclat,loclong);
    //   this.mapElement.setCenter(latLng);
    //   this.mapElement.setZoom(16);
    // }).catch((error) => {
    //   console.log('Error getting location', error);
    // });
  }

}
