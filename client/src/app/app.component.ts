import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  title = 'Angular 2 App';
  data: any = "here be users";

  constructor(private dataSvc: DataService) {
    this.dataSvc.getUser()
      .then(data => {
        this.data = JSON.stringify(data);
      })
      .catch(err => {
        console.log(err)
      });
  }
}
