import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  jobForm:FormGroup
  constructor(private formBuilder: FormBuilder,private authService:AuthService,private router:Router) { 

   this.jobForm = this.formBuilder.group({
      category: ['', [Validators.required, Validators.maxLength(100)]],
      
    });
  }
  get category(){
    return this.jobForm.get('category');
  }
  public errorMessages = {
    category: [
      { type: 'required', message: 'category is required' },
      { type: 'maxlength', messages: 'Name cannot be longer than 100 charetors' }
    ],
    
  };
  
  public submit(){
    console.log(this.jobForm.value);
    this.authService.category(this.jobForm.value).subscribe(res=>{
      console.log(res)
      // var uid=res._id;
      // console.log(uid)
      // this.authService.phone=this.registrationForm.value.phone;
      // this.authService.uid=uid;
      // this.router.navigateByUrl("/password");
       
    })
  }
  ngOnInit() {
  }

}
