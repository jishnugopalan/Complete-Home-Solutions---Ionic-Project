import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
 
const TOKEN_KEY = 'access_token';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  url = environment.url;
  user = null;
  authenticationState = new BehaviorSubject(false);
 phone:any;
 uid:any;
 logid:any;
 id:any;
 jobs:any;
 myworkers:any;
 latitude:any;
 longitude:any;
 name:any;
 workerid:any;
 notificationid:any;
 bookingid:any
 fid:any
 fname:any
 fpic:any
 wid:any
 jid:any
  constructor(private http: HttpClient, private helper: JwtHelperService, private storage: Storage,
    private plt: Platform, private alertController: AlertController) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }
 
  checkToken() {
    this.storage.get(TOKEN_KEY).then(token => {
      if (token) {
        let decoded = this.helper.decodeToken(token);
        let isExpired = this.helper.isTokenExpired(token);
 
        if (!isExpired) {
          this.user = decoded;
          this.authenticationState.next(true);
        } else {
          this.storage.remove(TOKEN_KEY);
        }
      }
    });
  
  }
  updatedescription(credentials: any) {
    return this.http.post(`${this.url}/api/updatedescription`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatesalary(credentials: any) {
    return this.http.post(`${this.url}/api/updatesalary`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updateendtime(credentials: any) {
    return this.http.post(`${this.url}/api/updateendtime`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatestarttime(credentials: any) {
    console.log("err1")
    return this.http.post(`${this.url}/api/updatestarttime`, credentials).pipe(
      catchError(e => {
        console.log("err2")
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updateemail(credentials: any) {
    return this.http.post(`${this.url}/api/updateemail`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  deleteworkeraccount(credentials: any) {
    return this.http.post(`${this.url}/api/deleteworkeraccount`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  findphone(credentials: any) {
    return this.http.post(`${this.url}/api/findphone`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  findemail(credentials: any) {
    return this.http.post(`${this.url}/api/findemail`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatenotification(credentials: any) {
    return this.http.post(`${this.url}/api/updatenotification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  countnotification(credentials: any) {
    return this.http.post(`${this.url}/api/countnotification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  availablestatus(credentials: any) {
    return this.http.post(`${this.url}/api/availablestatus`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  deletenotififcation(credentials: any) {
    return this.http.post(`${this.url}/api/deletenotification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  rejectbooking(credentials: any) {
    return this.http.post(`${this.url}/api/rejectbooking`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewifworker(credentials: any) {
    return this.http.post(`${this.url}/api/viewifworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  viewuserreview(credentials: any) {
    return this.http.post(`${this.url}/api/viewuserreview`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  adduserreview(credentials: any) {
    return this.http.post(`${this.url}/api/adduserreview`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }


  deletechat(credentials: any) {
    return this.http.post(`${this.url}/api/deletechat`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  deletebooking(credentials: any) {
    return this.http.post(`${this.url}/api/deletebooking`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewreview(credentials: any) {
    return this.http.post(`${this.url}/api/viewreview`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addreview(credentials: any) {
    return this.http.post(`${this.url}/api/addreview`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  searchcategory(credentials: any) {
    return this.http.post(`${this.url}/api/searchcategory`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewmybookedjobs(credentials: any) {
    return this.http.post(`${this.url}/api/viewmybookedjobs`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewfeedback(credentials: any) {
    return this.http.post(`${this.url}/api/viewfeedback`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addfeedback(credentials: any) {
    return this.http.post(`${this.url}/api/addfeedback`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  updatepass(credentials: any) {
    return this.http.post(`${this.url}/api/updatepass`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  checkpass(credentials: any) {
    console.log("err")
    return this.http.post(`${this.url}/api/checkpass`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatepic(credentials: any) {
    return this.http.post(`${this.url}/api/updatepic`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatebio(credentials: any) {
    return this.http.post(`${this.url}/api/updatebio`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatephone(credentials: any) {
    return this.http.post(`${this.url}/api/updatephone`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updategender(credentials: any) {
    return this.http.post(`${this.url}/api/updategender`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatedob(credentials: any) {
    return this.http.post(`${this.url}/api/updatedob`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updatename(credentials: any) {
    return this.http.post(`${this.url}/api/updatename`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewmybooking(credentials: any) {
    return this.http.post(`${this.url}/api/viewmybooking`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewbooking(credentials: any) {
    return this.http.post(`${this.url}/api/viewbooking`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewchat(credentials: any) {
    return this.http.post(`${this.url}/api/viewchat`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  chatmsg(credentials: any) {
    return this.http.post(`${this.url}/api/chatmsg`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewchatlist(credentials: any) {
    return this.http.post(`${this.url}/api/viewchatlist`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  acceptworker(credentials: any) {
    return this.http.post(`${this.url}/api/acceptworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewparticularnotification(credentials: any) {
    return this.http.post(`${this.url}/api/viewparticularnotification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewlocation(credentials: any) {
    return this.http.post(`${this.url}/api/viewlocation`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  bookworker(credentials: any) {
    return this.http.post(`${this.url}/api/bookworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addlocation(credentials: any) {
    return this.http.post(`${this.url}/api/addlocation`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewmyworkersdetails(credentials: any) {
    return this.http.post(`${this.url}/api/viewmyworkersdetails`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewmyworkers(credentials: any) {
    return this.http.post(`${this.url}/api/viewmyworkers`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewprofile(credentials: any) {
    return this.http.post(`${this.url}/api/viewprofile`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updateprofile(credentials: any) {
    return this.http.post(`${this.url}/api/updateprofile`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewnotification(credentials: any) {
    return this.http.post(`${this.url}/api/viewnotification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  notification(credentials: any) {
    return this.http.post(`${this.url}/api/notification`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewJob(credentials: any) {
    return this.http.post(`${this.url}/api/viewjob`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  updateWorker(credentials: any) {
    return this.http.post(`${this.url}/api/updateworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewWorker(credentials: any) {
    return this.http.post(`${this.url}/api/viewworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  viewWorkerdetails(credentials: any) {
    return this.http.post(`${this.url}/api/viewworkerdetails`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  addWorker(credentials: any) {
    return this.http.post(`${this.url}/api/addworker`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
 
  register(credentials: any) {
    return this.http.post(`${this.url}/api/register`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  password(credentials: any) {
    console.log("err")
    return this.http.post(`${this.url}/api/password`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }

  checkotp(credentials: any) {
    return this.http.post(`${this.url}/api/checkotp`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
  category(credentials: any) {
    return this.http.post(`${this.url}/api/category`, credentials).pipe(
      catchError(e => {
        this.showAlert(e.error.msg);
        throw new Error(e);
      })
    );
  }
 
  login(credentials: any) {
    return this.http.post(`${this.url}/api/login`, credentials)
      .pipe(
        tap(res => {
          this.storage.set(TOKEN_KEY, res['token']);
          this.user = this.helper.decodeToken(res['token']);
          this.authenticationState.next(true);
        }),
        catchError(e => {
          this.showAlert(e.error.msg);
          throw new Error(e);
        })
      );
  }
 
  logout() {
    this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }
 
  getSpecialData() {
    return this.http.get(`${this.url}/api/special`).pipe(
      catchError(e => {
        let status = e.status;
        if (status === 401) {
          this.showAlert('You are not authorized for this!');
          this.logout();
        }
        throw new Error(e);
      })
    )
  }
 
  isAuthenticated() {
    return this.authenticationState.value;
  }
 
  showAlert(msg: string) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
}
