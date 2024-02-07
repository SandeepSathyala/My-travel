import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Contact = new FormGroup({
    name :  new FormControl(),
    email : new FormControl(),
    number : new FormControl(),
    subject : new FormControl(),
    message : new FormControl()
  })

  Display(){
    console.log(this.Contact.value)
  }



  constructor() { }

  ngOnInit(): void {
  }

}
