import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'The dating App';
  users:any;
  constructor(private http:HttpClient){}
  ngOnInit() {
   this.getUsers();
   
  }
   getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response
      ,
      error: error => console.log(error)
    })
  }
}
