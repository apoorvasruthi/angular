import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {CommonService} from './../services/common.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup; 
  constructor(public commonService: CommonService) { }

  ngOnInit() {
     this.contactForm = this.commonService.contactForm();
  }
  onSubmit(fromData, isValid){
    alert(JSON.stringify(fromData));
  }
}
