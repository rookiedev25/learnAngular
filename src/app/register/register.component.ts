import { HttpClient } from '@angular/common/http';
import { Component, inject, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  url = "asda"
  // constructor(http: HttpClient) {
    
  // }
  registerObj: any = {
    "name": "",
    "email": "",
    "message": ""
  }
  http = inject(HttpClient)

  submitEntry() {
    // post api call
    this.http.post(this.url, this.registerObj).subscribe((res: any) => {
      if (res.result) {
        alert("submitted successfully")
      }
      else {
        alert(res.message)
      }
    })
  }
}
