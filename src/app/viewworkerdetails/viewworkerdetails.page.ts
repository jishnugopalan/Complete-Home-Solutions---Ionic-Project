import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
var w:any
var star:any
@Component({
  selector: 'app-viewworkerdetails',
  templateUrl: './viewworkerdetails.page.html',
  styleUrls: ['./viewworkerdetails.page.scss'],
})
export class ViewworkerdetailsPage implements OnInit {
pages=[]
commend=''
public reject:boolean =false
  constructor(private authService:AuthService,private router:Router,public toastController: ToastController) { }
  ionViewWillEnter(){
    this.authService.viewmyworkersdetails({"_id":this.authService.wid}).subscribe(res=>{
      console.log(res)
      w=res
      this.pages=w
    })
   
  }
  public rejectworker(){
    if(this.reject==true){
      var Dt=Date.now();
    this.authService.deletebooking({"userid":this.authService.uid,"workerid":this.authService.wid}).subscribe(res=>{
      console.log(res)
      this.authService.notification({"userid":this.authService.wid,"content":'Rejected the job request with you',"from":this.authService.name,"datetime":Dt,"notificationtype":"rejected"}).subscribe(res=>{
        console.log(res)
        this.authService.deletechat({"myid":this.authService.uid,"friendid":this.authService.wid,"myid1":this.authService.wid,"friendid1":this.authService.uid}).subscribe(async res=>{
          console.log(res)
          const toast = await this.toastController.create({
            message: 'Rejected successfully.',
            duration: 2000
          });
          toast.present();
        })
      })
    })
    this.reject=false

    }
    

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
    this.authService.addreview({"userid":this.authService.uid,"workerid":this.authService.wid,"star":star,"commend":this.commend,"datetime":d}).subscribe(async res=>{
      console.log(res)
      const toast = await this.toastController.create({
        message: 'Rated successfully.',
        duration: 2000
      });
      toast.present();
    })
  }

}

  ngOnInit() {
  }

}
