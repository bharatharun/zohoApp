import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './loginComponent/login-component.component';
import { ProfileComponent } from './profileComponent/profile-component.component';
import { HeaderComponent } from './header/header.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MostDownloadedComponent } from './most-downloaded/most-downloaded.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    HeaderComponent,
    ImageUploadComponent,
    MostDownloadedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
