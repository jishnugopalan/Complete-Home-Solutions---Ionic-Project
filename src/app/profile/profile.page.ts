import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
var image:any;
var d:any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  credentialsForm: any;
  profileForm: any;
  details=[];
  tdo=''
  dob=''
  gdr=''
  ph=''
  pic=''
  b=''
  files=''
  em=''
  constructor(private Formbuilder: FormBuilder,private authService: AuthService,public router: Router,public toastController: ToastController) { 
    this.profileForm = this.Formbuilder.group({
   
      name: [
        '',
        [
          Validators.required,
          //Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
        ]
      ],
      date_of_birth: [
        '',
        [
          Validators.required
          
        ]
      ],
      gender: [
        '',
        [
          Validators.required
          
        ]
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
          Validators.maxLength(10),
          Validators.minLength(10)
          
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
        ]
      ],
      bio: [
        '',
        [
          Validators.required
          
        ]
      ],
    });
  
  }

  get name(){
    return this.profileForm.get('name');
  }
  get date_of_birth(){
    return this.profileForm.get('date_of_birth');
  }
  get gender(){
    return this.profileForm.get('gender');
  }
  get phone(){
    return this.profileForm.get('phone');
  }
  get bio(){
    return this.profileForm.get('bio');
  }
 
  public async editname(){
    var n=this.tdo
    console.log(n)
    if(n!=''){
      this.authService.updatename({"_id":this.authService.uid,"name":n}).subscribe(res=>{
        console.log(res)
      })
      const toast = await this.toastController.create({
        message: 'Name updated successfully',
        duration: 2000
      });
      toast.present();
    }
    else{
      const toast = await this.toastController.create({
        message: 'Please input a name',
        duration: 2000
      });
      toast.present();
    }
    
  }
  public async editdob(){
    var n=this.dob
    console.log(n)
    if(n!=''){
      this.authService.updatedob({"_id":this.authService.uid,"dob":n}).subscribe(res=>{
        console.log(res)
      })
      const toast = await this.toastController.create({
        message: 'Date of birth updated successfully',
        duration: 2000
      });
      toast.present();
    }
    else{
      const toast = await this.toastController.create({
        message: 'Please select date of birth',
        duration: 2000
      });
      toast.present();
    }
    
    
  }
  public async editgender(){
    var n=this.gdr
    console.log(n)
    if(n!='undefined'){
      this.authService.updategender({"_id":this.authService.uid,"gender":n}).subscribe(res=>{
        console.log(res)
      })
      const toast = await this.toastController.create({
        message: 'Gender updated successfully.',
        duration: 2000
      });
      toast.present();
    }
    else{
      const toast = await this.toastController.create({
        message: 'Please select a gender',
        duration: 2000
      });
      toast.present();
    }
    
  }
  public async editphone(){
    var n=this.ph
    console.log(n)
    if(n.length==10){
      this.authService.updatephone({"_id":this.authService.uid,"phone":n}).subscribe(res=>{
        console.log(res)
      })
      const toast = await this.toastController.create({
        message: 'Phone number updatedsuccessfully',
        duration: 2000
      });
      toast.present();
    }
    else{
      const toast = await this.toastController.create({
        message: 'Please input a correct phone number',
        duration: 2000
      });
      toast.present();
    }
    
  }
  public async editemail(){
    var n=this.em
    console.log(n)
    if(n.length>2){
      this.authService.updateemail({"_id":this.authService.uid,"email":n}).subscribe(async res=>{

        console.log(res)
        const toast = await this.toastController.create({
          message: 'Email updatedsuccessfully',
          duration: 2000
        });
        toast.present();
      })
     
    }
    else{
      const toast = await this.toastController.create({
        message: 'Please input a correct email',
        duration: 2000
      });
      toast.present();
    }
    
  }
  public async editpic(){
    var n=this.pic
    console.log(n)
    console.log(image)
    if(image!='null'){
      
      this.authService.updatepic({"_id":this.authService.uid,"profile_pic":image}).subscribe(async res=>{
        console.log(res)
        const toast = await this.toastController.create({
          message: 'Profile picture updated successfuly.',
          duration: 2000
        });
        toast.present();
      })
     
    }
    
  }
  public async editbio(){
    var n=this.b
    console.log(n)
    if(n!=''){
      this.authService.updatebio({"_id":this.authService.uid,"bio":n}).subscribe(res=>{
        console.log(res)
      })
      const toast = await this.toastController.create({
        message: 'Bio updated successfuly.',
        duration: 2000
      });
      toast.present();
    }
    else{
      const toast = await this.toastController.create({
        message: 'Please input something',
        duration: 2000
      });
      toast.present();
    }
    
  }

  
  async encodeImageFileAsURL() {
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
    else
    {

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
    var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
    var filesSelected = document.getElementById("inputFileToLoad")["files"];
    console.log(filesSelected["value"])
  //   if(!fileExtension.exec(filesSelected)){
  //     alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
  //     filesSelected.value = '';
  //     return false;
  // }

    console.log("err1")
    
  }

public submit(){
console.log(this.profileForm.value);
var data=this.profileForm.value;
data=Object.assign(data,{"_id":this.authService.uid,"profile_pic":image})
console.log(data)
this.authService.updateprofile(data).subscribe(async res=>{
  console.log(res)
  
//alert("You need to wait for admin approval");
  // var uid=res._id;
  // console.log(uid)
  // this.authService.phone=this.registrationForm.value.phone;
  // this.authService.uid=uid;
  // this.router.navigateByUrl("/password");
   
})

}
ionViewWillEnter(){
  console.log("ionViewDidEnter")

  this.authService.viewprofile({"_id":this.authService.uid}).subscribe(res=>{
    console.log(res)
    d=[res]
    this.details=d;
    console.log(this.details)
    //  jobs= res;
  
    //  console.log(jobs)
    //  this.joblist=jobs;
  })
  
}
  ngOnInit() {
  }

}
