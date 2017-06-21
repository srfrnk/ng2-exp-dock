import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../environments/environment';

@Injectable()
export class DataService {
  constructor(private http: Http) { }

  getUser(): Promise<any> {
    return this.http.get(`${environment.apiUrl}/`)
      .toPromise()
      .then(response => {
        return response.json();
      });
  }
}
