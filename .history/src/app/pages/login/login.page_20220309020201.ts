import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    this.form = 
  }
  login(){
    this.router.navigate(['home']);
  }
  register(){
    this.router.navigate(['register']);
  }
}
