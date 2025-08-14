import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-getapi',
  imports: [],
  templateUrl: './getapi.component.html',
  styleUrl: './getapi.component.scss'
})
export class GetapiComponent {

  userList: any[] = [];
  // api call integration
  constructor(private http: HttpClient) {
    
  }

  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: any) => {
      this.userList = res;
      console.log(this.userList)
    })
  }
}
