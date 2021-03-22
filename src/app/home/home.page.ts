import { Component } from '@angular/core';
import { ActivationStart } from '@angular/router';
import { OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router,  } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  router: any;
  outlet: any;

  constructor() {}
  // ngOnInit(): void {
  //   this.router.events.subscribe(e => {
  //     if (e instanceof ActivationStart && e.snapshot.outlet === "administration")
  //       this.outlet.deactivate();
  //   });
  // }

}
