import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenService } from '../login/service/authen.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  credentials = {
    username: '',
    password: ''
  };

  constructor(private fb: FormBuilder,
              private appService: AuthenService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  login(){
    this.appService.authenticate(this.credentials, ()=>{
      this.router.navigateByUrl('/home/(homeOutlet:produit)');
    });
  }

}
