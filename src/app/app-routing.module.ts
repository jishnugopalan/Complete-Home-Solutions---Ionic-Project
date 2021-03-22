import { AuthGuardService } from './services/auth-guard.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'userhome',
    loadChildren: () => import('./userhome/userhome.module').then( m => m.UserhomePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'mainpage',
    loadChildren: () => import('./mainpage/mainpage.module').then( m => m.MainpagePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'members',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)

  },
  {
    path: 'worker',
    loadChildren: () => import('./worker/worker.module').then( m => m.WorkerPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  
  {
    path: 'admin-approval',
    loadChildren: () => import('./admin-approval/admin-approval.module').then( m => m.AdminApprovalPageModule)
  },
  {
    path: 'admin-addcategory',
    loadChildren: () => import('./admin-addcategory/admin-addcategory.module').then( m => m.AdminAddcategoryPageModule)
  },
  {
    path: 'admin-feedbacks',
    loadChildren: () => import('./admin-feedbacks/admin-feedbacks.module').then( m => m.AdminFeedbacksPageModule)
  },
  {
    path: 'joblist',
    loadChildren: () => import('./joblist/joblist.module').then( m => m.JoblistPageModule)
  },
  {
    path: 'admin-workerlist',
    loadChildren: () => import('./admin-workerlist/admin-workerlist.module').then( m => m.AdminWorkerlistPageModule)
  },
  {
    path: 'myworkers',
    loadChildren: () => import('./myworkers/myworkers.module').then( m => m.MyworkersPageModule)
  },
  {
    path: 'bookworker',
    loadChildren: () => import('./bookworker/bookworker.module').then( m => m.BookworkerPageModule)
  },
  {
    path: 'user-notification',
    loadChildren: () => import('./user-notification/user-notification.module').then( m => m.UserNotificationPageModule)
  },
  {
    path: 'viewchat',
    loadChildren: () => import('./viewchat/viewchat.module').then( m => m.ViewchatPageModule)
  },
  {
    path: 'accept-notification',
    loadChildren: () => import('./accept-notification/accept-notification.module').then( m => m.AcceptNotificationPageModule)
  },
  {
    path: 'mybookings',
    loadChildren: () => import('./mybookings/mybookings.module').then( m => m.MybookingsPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/changepassword.module').then( m => m.ChangepasswordPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'viewworkerdetails',
    loadChildren: () => import('./viewworkerdetails/viewworkerdetails.module').then( m => m.ViewworkerdetailsPageModule)
  },
  {
    path: 'viewjobdetails',
    loadChildren: () => import('./viewjobdetails/viewjobdetails.module').then( m => m.ViewjobdetailsPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'workeraccount',
    loadChildren: () => import('./workeraccount/workeraccount.module').then( m => m.WorkeraccountPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
