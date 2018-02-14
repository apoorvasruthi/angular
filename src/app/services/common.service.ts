import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/switchMap";
@Injectable()
export class CommonService {

  constructor(public formBuilder: FormBuilder, public afDb: AngularFireDatabase, private afs: AngularFirestore) { }

  contactForm(){
    return this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email        
      ]),      
    ],
    zipcode: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]+'), Validators.maxLength(5)])],
    state: ['', Validators.required]
    });
  }
  getFireStoeList(collectionPath, documentPath?){
    //this.progressService.start(); 
    return documentPath ? this.afs.collection(collectionPath).doc(documentPath).valueChanges().map(data => data).catch(err => { return Observable.of(this.showError());}) : this.afs.collection(collectionPath).valueChanges().map(data => data).catch(err => { return Observable.of(this.showError());});
  }
  addToDatabase(collectionPath, documentPath, items){
    return this.afs.collection(collectionPath).doc(documentPath).set(items);
    // const afList = this.afDb.list('items');
    // afList.push({ name: 'item' });
    // const listObservable = afList.snapshotChanges();
    // listObservable.subscribe();
  }
  showError() {
    alert('some error occured');
   // this.toastService.show('Server is not responding', 4000, 'black');  
  }
}
