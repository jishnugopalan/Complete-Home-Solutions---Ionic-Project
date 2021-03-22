import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  count: Object;
w=false
  constructor(private authService:AuthService) { }
  ionViewWillEnter(){
    this.authService.viewifworker({"userid":this.authService.uid}).subscribe(res=>{
      this.w=true
    })
   
    this.authService.countnotification({"userid":this.authService.uid}).subscribe(res=>{
      console.log(res)
      this.count=res
      
    })
  }

  ngOnInit() {
  }

}
