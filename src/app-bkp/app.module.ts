import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {RoutingModule} from './routes.module'; 

import {CommonService} from './services/common.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
