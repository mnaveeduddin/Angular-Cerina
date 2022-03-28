import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  // @Input()
  // username!: string;

  title: string | null | undefined ;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    
    this.title = this.appService.getValue();
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  
}
