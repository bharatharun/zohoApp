import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './loginComponent/login-component.component';
import {ProfileComponent} from './profileComponent/profile-component.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import {MostDownloadedComponent} from './most-downloaded/most-downloaded.component'

const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path:'profile', component: ProfileComponent
  },
  {
    path: '', redirectTo: '/profile', pathMatch: 'full'
  },
  {
    path:'imageUpload', component: ImageUploadComponent
  },
  {
    path:'mostDownload', component: MostDownloadedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
