import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse, HttpHeaders } from '@angular/common/http';
import { API_URLS } from 'src/app/config/api.url.config';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  authenticated = false;
  constructor(private http: HttpClient, private cookieService: CookieService,
    ) { }

  authenticate(credentials, callback) {
    if(credentials){
      const token = btoa(credentials.username + ':' + credentials.password);
      this.cookieService.set('token', token);   

      this.http.get(API_URLS.USER_URL).subscribe(response => {

          if (response && response['name']) {
            console.log(response);
              this.authenticated = true;
           
          } else {
              this.authenticated = false;
          }
          return callback && callback();
      });
    }
    else {
      this.authenticated = false;
    }
  }

  logout(callback){
    this.authenticated = false;
    return callback && callback();
  }
}
