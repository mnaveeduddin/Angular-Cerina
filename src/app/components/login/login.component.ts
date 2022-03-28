import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login' ,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  faLock = faLock;

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  username: any;
  constructor(private appService: AppService, private router: Router) { }

  // public username = "";
  ngOnInit(): void {
    if (this.appService.isLoggedIn()){
      this.router.navigate(['main-page']);
    }
  }
  
  transfer(): void{
    console.log(this.loginForm.value);

    if (this.loginForm.valid){
      this.appService.login(this.loginForm.value).subscribe(
        (result) => {
          this.router.navigate(['main-page']);
         },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
    
    
    this.appService.setValue(this.username);

  }



  // @Output() emitter:EventEmitter<string> = new EventEmitter<string>();

  // emit(username: string ){
  //   this.emitter.emit(username);
    
  // }
 
}
