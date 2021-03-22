import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
var jobs:any
@Component({
  selector: 'app-admin-workerlist',
  templateUrl: './admin-workerlist.page.html',
  styleUrls: ['./admin-workerlist.page.scss'],
})
export class AdminWorkerlistPage implements OnInit {
  workerslist=[];
  
  constructor(private authService:AuthService,private router:Router) { }
  ionViewWillEnter(){
    console.log("ionViewDidEnter")
    this.authService.viewWorker('').subscribe(res=>{
      console.log(res)
      
       jobs= res;
    
       console.log(jobs)
       this.workerslist=jobs;
       
      //  this.workersdetails=jobs.workersdetails;
      //  console.log(this.workersdetails)

    })
    
  }
  view(j){
    this.authService.id=(j._id)
    console.log(this.authService.id)
    this.router.navigateByUrl("/admin-approval");
    // this.authService.viewWorkerdetails(this.authService.id).subscribe(res=>{
    //   console.log(res)
      
    //    this.authService.jobs= res;
    
    //    console.log( this.authService.jobs)
    //    
    //    //this.workerslist=jobs;
       
    //   //  this.workersdetails=jobs.workersdetails;
    //   //  console.log(this.workersdetails)

    // })

  }
  ngOnInit() {
  }

}
