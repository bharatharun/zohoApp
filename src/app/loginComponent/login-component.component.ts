import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {
  showLoginForm=true;
  showSignupForm=false;
  constructor() { }

  ngOnInit(): void {
    
  }
  login(){
    this.showLoginForm=true;
    this.showSignupForm=false;
  }
  signup(){
    this.showLoginForm=false;
    this.showSignupForm=true;
  }
  showTime(){
    alert("hi ");
  }
}