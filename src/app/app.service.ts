import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  data='';
  constructor(private router: Router) { }
  
  setValue(token:string): void{

    localStorage.setItem('token',token)


    this.data = token;
    console.log("in service",this.data)
  }
  getValue():string | null{

    return localStorage.getItem('token');

    // return this.data
  }

  isLoggedIn(){
    return this.getValue() != null;
  }
 
  // logout(){
  //   localStorage.removeItem('token');
  //   this.router.navigate(['login']);
  // }

  login({username, password}: any): Observable<any>{
    if (username === 'naveed' && password === 'naveed123'){
      this.setValue('abc');
      return of({ name: 'Naveed Uddin', username: 'naveed'});
    }
    return throwError(new Error('Failed to Login'));
  }
}
