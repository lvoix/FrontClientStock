import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenService } from '../app/login/service/authen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontClientStock';
  showHideSidebar : boolean = false;

  constructor(private appService: AuthenService,
    private router: Router){}

  ngOnInit(){
    if(!this.appService.authenticated){
      this.router.navigate(['/login']);
    }
    else {
      this.router.navigate(['/home']);
    }
  }
  onAficheChangeBar(showHideSidebar){
    this.showHideSidebar = showHideSidebar;

  }

}

