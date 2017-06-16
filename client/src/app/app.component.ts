import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 App';
  apiUrl = 'http://localhost:8080/api/v1/users';
  data: any = "here be users";

  constructor(private http: Http) {
    this.http.get(this.apiUrl)
      .toPromise()
      .then(response => {
        return response.json() as any
      })
      .then(data => {
        this.data = JSON.stringify(data);
      })
      .catch(err => {
        console.log(err)
      });
  }
}
