import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {RoutingModule} from './routes.module'; 
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {CommonService} from './services/common.service';

export const firebaseConfig = {
apiKey: "AIzaSyDjmO3TaBPcCp2wSBL1sKXt2pErC8Enbbc",
authDomain: "baseball-306bd.firebaseapp.com",
databaseURL: "https://baseball-306bd.firebaseio.com",
projectId: "baseball-306bd",
storageBucket: "baseball-306bd.appspot.com",
messagingSenderId: "764426706017"
};
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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
