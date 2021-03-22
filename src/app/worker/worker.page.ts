import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
var jobs: any;
var image: any;

@Component({
  selector: 'app-worker',
  templateUrl: './worker.page.html',
  styleUrls: ['./worker.page.scss'],
})
export class WorkerPage implements OnInit {
 joblist=[];
 workerForm:FormGroup
 files=''
  count: Object;
  

  constructor(private authService:AuthService,public router: Router, public formbuilder: FormBuilder,public toastController: ToastController,public alertController: AlertController) { 
    this.workerForm = this.formbuilder.group({
      job_category: ['', [Validators.required]],
      job_start_time: ['', [Validators.required]],
      job_end_time: ['', [Validators.required]],
      job_salary: ['', [Validators.required]],
      job_verification: ['', [Validators.required]],
       //job_document: ['', [Validators.required]],
      job_description: ['', [Validators.required]],
  });
    
  }
  get job_category(){
    return this.workerForm.get('job_category');
  }
  get job_start_time(){
    return this.workerForm.get('job_start_time');
  }
  get job_end_time(){
    return this.workerForm.get('job_end_time');
  }
  get job_salary(){
    return this.workerForm.get('job_salary');
  }
  get job_verification(){
    return this.workerForm.get('job_verification');
  }
  // get job_document(){
  //   return this.workerForm.get('job_document');
  // }
  get job_description(){
    return this.workerForm.get('job_description');
  }
  async encodeImageFileAsURL() {
    console.log("err")
    console.log("err")
    var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
    var filesSelected = document.getElementById("inputFileToLoad")["files"];
    var fileInput = document.getElementById('inputFileToLoad');
    var filePath = fileInput["value"];
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        // alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        fileInput["value"] = '';
       // return false;
        const toast = await this.toastController.create({
          message: 'Please upload file having extensions .jpeg/.jpg/.png/.gif only.',
          duration: 2000
        });
        toast.present();
    
      }
      else{
        console.log(filesSelected.length)
        if (filesSelected.length > 0) {
          var fileToLoad = filesSelected[0];
    
          var fileReader = new FileReader();
    
          fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target["result"]; // <--- data: base64
            image=srcData;
            console.log(image)
            // var newImage = document.createElement('img');
            // newImage.src = srcData;
    
            // document.getElementById("imgTest").innerHTML = newImage.outerHTML;
            // alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
            // console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
          }
          fileReader.readAsDataURL(fileToLoad);
        }
      }

    // var filesSelected = document.getElementById("inputFileToLoad").files;
    // console.log("err1")
    // console.log(filesSelected.length)
    // if (filesSelected.length > 0) {
    //   var fileToLoad = filesSelected[0];

    //   var fileReader = new FileReader();

    //   fileReader.onload = function(fileLoadedEvent) {
    //     var srcData = fileLoadedEvent.target.result; // <--- data: base64
    //     image=srcData;
    //     console.log(image)
        // var newImage = document.createElement('img');
        // newImage.src = srcData;

        // document.getElementById("imgTest").innerHTML = newImage.outerHTML;
        // alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
        // console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
    //   }
    //   fileReader.readAsDataURL(fileToLoad);
    // }
  }
public submit(){
  console.log(this.workerForm.value);
  var data=this.workerForm.value;
  console.log(this.authService.logid)
  data=Object.assign(data,{"userid":this.authService.uid,"job_document":image,"admin_status":'0'})
  console.log(data)
  this.authService.addWorker(data).subscribe(async res=>{
    console.log(res)
    const alert = await this.alertController.create({
      header: 'Documents uploaded successfully',
      subHeader: '',
      message: 'You need to wait for admin approval',
      buttons: ['OK']
    });
    await alert.present();

// alert("You need to wait for admin approval");
//     var uid=res._id;
//     console.log(uid)
//     this.authService.phone=this.registrationForm.value.phone;
//     this.authService.uid=uid;
//     this.router.navigateByUrl("/password");
     
  })
}
  ionViewWillEnter(){
    this.authService.countnotification({"userid":this.authService.uid}).subscribe(res=>{
      console.log(res)
      this.count=res
      
    })
    console.log("ionViewDidEnter")
    this.authService.viewJob('').subscribe(res=>{
      console.log(res)
      
       jobs= res;
    
       console.log(jobs)
       this.joblist=jobs;

       
    })
    this.authService.viewifworker({"userid":this.authService.uid}).subscribe(async res=>{
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Oops!',
        message: 'You are already a worker',
        buttons: ['OK']
      });
      await alert.present();
      this.router.navigateByUrl("/mainpage")
    })
   
    
  }

  ngOnInit() {
  }

}
