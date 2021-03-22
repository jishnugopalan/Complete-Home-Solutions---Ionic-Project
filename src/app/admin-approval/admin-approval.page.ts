import { ToastController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
var jobs:any;

@Component({
  selector: 'app-admin-approval',
  templateUrl: './admin-approval.page.html',
  styleUrls: ['./admin-approval.page.scss'],
})
export class AdminApprovalPage implements OnInit {
 
  public approved:boolean =false
  public rejected:boolean =false
  workersdetails=[];
  workerslist=[];
  constructor(private authService:AuthService,public alertController:AlertController) { }
  ionViewWillEnter(){
    console.log("ionViewDidEnter")
    this.authService.viewWorkerdetails({"userid":this.authService.id}).subscribe(res=>{
      console.log(res)
      
       jobs=[res];
    
       console.log(jobs)
       this.workerslist=jobs;
       console.log(this.workerslist)
       
       //this.workersdetails=jobs.workersdetails;
      //  console.log(this.workersdetails)

    })
    
  }
  public reject(){
    var Dt = Date.now();
    this.authService.deleteworkeraccount({"userid":this.authService.id}).subscribe(res=>{
      console.log(res)
      this.authService.notification({"userid":this.authService.id,"content":"Admin rejected your request for worker account","from":"Admin","datetime":Dt,"notificationtype":"admin"}).subscribe(async res=>{
        console.log(res)
        const alert = await this.alertController.create({
          header: 'Rejected',
          subHeader: '',
          message: 'Rejected successfully',
          buttons: ['OK']
        });
        await alert.present();
      })
    })
  }
  public change(){
    //var a=document.getElementById("toggle").value;
    console.log(this.authService.id)
    this.authService.updateWorker({"userid":this.authService.id}).subscribe(async res=>{
      console.log(res)
      
      
      var Dt = Date.now();
      this.authService.notification({"userid":this.authService.id,"content":"Admin approved your request for worker account","from":"Admin","datetime":Dt,"notificationtype":"admin"}).subscribe(res=>{
        console.log(res)
      })
      const alert = await this.alertController.create({
        header: 'Approved',
        subHeader: '',
        message: 'Approved successfully',
        buttons: ['OK']
      });
      await alert.present();

    })
    

  }
  ngOnInit() {
  }

}
