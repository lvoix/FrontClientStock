import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenService } from '../login/service/authen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  showSideBar: boolean = false;

  @Output()
  showSideBarChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor(private appService: AuthenService, private router: Router) { }

  ngOnInit() {
  }

  afficherSideBar(){
    this.showSideBar = !this.showSideBar;
    this.showSideBarChange.emit(this.showSideBar);
  }
  
  logout(){
    this.appService.logout(()=>{
      this.router.navigateByUrl('/login');
    });
  }

}
